import React from 'react';
import './Slide.scss';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { Autoplay, Navigation } from 'swiper';
import img1 from '../../../../images/image-1.webp';
import img2 from '../../../../images/image-2.webp';
import img3 from '../../../../images/image-3.jpg';


const Slide = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box className="slide-wrapper">
            <img class="zoom-in-zoom-out" src={img2} alt="" />
            <Box className="slide-content"></Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="slide-wrapper">
            <img class="zoom-in-zoom-out" src={img1} alt="" />
            <Box className="slide-content"></Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="slide-wrapper">
            <img class="zoom-in-zoom-out" src={img3} alt="" />
            <Box className="slide-content"></Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slide;
