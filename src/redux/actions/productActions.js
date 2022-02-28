import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});

// export const editProduct = (products) => {
//   return {
//     type: ActionTypes.EDIT_PRODUCT,
//     payload: products,
//   };
// };

// export const removeSelectedProduct = () => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//   };
// };
