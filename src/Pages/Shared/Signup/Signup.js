import { Button, Grid, Modal } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Login from '../Login/Login';

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

const Signup = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    loginWithGoogle,
    loginWithFacebook,
    signupWithEmailAndPassword,
    error,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUpWithGoogle = () => {
    loginWithGoogle(location, navigate);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
                  <input
                    type="text"
                    {...register('first_name', { required: true })}
                    placeholder="First Name"
                    className="input-field"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    {...register('last_name', { required: true })}
                    placeholder="Last Name"
                    className="input-field"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    placeholder="Email"
                    className="input-field"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register('password', { required: true })}
                    className="input-field"
                  />
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
