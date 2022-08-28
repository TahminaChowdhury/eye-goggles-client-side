import * as actionTypes from './productConstants';

const initialState = {
  loading: true,
  products: [],
  error: '',
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: '',
      };
    case actionTypes.GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Product details reducer
const productDetailsInitialState = {
  loading: true,
  product: {},
  error: '',
};
export const productDetailsReducer = (
  state = productDetailsInitialState,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };

    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        product: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
