import React from 'react';
import './DashboardHome.scss';
import useAuth from '../../../../Hooks/useAuth';
import Profile from '../../User/Profile/Profile';

const DashboardHome = () => {
  const { admin } = useAuth();
  console.log(admin);
  return (
    <>
 {
  admin === 'admin' ? 'Hello' : 'Bye'
 }
    </>
  );
};

export default DashboardHome;
