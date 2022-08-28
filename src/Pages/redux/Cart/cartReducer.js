import * as actionTypes from './cartConstants';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((i) => i.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.id === existItem.id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.id !== action.payload),
      };

    case actionTypes.CART_RESET:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
