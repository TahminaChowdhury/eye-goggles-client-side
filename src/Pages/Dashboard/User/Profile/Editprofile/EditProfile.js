import * as React from 'react';
import './EditProfile.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../Hooks/useAuth';
import { Avatar, Grid } from '@mui/material';
import ResetPass from './ResetPass';
import { storage } from '../../../../../Hooks/useFirebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const { user, updateProfleInfo, updateProfilePhoto } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    updateProfleInfo(data.displayName);
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpdateProfile = () => {
    const imageRef = ref(storage, 'image');
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            if (url) {
              updateProfilePhoto(url);
            }
          })
          .catch((error) => {
            setError(error.message);
          });
        setImage(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Box
      sx={{
        mt: 5,
        backgroundColor: '#fff',
        borderRadius: '10px',
        width: '100%',
        heigh: '100%',
      }}
    >
      <Box className="flex-item" style={{ padding: '20px 50px 20px 10px' }}>
        <h2 className="title">My Account</h2>
      </Box>

      <Grid container spacing={2} sx={{ padding: '30px' }}>
        <Grid item xs={12} md={6}>
          <Box className="user-photo-container">
            <Avatar
              src={user.photoURL}
              sx={{ width: 200, height: 200 }}
              alt=""
            />
            <Box mt={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box class="custom-input">
                <input type="file" id="fileInput" onChange={handleImage} />
                <label for="fileInput">Upload Photo</label>
              </Box>
              <button
                onClick={() => handleUpdateProfile()}
                className="simple-button ms-3"
              >
                Submit
              </button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <TextField
                label="Full name"
                defaultValue={user.displayName}
                variant="filled"
                {...register('displayName')}
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
                disabled
                label="Email"
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
                label="Phone Number"
                type="number"
                variant="filled"
                {...register('phoneNumber')}
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
              <button type="submit" className="simple-button">
                Save Changes
              </button>
            </Box>
          </form>
        </Grid>

        {/* Reset password */}
        <Grid item xs={12} sm={12} md={12} xl={12} mt={5}>
          <Grid xs={12} sm={12} md={6} xl={6} mt={5}>
            <h3>Reset Password</h3>
            <ResetPass />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProfile;
