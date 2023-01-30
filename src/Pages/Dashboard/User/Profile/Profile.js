import React from 'react';
import './Profile.scss';
import useAuth from '../../../../Hooks/useAuth';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const Profile = () => {
  const { user } = useAuth();
  return (
    <Box
      sx={{ flexGrow: 1, mt: 5, backgroundColor: '#fff', borderRadius: '10px' }}
    >
      <Box className="flex-item" style={{ padding: '20px 50px 20px 50px' }}>
        <h2 className="title">My Account</h2>
      </Box>

      <Grid container spacing={2} sx={{ padding: '30px' }}>
        <Grid item xs={12} md={6}>
          <Box className="user-photo-container">
            <img
              src={
                user.photoURL
                  ? `${user.photoURL}`
                  : `https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png`
              }
              alt=""
            />
            <Box mt={3}>
              <button className="edit-btn">Edit Profile</button>
              <button className="edit-btn" style={{ marginLeft: '10px' }}>
                Change Password
              </button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="user-details-container">
          <Box>
            <label htmlFor="fullName">Full name</label>
            <p>{user.displayName}</p>
          </Box>
          <Box>
            <label htmlFor="email">Email</label>
            <p>{user.email}</p>
          </Box>

          <Box>
            <label htmlFor="phone">Phone Number</label>
            <p>Please add your phone number</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
