import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";

const AllOrders = ({pd, handleCancelOrder}) => {
    const {_id, name, img} = pd;
    const [isUpdate, setIsUpdated] = useState(null);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://rocky-inlet-36889.herokuapp.com/orders/${_id}`,{
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => {
            if (result.modifiedCount) {
            setIsUpdated(true);
            } else {
            setIsUpdated(false);
            }
      });
    };
  
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
                 <Button onClick={()=> handleCancelOrder(pd._id)} variant="contained" sx={{mt: 5}}>Cancel Order</Button>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                <Typography variant="h6" gutterBottom component="div" sx={{pt: 5}}>
                    Status- {pd.status}
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("status")}>
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                </select>
                <input type="submit" />
                </form>
                </Grid>
                </Box>
            </Grid>
           </Box>
        </Grid>
    );
};

export default AllOrders;