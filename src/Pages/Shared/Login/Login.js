import React from 'react';
import './Login.css';
import { useNavigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Box, Button, Grid, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import Signup from '../Signup/Signup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 650,
  bgcolor: 'white',
  boxShadow: '7px 6px 40px 0 rgb(204 204 223 / 16%)',
};

const Login = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
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
    loginWithEmailAndPassword(data.email, data.password, location, navigate);
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
                <input
                  type="email"
                  {...register('email')}
                  className="input-field"
                />
              
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  {...register('password')}
                  className="input-field"
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
              </div>

              <input
                type="submit"
                value="Login"
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
            <button onClick={handleLoginWithGoogle} className="social-btn">
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
        </div>
      </Grid>
    </Box>
  );
};

export default Login;
