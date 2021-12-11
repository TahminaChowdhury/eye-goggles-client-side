import {  Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth'
import { Alert } from '@mui/material';



const SingleSunglass = () => {
    const {user} = useAuth();
    const {sunglassId} = useParams();
    const [sunglass, setSunglass] = useState({});

    useEffect(() => {
        fetch(`https://pacific-lowlands-13394.herokuapp.com/sunglasses/${sunglassId}`)
        .then(res => res.json())
        .then(data => setSunglass(data))
    },[sunglassId]);

    const { register, handleSubmit } = useForm();
    const [bookingSuccess, setBookingSuccess] = useState(true);
    const onSubmit = data => {
        data.status = "Pending"
        console.log(data)
        fetch('https://pacific-lowlands-13394.herokuapp.com/orders',{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged === 'true') {
                setBookingSuccess(true);
            }
        })
    };

   
    return (

        
        <Box sx={{ width: '100%', my: 5 }}>
            <Container fixed>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid item xs={12} sm={12} md={6}>
                <img src={sunglass.img} alt="" />
                <Typography variant="h6" gutterBottom component="div" sx={{fontWeight: 'bold'}}>
                {sunglass.name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div" sx={{my: 5, fontWeight: 'bold'}}>
                Description
                </Typography>
                <Typography variant="body1" gutterBottom>
                {sunglass.description}
                </Typography>

            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{textAlign: "center", my: 5}}>
            <Box>
                
                <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "80px", marginLeft: "50px"}}>

                <input type="text" {...register("brandName")} defaultValue={sunglass.brandName}/>

                <input type="text" {...register("name")} defaultValue={sunglass.name}/>

                <input  {...register("img")} defaultValue={sunglass.img}/>

                <input type="name" {...register("userName")} defaultValue={user.displayName}/>


                <input type="email" {...register("email")} defaultValue={user.email}/>

                <input type="number" {...register("mobile")} placeholder="Your Mobile Number here..."/>

                <input type="text" {...register("address")} placeholder="Your Address "/>

                <input type="number" {...register("quantity", { min: 0, max: 99 })} placeholder="Quantity"/>

                <input type="submit" value="Buy Now" />
                </form>

                {
                    bookingSuccess && <Alert severity="success">SuccessFul added your order</Alert>
                }
            </Box>
            </Grid>
        </Grid>
        </Container>
        </Box>
        
    );
};

export default SingleSunglass;
