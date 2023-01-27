import { useState } from 'react';
import './Login.scss';
import { useNavigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
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
  width: 500,
  height: 550,
  bgcolor: 'white',
  boxShadow: '7px 6px 40px 0 rgb(204 204 223 / 16%)',
};

const Login = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle password
  const handleClickShowPassword = () => 
  setShowPassword((show) => !show);

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
    error,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginWithGoogle = () => {
    loginWithGoogle(location, navigate);
  };
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    loginWithEmailAndPassword(data.email, data.password, 
      location, navigate);
  };
  return (
    <Box className="from" sx={{ flexGrow: 1 }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        className="form"
        style={{ textAlign: 'center' }}
      >
        <Box style={{ marginTop: '40px' }}>
          <Box className="logo">
            <Box>
              <Link to="/home">
                Eye<span style={{ color: '#babd42' }}>Goggles</span>
              </Link>
            </Box>

            <Box>
              <i class="fa-solid fa-glasses"></i>
            </Box>
          </Box>

          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box style={{ marginTop: '15px' }}>
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  {...register('email')}
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
              </Box>
              <Box style={{ marginTop: '15px' }}>
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
                          {showPassword ? 
                          <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>

              <Box style={{ display: 'flex', 
              justifyContent: 'space-between' }}>
                <p
                  style={{
                    marginLeft: '48px',
                    padding: '20px 0px',
                    color: 'black',
                    cursor: 'pointer',
                  }}
                  onClick={resetPass(user?.email)}
                >
                  Forgot Password ?
                </p>
                <p
                  style={{
                    marginRight: '48px',
                    padding: '20px 0px',
                    color: 'red',
                  }}
                >
                  {error}
                </p>
              </Box>

              <input
              style={{width: '80%'}}
                type="submit"
                value="Login"
                className="button"
              />
            </form>
          </Box>
        </Box>

        {/* third party login */}
        <Box style={{ marginTop: '20px', marginBottom: '20px' }}>
          <h6>Or Login Using</h6>
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <Box>
            <button onClick={handleLoginWithGoogle} 
            className="social-btn">
              <i class="fab fa-google"></i>
            </button>
          </Box>
          <Box>
            <button onClick={loginWithFacebook} className="social-btn">
              <i class="fab fa-facebook-f"></i>
            </button>
          </Box>
        </Box>

        {/* Sign up modal */}
        <Box>
          <span>Don't have an acoount ?</span>
          <Button onClick={handleOpen} className="modal-btn">
            Sign-up here!
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Signup />
            </Box>
          </Modal>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
