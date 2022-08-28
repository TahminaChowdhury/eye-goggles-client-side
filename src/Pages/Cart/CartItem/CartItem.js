import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './CartItem.css';
const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCartHandler,
}) => {
  const { id, name, imageURL, price, qty, countInStock } = item;

  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0, fontSize: '19px' },
      }}
      className="table-row"
    >
      <TableCell component="th" scope="row">
        <button onClick={() => removeFromCartHandler(id)}>
          <DeleteOutlineIcon />
        </button>
      </TableCell>
      <TableCell align="right">
        <img src={imageURL} alt="" />
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">
        <button onClick={() => decreaseQuantity(id, qty)}>-</button>
        <input readOnly type="number" value={qty} />
        <button onClick={() => increaseQuantity(id, countInStock, qty)}>
          +
        </button>
      </TableCell>
      <TableCell align="right">$ {qty * price}</TableCell>
    </TableRow>
  );
};

export default CartItem;
