import './Products.css'
import { Card, CardActions, CardContent, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Sunglasses from '../Sunglasses/Sunglasses';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const Products = () => {

    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://pacific-lowlands-13394.herokuapp.com/sunglasses')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    useEffect(() => {
        fetch('https://pacific-lowlands-13394.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);


    return (
        <Container fixed>
        <Box sx={{ flexGrow: 1, my: 5, py: 5, textAlign: "center"}}>
        <h3 sx={{mb: 5}} className="title">Popular Products</h3>
        <Grid container spacing={{ xs: 5, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
        
            
            {
                products.slice(0, 6).map(product => <Sunglasses
                key={product._id}
                product={product}
                ></Sunglasses>)
            }
          
        </Grid>

        <Grid item xs={12} sm={12} md={12} sx={{my: 5, py: 5}}>
        <h2 className="title">What Our Customers are Saying</h2>
        <Grid container spacing={2}>
          
        {
            reviews.map(review => <Grid item xs={12} sm={12} md={4}>
                <Card sx={{ minWidth: 275, height: '100%', mt: 5, pt: 3 }}>
                 <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <Typography component="legend"></Typography>
                <Rating name="read-only" value={review.rating} readOnly />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {review.name}
                </Typography>
                <Typography variant="body2">
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
                </Grid>)
        }
        </Grid>
        </Grid>
        </Box>
        </Container>
    );
};

export default Products;