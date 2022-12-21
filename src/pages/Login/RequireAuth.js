import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';


function RequireAuth({ children }) {

    let [user,loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <Loading loadingStatus="true"></Loading>
    }
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}

export default RequireAuth;