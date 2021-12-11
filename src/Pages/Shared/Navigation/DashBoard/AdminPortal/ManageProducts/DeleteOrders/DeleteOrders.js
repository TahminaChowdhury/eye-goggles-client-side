import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Button from '@mui/material/Button';


const DeleteOrders = ({pd, handleDeleteOrder}) => {
    const {_id, name, img} = pd;
   
    return (
        <Grid item xs={12} sm={12} md={12}>
           <Box sx={{display: 'flex', borderBottom: 1}}>
           <Grid item xs={12} sm={12} md={4} sx={{m: 3}}>
               <img src={img} alt="" style={{width: "300px"}}/>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h5" gutterBottom component="div" sx={{pt: 5}}>
                    {name}
                </Typography>
                <Box sx={{display: 'flex'}}>
                <Grid item xs={6} sm={6} md={6}>
                 <button onClick={()=> handleDeleteOrder(pd._id)} className="simple-btn px-3 py-1 mt-5">Cancel Order</button>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                <Typography variant="h6" gutterBottom component="div" sx={{pt: 5}}>
                </Typography>
                </Grid>
                </Box>
            </Grid>
           </Box>
        </Grid>
    );
};

export default DeleteOrders;