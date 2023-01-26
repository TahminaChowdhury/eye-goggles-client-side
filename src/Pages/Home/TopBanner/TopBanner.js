import './TopBanner.scss';
import React from 'react';
import { Box, Grid } from '@mui/material';
import img from '../../../images/s-1.jpg';
import { Link } from 'react-router-dom';

const TopBanner = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', height: '500px' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} className="banner-container">
          <img src={img} alt="" />
          <div className="banner-content-div">
            <Link to="/explore">
              <button className="explore-btn">
                <div>Explore More</div>
                <i class="fas fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopBanner;
