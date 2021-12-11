import './Review.css'
import { Alert, Container, Grid, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";



const Review = () => {
   
    const { register, handleSubmit } = useForm();
    const [review, setReview] = useState(true);
    const onSubmit = data => {
        fetch('https://pacific-lowlands-13394.herokuapp.com/reviews',{
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged === 'true') {
                setReview(true);
            }
        })
    };
     
   
    return (
        <div>
            <Container>
            <Box sx={{ flexGrow: 1, textAlign: "center", pb: 5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                <h2 className="my-5 fw-bold">Write Your Review Here Please!</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="review-field">

                <input type="name"{...register("name")} placeholder="Name" required className="input-field"/>

                <input type="email"{...register("email")} placeholder="Email"  required className="input-field"/>

                <input type="textarea"{...register("review")} placeholder="Write Your Review" required className="textarea text-start"/>

                <input type="number"{...register("rating")}
                placeholder="Ratings" required className="input-field mb-3"/>

                <input type="submit" className="submit-field"/>
                </form>
                </Grid>
            </Grid>
            </Box>
            </Container>
        </div>
    );
};

export default Review;