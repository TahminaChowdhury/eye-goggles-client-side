import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Grid, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Login from '../Login/Login';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'white',
  boxShadow: '7px 6px 40px 0 rgb(204 204 223 / 16%)',
};

const Signup = () => {
  const { signupWithEmailAndPassword, error } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle password
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Handle Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle form submit
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signupWithEmailAndPassword(
      data.first_name,
      data.last_name,
      data.email,
      data.password,
      navigate,
      location
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          textAlign: 'center',
          padding: '10px',
        }}
      >
        <Grid item xs={12} sm={12} md={12} xl={12} sx={{ padding: '20px' }}>
          <Box className="logo">
            <Box>
              <Link to="/home">
                Eye<span style={{ color: '#babd42' }}>Goggles</span>
              </Link>
            </Box>
            <Box>
              <i className="fa-solid fa-glasses"></i>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={12} sx={{ padding: '20px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                {...register('first_name', { required: true })}
                sx={{
                  width: '100%',
                  '& label.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'black',
                  },
                }}
              />
            </Box>

            <Box style={{ marginTop: '15px' }}>
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                {...register('last_name', { required: true })}
                sx={{
                  width: '100%',
                  '& label.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'black',
                  },
                }}
              />
            </Box>

            <Box style={{ marginTop: '15px' }}>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                {...register('email', { required: true })}
                sx={{
                  width: '100%',
                  '& label.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'black',
                  },
                }}
              />
            </Box>

            <Box style={{ marginTop: '15px' }}>
              <FormControl
                sx={{
                  width: '100%',
                  '& label.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'black',
                  },
                }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  {...register('password', { required: true })}
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box sx={{ textAlign: 'start', padding: '10px 0px', color: 'red' }}>
              <p>Error: {error}</p>
            </Box>
            <input
              style={{ width: '100%' }}
              type="submit"
              value="Sign up"
              className="button"
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={12} sx={{ padding: '10px' }}>
          <Box>
            <Alert
              icon={false}
            >
              Already have an account ? Please
              <span onClick={handleOpen} className="modal-btn">
                login
              </span>
            </Alert>
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={style}>
                <Login />
              </Box>
            </Modal>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
