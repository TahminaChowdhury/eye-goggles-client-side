import * as actionTypes from './UserConstants';
import axios from 'axios';

export const getCurrentUser = (email) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_USER_REQUEST,
    });
    const data= await axios.get(`http://localhost:5000/users/${email}`);
    dispatch({
      type: actionTypes.GET_USER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_FAIL,
      payload: error.message,
    });
  }
};
