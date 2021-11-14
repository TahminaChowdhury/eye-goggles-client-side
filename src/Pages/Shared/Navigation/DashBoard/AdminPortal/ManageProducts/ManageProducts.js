import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import DeleteOrders from './DeleteOrders/DeleteOrders';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(false);

    useEffect(() => {
        fetch('https://pacific-lowlands-13394.herokuapp.com/sunglasses')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[isDelete]);

    const handleDeleteOrder = (id) => {
        fetch(`https://pacific-lowlands-13394.herokuapp.com/sunglasses/${id}`,{
            method: "DELETE",
            headers: {"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
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
        {products.map((pd, index) => <DeleteOrders 
        key={pd._id}
        handleDeleteOrder={handleDeleteOrder}
        pd={pd}></DeleteOrders>)}
      </Grid>
    </Box>
    );
};

export default ManageProducts;