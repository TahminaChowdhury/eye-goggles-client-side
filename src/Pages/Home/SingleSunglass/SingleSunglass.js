import {  Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseForm from './PurchaseForm/PurchaseForm';

const SingleSunglass = () => {
    const {sunglassId} = useParams();
    const [sunglass, setSunglass] = useState({});
   
    
    useEffect(() => {
        fetch(`http://localhost:5000/sunglasses/${sunglassId}`)
        .then(res => res.json())
        .then(data => setSunglass(data))
    },[])

   
    return (
        <Container fixed>
        <Box sx={{ width: '100%', my: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h4" gutterBottom component="div">
                {sunglass.name}
                </Typography>
                <img src={sunglass.img} alt="" />
                <Typography variant="h5" gutterBottom component="div" sx={{my: 5}}>
                Description
                </Typography>
                <Typography variant="body1" gutterBottom>
                {sunglass.description}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{textAlign: "center", my: 5, py: 5}}>
                <PurchaseForm></PurchaseForm>
            </Grid>
        </Grid>
        </Box>
        </Container>
    );
};

export default SingleSunglass;