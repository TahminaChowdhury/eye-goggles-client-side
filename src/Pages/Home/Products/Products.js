import './Products.css';
import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Products/productActions';
import Sunglasses from './Sunglasses/Sunglasses';

const Products = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const { loading, products, error } = product;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1, my: 5, py: 5, textAlign: 'center' }}>
        <h1>Featured Products</h1>
        <Grid
          container
          spacing={{ xs: 5, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ textAlign: 'center' }}
        >
          {loading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
              }}
            >
              <CircularProgress color="inherit" />
            </Box>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products
              .slice(0, 6)
              .map((product) => (
                <Sunglasses key={product._id} product={product}></Sunglasses>
              ))
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
