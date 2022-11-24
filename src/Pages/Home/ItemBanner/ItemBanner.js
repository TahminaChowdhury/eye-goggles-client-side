import { Box, Grid } from '@material-ui/core';
import React from 'react';
import './ItemBanner.css';
import img1 from '../../../images/f-2.webp';
import img2 from '../../../images/m-1.webp';

const ItemBanner = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: '40px 0px' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} style={{ position: 'relative' }}>
          <h1 style={{ marginLeft: '100px', marginBottom: '30px' }}>
            Women Glasses
          </h1>
          <div className="item-banner-container">
            <img src={img1} alt="" />
            <div className="item-banner-content">
              <button className="shopnow-btn">Shop now</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={{ position: 'relative', marginTop: '150px' }}>
          <h1 style={{ marginLeft: '100px', marginBottom: '30px' }}>
            Men Glasses
          </h1>
          <div className="item-banner-container">
            <img src={img2} alt="" />
            <div className="item-banner-content">
              <button className="shopnow-btn">Shop now</button>
            </div>
          </div>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6}>
          <h1 style={{ marginLeft: '100px', marginBottom: '30px' }}>
            Men Glasses
          </h1>
          <div className="item-banner-container">
            <img src={img2} alt="" />
            <div className="item-banner-content">
              <button>Shop now</button>
            </div>
          </div>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default ItemBanner;
