import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Orders from './Orders/Orders';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([]);
    const {user} = useAuth();
    const [isDelete, setIsDelete] = useState(false);

    useEffect(() => {
        fetch(`https://pacific-lowlands-13394.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[isDelete]);

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
        {myOrders.map((pd, index) => <Orders 
        key={pd._id}
        handleCancelOrder={handleCancelOrder}
        pd={pd}></Orders>)}
      </Grid>
    </Box>
    );
};

export default MyOrders;