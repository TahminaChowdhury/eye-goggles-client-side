import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/Cart/cartActions';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <TableRow
        sx={{
          '&:last-child td, &:last-child th': {
            border: 0,
            fontSize: '19px',
            mb: 2,
          },
        }}
        className="table-row"
      >
        <TableCell align="left">
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '70px', height: '70px' }}
          />
        </TableCell>
        <TableCell align="left" style={{ fontSize: '14px' }}>
          {item.name.slice(0, 20)}...
          <p style={{ fontWeight: 'bold' }}>$ {item.price}</p>
        </TableCell>
        <TableCell component="th" scope="row">
          <button
            onClick={() => removeFromCartHandler(item.id)}
            className="delete-btn"
          >
            <DeleteIcon />
          </button>
        </TableCell>
        {/* <TableCell align="right">$ {qty * price}</TableCell> */}
      </TableRow>
    </>
  );
};

export default MenuItem;
