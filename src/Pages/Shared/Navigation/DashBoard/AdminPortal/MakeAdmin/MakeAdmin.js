import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        setEmail(data.email);
        const user = { email };
        fetch('http://localhost:5000/users/admin',{
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };
     
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email")} />
            <input type="submit" />
            </form>
        </Box>
    );
};

export default MakeAdmin;