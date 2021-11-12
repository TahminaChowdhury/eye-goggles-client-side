import { Button } from '@mui/material';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";

const Login = () => {
    const {user, loginWithGoogle, loginWithEmailAndPassword} = useAuth();
    const history = useHistory();
    const location = useLocation();
    
    const handleLoginWithGoogle = () => {
        loginWithGoogle(location, history)
    };
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        loginWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

            <input type="email" {...register("email")} placeholder="Email"/>

            <input type="password" placeholder="Password"{...register("password")} />
            <input type="submit" value="Login"/>
            </form>
            <Button onClick={handleLoginWithGoogle} variant="contained">Login with Google</Button>
            <h1>This is login page</h1>
        </div>
    );
};

export default Login;