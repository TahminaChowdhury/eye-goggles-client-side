import { Button } from '@mui/material';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const {user, loginWithGoogle, loginWithEmailAndPassword,error} = useAuth();
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
        <div className="text-center my-5 py-5">
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

            <input type="email" {...register("email")} placeholder="Email"/>

            <input type="password" placeholder="Password"{...register("password")} />
            <h5 className="text-danger my-3">{error}</h5>
            <input type="submit" value="Login"/>
            </form>
            <br />
            <br />
           <h5>or</h5>
            <br />
            <Button onClick={handleLoginWithGoogle} variant="contained">Login with Google</Button>
            
            <div className="mt-5 ">
                            <span>Don't have an acoount ?</span><Link to="/signup" className="text-primary">Sign-up here</Link> 
                        </div>
        </div>
    );
};

export default Login;