import './Products.css';
import { Container, Grid } from '@mui/material';
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
        <h3 sx={{ mb: 5 }} className="title">
          Popular Products
        </h3>
        <Grid
          container
          spacing={{ xs: 5, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {loading ? (
            <h2>Loading...</h2>
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

        {/* <Grid item xs={12} sm={12} md={12} sx={{ my: 5, py: 5 }}>
          <h2 className="title">Customer Reviews</h2>
          <Grid container spacing={2}>
            {reviews.map((review) => (
              <Grid item xs={12} sm={12} md={4}>
                <Card
                  sx={{ minWidth: 275, height: '100%', mt: 5, pt: 3 }}
                  style={{ backgroundColor: '#FAFAFA' }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <Typography component="legend"></Typography>
                      <Rating name="read-only" value={review.rating} readOnly />
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {review.name}
                    </Typography>
                    <Typography variant="body2">{review.review}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid> */}
      </Box>
    </Container>
  );
};

export default Products;
