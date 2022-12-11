import { combineReducers } from 'redux';
import cartReducer from './Cart/cartReducer';
import {
  productDetailsReducer,
  productsReducer,
} from './Products/productReducer';
import { userReducer } from './User/UserReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  currentUser: userReducer,
});

export default rootReducer;
