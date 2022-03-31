import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const AdminRoute = ({ children }) => {
    const location = useLocation()
    const { user, isLoading, admin } = useAuth()
    if (isLoading) {
        return <div>
            <h2 className='text-center py-5'>Loading...</h2>
        </div>
    }
    if (!admin) {
        return <div>
            <h2 className='text-center py-5'>Loading...</h2>
        </div>
    }
    if (user.email && admin) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} />
};

export default AdminRoute;