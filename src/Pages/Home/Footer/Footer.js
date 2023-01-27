import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <Box
      sx={{ width: '100%' }}
      style={{
        backgroundColor: '#ededed',
        width: '100%',
        height: '400px',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          backgroundColor: '#000',
          color: 'white',
          width: '98%',
          height: '380px',
        }}
        className="footer-container"
      >
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '40px 0px',
          }}
        >
          <Box style={{ alignItems: 'start' }}>
            <Link
              to="/home"
              style={{
                fontSize: '30px',
                fontWeight: 600,
              }}
            >
              Eye<span style={{ color: '#babd42' }}>Goggles</span>
            </Link>
            <p
              style={{
                margin: '25px 0px',
                fontSize: '18px',
                textAlign: 'justify',
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur ducimus tempora aliquid similique alias laboriosam.
            </p>
            <Box>
              <span>
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>
              <span>
                <i className="fa-brands fa-twitter"></i>
              </span>
              <span>
                <i className="fa-brands fa-linkedin"></i>
              </span>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          style={{
            display: 'flex',

            justifyContent: 'center',
            margin: '40px 0px',
          }}
        >
          <Box>
            <h4>About Us</h4>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Address Store</li>
              <li>Privacy Policy</li>
              <li>Receivers & Amplifiers</li>
              <li>Store</li>
            </ul>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '40px 0px',
            color: 'white',
          }}
        >
          <Box>
            <h4>Help & Information</h4>
            <ul className="list-unstyled">
              <li>Pagination</li>
              <li>Terms & Conditions</li>
              <li>Contact</li>
              <li>Accessories</li>
              <li>Term of use</li>
            </ul>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '40px 0px',
          }}
        >
          <Box className="contact-section">
            <h4>Contact Us</h4>
            <p>
              <i className="far fa-envelope"></i> eyegoggles@gmail.com
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> +91 12345678
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Uttara, Dhaka - 1230
            </p>
            <Box></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
