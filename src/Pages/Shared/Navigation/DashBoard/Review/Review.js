import { Container, Grid, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";



const Review = () => {
   
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://pacific-lowlands-13394.herokuapp.com/reviews',{
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body:JSON.stringify(data)
        })
    };
     
   
    return (
        <div>
            <Container sx={{}}>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                <h4 className="my-5">Write Your Rview here please</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="name"{...register("name")} placeholder="Name"/>
                <input type="email"{...register("email")} placeholder="Email"/>
                <input type="text"{...register("review")} placeholder="Write Your Review"/>
                <input type="number"{...register("rating")} placeholder="Ratings"/>
                <input type="submit" />
                </form>
                </Grid>
            </Grid>
            </Box>
            </Container>
        </div>
    );
};

export default Review;