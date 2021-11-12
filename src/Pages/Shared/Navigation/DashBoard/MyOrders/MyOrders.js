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
import { Button } from '@mui/material';

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
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[isDelete]);

    const handleCancelOrder = (id) => {
        fetch(`http://localhost:5000/orders/${id}`,{
            method: "DELETE",
            headers: {"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                alert("Are you sure, want to delete ?")
                setIsDelete(true);
            }
        })
    }
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Product Name</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Order</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myOrders.map((row) => (
              <StyledTableRow key={row._id }>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.productName}</StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">
                    <Button onClick={() => handleCancelOrder(row._id)} variant="conatiner">Cancel Order</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default MyOrders;