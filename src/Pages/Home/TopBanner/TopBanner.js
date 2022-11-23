import './TopBanner.css';
import React from 'react';
import { Box, Grid } from '@mui/material';
import Slide from './Slide/Slide';

const TopBanner = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', height: '500px' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Slide />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopBanner;
