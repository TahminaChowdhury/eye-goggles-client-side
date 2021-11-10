import React, { useState } from 'react';
import './PurchaseForm.css'
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
import { Alert } from '@mui/material';

const PurchaseForm = () => {
    const {user} = useAuth();
    const { register, handleSubmit } = useForm();
    const [bookingSuccess, setBookingSuccess] = useState(true);
    const onSubmit = data => {
        fetch('http://localhost:5000/orders',{
            method: "PUT",
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
        <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "80px", marginLeft: "50px"}}>
        <input type="name" {...register("name")} defaultValue={user.displayName}/>
        <input type="email" {...register("email")} defaultValue={user.email}/>
        <input type="number" {...register("mobile")} placeholder="Your Mobile Number here..."/>
        <input type="text" {...register("address")} placeholder="Your Address "/>
        <input type="number" {...register("quantity", { min: 0, max: 99 })} placeholder="Quantity"/>
        {/* {
            bookingSuccess && <Alert severity="success">This is a success alert — check it out!</Alert>
        } */}
        <input type="submit" value="Buy Now" />
        </form>
    );
};

export default PurchaseForm;