import React from 'react';
import './Review.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { Autoplay, Navigation } from 'swiper';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Review = () => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  return (
    <div className="review-container">
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
        <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Add">
      <Button>Controlled</Button>
    </Tooltip>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Hello</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Hello</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
