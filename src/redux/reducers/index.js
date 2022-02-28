import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer, removeFromCart, addToCart, updateCart } from './productReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  removeFromCart: removeFromCart,
  addToCart: addToCart,
  updateCart: updateCart,
});

export default reducers;
