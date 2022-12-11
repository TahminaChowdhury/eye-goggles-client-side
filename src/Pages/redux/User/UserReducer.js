import * as actionTypes from './UserConstants';

const initialState = {
  loading: true,
  currentUser: {},
  error: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: '',
      };
    case actionTypes.GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        currentUser: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
