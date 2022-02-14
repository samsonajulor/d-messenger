import React from 'react';
import { Route, Navigate, Routes, Outlet, useLocation } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

// import {useStateValue} from './StateProvider'
  
  

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  // const [{ user }, dispatch] = useStateValue() tried to implement state provider
  let location = useLocation()

  console.log(isUser, 'this is the user')

    if (!isUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children
};
export default PrivateRoute;
