import { Box, Grid } from '@material-ui/core';
import React from 'react';
import './Brands.css';
import img1 from '../../../images/Gucci_logo.svg.png';
import img2 from '../../../images/Ray-Ban-logo.png';
import img3 from '../../../images/michael-kors-logo-2D0B890759-seeklogo.com.png';
import img4 from '../../../images/burberry-logo-7B7DDE7B84-seeklogo.com.png';

const Brands = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3} className="brand-logo-img">
          <img src={img1} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={3} className="brand-logo-img">
          <img src={img2} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={3} className="brand-logo-img">
          <img src={img3} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={3} className="brand-logo-img">
          <img src={img4} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Brands;
