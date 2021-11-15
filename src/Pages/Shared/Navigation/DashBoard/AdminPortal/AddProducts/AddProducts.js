import { Alert } from '@mui/material';
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
        <Box>
            <h4 className="my-5">Add Products</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("brandName")} placeholder="Brand Name"/>
            <br />
            <input type="text" {...register("name")} placeholder="Product name"/>
            <br />
            <input  {...register("img")} placeholder="Iage Url"/>
            <br />
            <input type="text" {...register("description")} placeholder="Description"/>
            <br />
            <input type="number" {...register("price")} placeholder="Price"/>
            <br />
            <input type="submit" value="Submit"/>
            </form>
            {
                AddProducts && <Alert severity="success">SuccessFully Added product</Alert>
            }
        </Box>
    );
};

export default AddProducts;
