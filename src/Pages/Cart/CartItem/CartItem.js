import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
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
        <button
          onClick={() => removeFromCartHandler(id)}
          className="delete-btn"
        >
          <DeleteIcon />
        </button>
      </TableCell>
      <TableCell align="left">
        <img src={imageURL} alt="" />
      </TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">
        <div className="d-flex">
          <input
            readOnly
            type="number"
            value={qty}
            className="quantity-input"
          />
          <div className="group-btn-div">
            <button
              onClick={() => decreaseQuantity(id, qty)}
              className="icrement-btn"
            >
              -
            </button>
            <button
              onClick={() => increaseQuantity(id, countInStock, qty)}
              className="decrement-btn"
            >
              +
            </button>
          </div>
        </div>
      </TableCell>
      <TableCell align="right">$ {qty * price}</TableCell>
    </TableRow>
  );
};

export default CartItem;
