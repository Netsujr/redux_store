import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer, deleteProduct, createProduct, updateProduct } from './productReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  deleteProduct: deleteProduct,
  createProduct: createProduct,
  updateProduct: updateProduct,
});

export default reducers;
