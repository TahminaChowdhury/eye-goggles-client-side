import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Sunglasses from '../Sunglasses/Sunglasses';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/sunglasses')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <Container fixed>
        <Box sx={{ flexGrow: 1, my: 5, py: 5 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
            {
                products.slice(0, 6).map(product => <Sunglasses
                key={product._id}
                product={product}
                ></Sunglasses>)
            }
          
        </Grid>
        </Box>
        </Container>
    );
};

export default Products;