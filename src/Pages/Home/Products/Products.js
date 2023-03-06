import './Products.scss';
import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Products/productActions';
import Sunglasses from './Sunglasses/Sunglasses';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const NextArrow = ({ onClick }) => {
  return (
    <button className="next-btn" onClick={onClick}>
      <ArrowCircleLeftIcon fontSize='large'/>
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className="prev-btn" onClick={onClick}>
      <ArrowCircleRightIcon fontSize='large'/>
    </button>
  );
};

const Products = () => {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow className="icon" />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const { loading, products, error } = product;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1,margin: '150px 0px', textAlign: 'center' }}>
        <h1 style={{ margin: '100px 0px' }}>Featured Products</h1>
        {loading ? (
          <Box>
            <CircularProgress color="inherit" />
          </Box>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <Slider {...settings}>
            {products.map((product) => (
              <Sunglasses product={product} />
            ))}
          </Slider>
        )}
      </Box>
    </Container>
  );
};

export default Products;
