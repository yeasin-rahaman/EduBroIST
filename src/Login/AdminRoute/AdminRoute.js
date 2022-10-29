import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import spinner from './../../Assets/Images/Spinner.svg'

const AdminRoute = ({ children }) => {
    const location = useLocation()
    const { user, isLoading, admin } = useAuth()
    if (isLoading) {
        return <div>
            <div className=" justify-content-center w-100 d-flex">
                <img src={spinner} alt="" />
            </div>
        </div>
    }
    if (!admin) {
        return <div>
            <div className=" justify-content-center w-100 d-flex">
                <img src={spinner} alt="" />
            </div>
        </div>
    }
    if (user.email && admin) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} />
};

export default AdminRoute;