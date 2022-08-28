import axios from 'axios';
import * as actionTypes from './cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://pacific-lowlands-13394.herokuapp.com/sunglasses/${id}`
  );

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: data._id,
      name: data.name,
      imageURL: data.img,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const resetCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.CART_RESET,
  });
  localStorage.clear();
};
