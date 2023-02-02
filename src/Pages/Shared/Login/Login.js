import { useState } from 'react';
import './Login.scss';
import { useNavigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Alert,
  Box,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  TextField,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Signup from '../Signup/Signup';

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

const Login = () => {
  const { user, loginError } = useAuth();
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle password
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    loginWithGoogle,
    loginWithFacebook,
    loginWithEmailAndPassword,
    resetPass,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginWithGoogle = () => {
    loginWithGoogle(location, navigate);
  };
  const { register, handleSubmit, watch } = useForm();

  const email = watch('email');

  const handleForgotPass = () => {
    if (email) {
      resetPass(email);
    }
  };
  const onSubmit = (data) => {
    loginWithEmailAndPassword(data.email, data.password, location, navigate);
  };
  return (
    <Box className="from" sx={{ flexGrow: 1 }}>
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
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          xl={12}
          sx={{
            padding: '20px',
          }}
        >
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email input */}
              <Box>
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  {...register('email')}
                  sx={{
                    width: '100%',
                    '& label.Mui-focused': {
                      color: '#000',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: '#000',
                    },
                  }}
                />
              </Box>
              {/* Password field */}
              <Box style={{ marginTop: '15px' }}>
                <FormControl
                  sx={{
                    width: '100%',
                    '& label.Mui-focused': {
                      color: '#000',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: ' #000',
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

              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '15px 0px',
                }}
              >
                <p onClick={handleForgotPass} style={{ cursor: 'pointer' }}>Forgot Password ?</p>
                <p color="error">{loginError}</p>
              </Box>
              <input
                style={{ width: '100%' }}
                type="submit"
                value="Login"
                className="button"
              />
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={12} sx={{ padding: '20px' }}>
          <Box>
            <h6>Or Login Using</h6>
          </Box>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box>
              <button onClick={handleLoginWithGoogle} className="social-btn">
                <i class="fab fa-google"></i>
              </button>
            </Box>
            <Box>
              <button onClick={loginWithFacebook} className="social-btn">
                <i class="fab fa-facebook-f"></i>
              </button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={12} sx={{ padding: '20px' }}>
          <Box>
            <Alert icon={false}>
              Don't have an acoount ?{' '}
              <span onClick={handleOpen} className="modal-btn">
                Sign-up here!
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
                <Signup />
              </Box>
            </Modal>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
