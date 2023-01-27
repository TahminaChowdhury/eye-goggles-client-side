import './TopBanner.scss';
import React from 'react';
import { Box, Grid } from '@mui/material';
import img from '../../../images/s-1.jpg';
import { Link } from 'react-router-dom';

const TopBanner = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', height: '500px' }}>
      <Grid container>
        <Grid 
        item xs={12} sm={12} md={12} className="banner-container">
          <img src={img} alt="" />
          <Box className="banner-content">
            <Link to="/explore">
              <button className="explore-btn">
                <Box sx={{ paddingRight: '10px' }}>Explore More</Box>
                <i className="fas fa-arrow-right"></i>
              </button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopBanner;
