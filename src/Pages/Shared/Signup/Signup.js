import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, Modal } from '@mui/material';
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
import './Signup.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: "auto",
  bgcolor: 'white',
  boxShadow: '7px 6px 40px 0 rgb(204 204 223 / 16%)',
};

const Signup = () => {
  const {
    loginWithGoogle,
    loginWithFacebook,
    signupWithEmailAndPassword,
    error,
  } = useAuth();
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

  const handleSignUpWithGoogle = () => {
    loginWithGoogle(location, navigate);
  };

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
    <Box className="from" sx={{ flexGrow: 1 }}>
      <Grid item xs={12} sm={12} md={12} className="form">
        <div className="text-center">
          <div style={{ marginTop: '40px' }}>
            <div className="logo">
              <div>
                <Link to="/home">
                  Eye<span style={{ color: '#babd42' }}>Goggles</span>
                </Link>
              </div>

              <div>
                <i class="fa-solid fa-glasses"></i>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    {...register('first_name', { required: true })}
                    sx={{
                      width: '80%',
                      '& label.Mui-focused': {
                        color: 'black',
                      },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: 'black',
                      },
                    }}
                  />
                </div>

                <div>
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    {...register('last_name', { required: true })}
                    sx={{
                      width: '80%',
                      '& label.Mui-focused': {
                        color: 'black',
                      },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: 'black',
                      },
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    {...register('email', { required: true })}
                    sx={{
                      width: '80%',
                      '& label.Mui-focused': {
                        color: 'black',
                      },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: 'black',
                      },
                    }}
                  />
                </div>

                <div>
                  <FormControl
                    sx={{
                      width: '80%',
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
                </div>
                <div>
                  <p
                    style={{
                      marginRight: '150px',
                      padding: '20px 0px',
                      color: 'red',
                    }}
                  >
                    {error}
                  </p>
                </div>

                <input
                  type="submit"
                  value="Sign up"
                  className="submit-input mt-2 fw-bold"
                />
              </form>
            </div>
          </div>
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <h6>Or Login Using</h6>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <div>
              <button onClick={handleSignUpWithGoogle} className="social-btn">
                <i class="fab fa-google"></i>
              </button>
            </div>
            <div>
              <button onClick={loginWithFacebook} className="social-btn">
                <i class="fab fa-facebook-f"></i>
              </button>
            </div>
          </div>
          <div>
            <span>Already have an acoount ? </span>
            <Button onClick={handleOpen} className="modal-btn">
              Login
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Login />
              </Box>
            </Modal>
          </div>
        </div>
      </Grid>
    </Box>
  );
};

export default Signup;
