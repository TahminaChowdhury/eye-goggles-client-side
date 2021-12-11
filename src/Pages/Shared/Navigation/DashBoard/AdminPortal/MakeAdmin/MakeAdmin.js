import { Alert, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        setEmail(data.email);
        const user = { email };
        fetch('https://pacific-lowlands-13394.herokuapp.com/users/admin',{
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount !== 0) {
                setSuccess(true);
            }

        })
    };
     
    return (
        <div>
            <Container>
            <Box sx={{ flexGrow: 1, textAlign: "center"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <h2 className="my-5 fw-bold">Add Admin</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" {...register("email")} placeholder="Email" className="input-field"/>
                    <input type="submit" value="Add Admin" className="submit-field"/>
                    </form> 
                </Grid>
            </Grid>
            </Box>
            </Container>
        </div>
    );
};

export default MakeAdmin;

