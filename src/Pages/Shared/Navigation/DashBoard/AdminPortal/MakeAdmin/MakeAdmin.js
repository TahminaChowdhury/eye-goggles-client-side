import { Alert } from '@mui/material';
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
        <Box>
            <h4 className="my-5">Add Admin</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email")} placeholder="Email"/>
            <input type="submit" value="Add Admin"/>
            </form>
            {
                success && <Alert severity="success">SuccessFul Admin Added</Alert>
            }
        </Box>
    );
};

export default MakeAdmin;