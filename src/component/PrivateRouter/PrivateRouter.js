import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return <div>Loading.......</div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;

};

export default PrivateRouter;