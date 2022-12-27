import React from 'react';
import { useState } from 'react';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import Login from './Login/Login';
import Navigationbar from './Navigationbar/Navigationbar';
import Footer from '../Home/Footer/Footer';

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

const Auth = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navigationbar />
      <div className="m-5 p-5 text-center">
        <h1>Please Login First</h1>
        <button onClick={handleOpen} className="regular-btn mt-5">
          Login
        </button>
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
      <Footer />
    </>
  );
};

export default Auth;
