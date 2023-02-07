import './TopBanner.scss';
import React from 'react';
import { Box, Grid } from '@mui/material';
import Slider from 'react-slick';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../../images/image-3.jpg';
import img2 from '../../../images/image-2.webp';
import img3 from '../../../images/image-1.webp';
import { Link } from 'react-router-dom';

const NextArrow = ({ onClick }) => {
  return (
    <button className="next-arrow" onClick={onClick}>
      <ArrowBackIcon />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className="prev-arrow" onClick={onClick}>
      <ArrowForwardIcon />
    </button>
  );
};

const TopBanner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow className="icon" />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Box m={2} sx={{ flexGrow: 1, height: '500px' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Slider {...settings} className="slider">
            <Box className="banner-container">
              <img src={img1} alt="" />
              <Box className="banner-content">
                <Link to="/explore">
                  <button className="explore-btn">
                    <Box sx={{ paddingRight: '10px' }}>Explore More</Box>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </Link>
              </Box>
            </Box>
            <Box className="banner-container">
              <img src={img2} alt="" />
              <Box className="banner-content">
                <Link to="/explore">
                  <button className="explore-btn">
                    <Box sx={{ paddingRight: '10px' }}>Explore More</Box>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </Link>
              </Box>
            </Box>
            <Box className="banner-container">
              <img src={img3} alt="" />
              <Box className="banner-content">
                <Link to="/explore">
                  <button className="explore-btn">
                    <Box sx={{ paddingRight: '10px' }}>Explore More</Box>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </Link>
              </Box>
            </Box>
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopBanner;
