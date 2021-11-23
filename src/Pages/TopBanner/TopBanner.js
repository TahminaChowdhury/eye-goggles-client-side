import './TopBanner.css'
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../images/portrait-beautiful-woman-waving-hair-smiling-stylish-apparel-wearing-denim-jacket-yellow-top-fashion-trend-summer-style-happy-positive-mood-sunny-day-sunrise-emotional-cheerful_285396-4663.jpg'
import img3 from '../../images/romantic-couple-with-sunglasses-lying-sand_1140-420.jpg'
import img2 from '../../images/handsome-man-outdoors-drinking-coffee-with-sunglasses-guy-with-beard-instagram-effect_1212-819.jpg'

const TopBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={12} md={5} >
            <div className="top-banner">
              <h1>Put on your shades</h1>
            </div>
          </Grid> */}
          <Grid item xs={12} sm={12} md={6} >
          <div id="carouselExampleSlidesOnly" className="carousel slide, ms-auto" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={img} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..."/>
                </div>
            </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    );
};

export default TopBanner;