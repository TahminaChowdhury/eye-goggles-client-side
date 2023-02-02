import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../../../Hooks/useAuth';

const EditProfile = () => {
  const { user } = useAuth();
  return (
    <Box
      sx={{ flexGrow: 1, mt: 5, backgroundColor: '#fff', borderRadius: '10px' }}
    >
      <Box className="flex-item" style={{ padding: '20px 50px 20px 50px' }}>
        <h2 className="title">My Account</h2>
      </Box>

      <Grid container spacing={2} sx={{ padding: '30px' }}>
        <Grid item xs={12} md={4}>
          <Box className="user-photo-container">
            <img
              src={
                user.photoURL
                  ? `${user.photoURL}`
                  : `https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png`
              }
              alt=""
            />
            <Box mt={3} ml={5}>
              <button className="simple-button">Upload Photo</button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <TextField
              id="filled-required"
              label="Full name"
              defaultValue={user.displayName}
              variant="filled"
              sx={{
                width: '70%',
                '& label.Mui-focused': {
                  color: '#000',
                },
                '& .MuiFilledInput-underline:after': {
                  borderBottomColor: '#000',
                },
              }}
            />
          </Box>
          <Box mt={3}>
            <TextField
              id="filled-required"
              label="Full name"
              defaultValue={user.email}
              variant="filled"
              sx={{
                width: '70%',
                '& label.Mui-focused': {
                  color: '#000',
                },
                '& .MuiFilledInput-underline:after': {
                  borderBottomColor: '#000',
                },
              }}
            />
          </Box>

          <Box mt={3}>
            <TextField
              id="filled-number"
              label="Phone Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              sx={{
                width: '70%',
                '& label.Mui-focused': {
                  color: '#000',
                },
                '& .MuiFilledInput-underline:after': {
                  borderBottomColor: '#000',
                },
              }}
            />
          </Box>
          <Box mt={3}>
            <button className="simple-button">Save Changes</button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} xl={12} mt={5}>
          <h3 >Reset Password</h3>
          <Box mt={3}>
            <TextField
              id="filled-required"
              placeholder="Current Password"
              variant="filled"
              sx={{
                width: '50%',
                '& label.Mui-focused': {
                  color: '#000',
                },
                '& .MuiFilledInput-underline:after': {
                  borderBottomColor: '#000',
                },
              }}
            />
          </Box>
          <Box mt={3}>
            <TextField
              id="filled-required"
              placeholder="New Password"
              variant="filled"
              sx={{
                width: '50%',
                '& label.Mui-focused': {
                  color: '#000',
                },
                '& .MuiFilledInput-underline:after': {
                  borderBottomColor: '#000',
                },
              }}
            />
          </Box>
          <Box mt={3}>
            <TextField
              id="filled-required"
              placeholder="Re-type Password"
              variant="filled"
              sx={{
                width: '50%',
                '& label.Mui-focused': {
                  color: '#000',
                },
                '& .MuiFilledInput-underline:after': {
                  borderBottomColor: '#000',
                },
              }}
            />
          </Box>
          <Box mt={3}>
            <button className="simple-button">Change Password</button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProfile;
