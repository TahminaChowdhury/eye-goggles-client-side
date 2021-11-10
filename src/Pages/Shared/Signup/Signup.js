import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';



const Signup = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{textAlign: 'center', my: 5}}>
          <Grid item xs={12} sm={12} md={12}>
          <form onSubmit={handleOnSubmit}>
          <TextField 
          sx={{width: "25%", my: 2}}
          id="outlined-basic" 
          label="Name" 
          name="name"
          variant="outlined" />
          <br />
          <TextField 
          sx={{width: "25%"}}
          id="outlined-basic" 
          label="Email" 
          name="email"
          variant="outlined" />
          <br />
          <TextField 
          sx={{width: "25%", my: 2}}
          id="outlined-basic" 
          label="Password" 
          name="password"
          variant="outlined" />
          <br />
          <Button variant="contained" type="submit" sx={{width: "25%"}}>Sign Up</Button>
          </form>
          </Grid>
        </Grid>
      </Box>
    );
};

export default Signup;