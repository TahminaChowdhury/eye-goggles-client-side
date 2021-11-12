import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth'




const Signup = () => {
  const {user, signupWithEmailAndPassword} = useAuth();
  const history = useHistory();

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    signupWithEmailAndPassword( data.name, data.email, data.password, history)
  };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{textAlign: 'center', my: 5}}>
          <Grid item xs={12} sm={12} md={12}>

          <form onSubmit={handleSubmit(onSubmit)}>

            <input type="name" placeholder="Name" {...register("name", { required: true })} />

            <input type="email" {...register("email")} placeholder="Email"/>

            <input type="password" placeholder="Password"{...register("password")} />

            <input type="password" placeholder="Re-enter Your Password"{...register("reEnterPassword")} />
            <input type="submit" value="Sign up"/>
          </form>

          </Grid>
        </Grid>
      </Box>
    );
};

export default Signup;