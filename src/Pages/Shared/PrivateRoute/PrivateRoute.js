import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <div className="text-center my-5 py-5">
        <Spinner animation="grow" />
      </div>
    );
  }

  return user?.email ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location }} />
  );
};

export default PrivateRoute;
