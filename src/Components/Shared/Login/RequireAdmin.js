import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useLocation, Navigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, Loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)

    let location = useLocation();

    if (Loading || adminLoading) {
        return <p className="text-center">Loading...</p>
    }
    if (!user || !admin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
    return children;
};
export default RequireAdmin;