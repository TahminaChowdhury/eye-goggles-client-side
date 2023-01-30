import React from 'react';
import './DashboardHome.scss';
import useAuth from '../../../../Hooks/useAuth';
import Profile from '../../User/Profile/Profile';

const DashboardHome = () => {
  const { user } = useAuth();
  return <>{user?.email ? <Profile /> : ''}</>;
};

export default DashboardHome;
