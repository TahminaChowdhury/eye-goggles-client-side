import React from 'react';
import './Profile.css';
import useAuth from '../../../../Hooks/useAuth';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const Profile = () => {
  const { user } = useAuth();
  return (
    <Box sx={{ flexGrow: 1, mt: 5,}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="user-photo">
          <img
            src={
              user.photoURL
                ? `${user.photoURL}`
                : `https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png`
            }
            alt=''
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <label htmlFor="fullName">Full name</label>
            <p>{user.displayName}</p>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <p>{user.email}</p>
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <p></p>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <p></p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
