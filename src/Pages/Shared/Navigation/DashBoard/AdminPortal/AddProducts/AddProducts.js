import { Alert, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const [AddProducts, setAddproducts] = useState(true);
    const onSubmit = data => {
        fetch('https://pacific-lowlands-13394.herokuapp.com/sunglasses',{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged === 'true') {
                setAddproducts(true);
            }
        })
    };
    return (
        <div>
            <Container>
            <Box sx={{ flexGrow: 1, textAlign: "center"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <h2 className="my-5 fw-bold">Add Products</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("brandName")} placeholder="Brand Name" className="input-field"/>
                    <br />
                    <input type="text" {...register("name")} placeholder="Product name" className="input-field"/>
                    <br />
                    <input  {...register("img")} placeholder="Iage Url" className="input-field"/>
                    <br />
                    <input type="text" {...register("description")} placeholder="Description" className="input-field"/>
                    <br />
                    <input type="number" {...register("price")} placeholder="Price" className="input-field"/>
                    <br />
                    <input type="submit" value="Submit" className="submit-field"/>
                    </form>
                </Grid>
            </Grid>
            </Box>
            </Container>
        </div>
    );
};

export default AddProducts;


