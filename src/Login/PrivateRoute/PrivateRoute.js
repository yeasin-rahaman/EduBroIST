import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <div>
            <h2 className=''>Loading...</h2>
        </div>
    }
    if (user.email) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} />
};

export default PrivateRoute;