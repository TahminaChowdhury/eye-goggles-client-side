import { Box, Container, Grid, Modal } from '@material-ui/core';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import './Cart.scss';
import { addToCart, removeFromCart } from '../../redux/Cart/cartActions';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import useAuth from '../../../Hooks/useAuth';
import { useState } from 'react';
import Login from '../../Shared/Login/Login';
import PayButton from './PayButton';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import Footer from '../../Home/Footer/Footer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 550,
  bgcolor: 'white',
  boxShadow: '7px 6px 40px 0 rgb(204 204 223 / 16%)',
};

const Cart = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // Increase quantity Handler
  const increaseQuantity = (id, stock, qty) => {
    if (stock <= qty) {
      return;
    }
    const newQty = qty + 1;
    dispatch(addToCart(id, newQty));
  };

  // Decrease quantity Handler
  const decreaseQuantity = (id, qty) => {
    if (qty <= 1) {
      return;
    }
    const newQty = qty - 1;
    dispatch(addToCart(id, newQty));
  };

  // Item remove from cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  // Cart items count
  const cartItemsCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  // Cart subtotal count
  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  const subtotal = getCartSubtotal();

  // Tax, Vat and total  count
  const tax = (subtotal * 2) / 100;
  const vat = (subtotal * 15) / 100;
  let total = subtotal - tax - vat;

  return (
    <>
      <Navigationbar />
      <div className="page-header">
        <p>Home</p>
        <p>
          <ChevronLeftIcon />
        </p>
        <p>Cart</p>
      </div>
      <Box sx={{ my: 5 }}>
        <Container fixed>
          <Grid container className="cart-items">
            {cartItems.length === 0 ? (
              <p>Your Cart is empty</p>
            ) : (
              <Fragment>
                <Grid item xs={12} md={12}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell>Product</TableCell>
                          <TableCell></TableCell>
                          <TableCell align="right">Price</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Total</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cartItems.map((item, index) => (
                          <CartItem
                            key={index}
                            item={item}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            removeFromCartHandler={removeFromCartHandler}
                          />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item xs={12} md={12} container spacing={2}>
                  <Grid item xs={12} md={12} className="my-5 py-5">
                    <div className="coupon-code">
                      <div>
                        <input
                          type="text"
                          name="coupon_code"
                          placeholder="Coupon Code"
                          className="coupon-code-input"
                        />
                        <button className="regular-btn">Apply Coupon</button>
                      </div>
                      <div>
                        <button className="regular-btn">Update cart</button>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    container
                    spacing={2}
                    className="my-5 py-5"
                  >
                    <Grid item xs={12} md={6}>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          height: '335px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <label
                            htmlFor="cartSpecialInstructions"
                            className="cart-note-label"
                          >
                            <span>Note</span> Add a note to your order
                          </label>
                          <textarea
                            name="note"
                            id="cartSpecialInstructions"
                            cols="60"
                            rows="8"
                          ></textarea>
                        </div>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Paper variant="outlined" square className="p-5">
                        <div className="cart my-4">
                          <span>Items:</span>
                          <span>{cartItemsCount()}</span>
                        </div>
                        <div className="cart my-4">
                          <span>SubTotal</span>
                          <span>{getCartSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="cart my-4">
                          <span>Tax</span>
                          <span> $ {tax.toFixed(2)}</span>
                        </div>
                        <div className="cart my-4">
                          <span>Vat</span>
                          <span> $ {vat.toFixed(2)}</span>
                        </div>
                        <div className="cart my-4">
                          <span>Total</span>
                          <span> $ {total.toFixed(2)}</span>
                        </div>
                        <PayButton cartItems={cartItems} />

                        <button className="ms-4 regular-btn">
                          {' '}
                          Continue Shopping
                        </button>
                        {user?.email ? (
                          ''
                        ) : (
                          <div className="mt-5 login-div">
                            Please{' '}
                            <span>
                              <button
                                onClick={handleOpen}
                                className="simple-btn"
                              >
                                Login
                              </button>
                              <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <Box sx={style}>
                                  <Login />
                                </Box>
                              </Modal>
                            </span>{' '}
                            To Checkout
                          </div>
                        )}
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Fragment>
            )}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
