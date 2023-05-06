import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function PrivateRoutes() {  
    return <Outlet />;
  }
  
  export default PrivateRoutes;