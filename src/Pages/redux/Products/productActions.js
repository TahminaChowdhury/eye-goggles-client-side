import * as actionTypes from './productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_REQUEST,
    });
    const { data } = await axios.get(
      'https://eye-goggles.onrender.com/sunglasses'
    );

    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(
      `https://eye-goggles.onrender.com/sunglasses/${id}`
    );

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
