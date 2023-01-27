import { Box, Grid } from '@material-ui/core';
import React from 'react';
import './ItemBanner.scss';
import img1 from '../../../images/f-2.webp';
import img2 from '../../../images/m-1.webp';

const ItemBanner = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: '40px 0px',
        padding: '60px 0px',
        backgroundColor: '#000',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={6} style={{ position: 'relative' }}>
          <h1
            style={{
              marginLeft: '130px',
              marginBottom: '30px',
              color: 'white',
            }}
          >
            Women Glasses
          </h1>
          <Box className="item-banner-container">
            <img src={img1} alt="" />
            <Box className="item-banner-content">
              <button className="button">Shop now</button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          style={{ position: 'relative', marginTop: '150px' }}
        >
          <h1
            style={{
              marginLeft: '130px',
              marginBottom: '30px',
              color: 'white',
            }}
          >
            Men Glasses
          </h1>
          <Box className="item-banner-container">
            <img src={img2} alt="" />
            <Box className="item-banner-content">
              <button className="button">Shop now</button>
            </Box>
          </Box>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6}>
          <h1 style={{ marginLeft: '100px', marginBottom: '30px' }}>
            Men Glasses
          </h1>
          <Box className="item-banner-container">
            <img src={img2} alt="" />
            <Box className="item-banner-content">
              <button>Shop now</button>
            </Box>
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default ItemBanner;
