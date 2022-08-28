import { combineReducers } from 'redux';
import cartReducer from './Cart/cartReducer';
import {
  productDetailsReducer,
  productsReducer,
} from './Products/productReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
