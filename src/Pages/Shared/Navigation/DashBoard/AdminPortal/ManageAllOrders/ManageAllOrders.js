import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AllOrders from './AllOrders/AllOrders';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    useEffect(() => {
        fetch('https://pacific-lowlands-13394.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[]);

    const handleCancelOrder = (id) => {
        fetch(`https://pacific-lowlands-13394.herokuapp.com/orders/${id}`,{
            method: "DELETE",
            headers: {"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            alert("Are you sure, want to delete ?")
            setIsDelete(true);
          } else {
            setIsDelete(false);
          }
        })
    }
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {allOrders.map((pd, index) => <AllOrders 
        key={pd._id}
        handleCancelOrder={handleCancelOrder}
        pd={pd}></AllOrders>)}
      </Grid>
    </Box>
    );
};

export default ManageAllOrders;