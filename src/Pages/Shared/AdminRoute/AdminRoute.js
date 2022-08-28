import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <CircularProgress animation="grow" />
      </div>
    );
  }

  return user?.email ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default AdminRoute;
