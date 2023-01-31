import React from 'react';
import './DashboardHome.scss';
import useAuth from '../../../../Hooks/useAuth';
import Profile from '../../User/Profile/Profile';

const DashboardHome = () => {
  const { admin } = useAuth();
  return <>
  {!admin ? <Profile /> : ''}</>;
};

export default DashboardHome;
