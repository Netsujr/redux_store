import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const deleteProduct = (id) => {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: id,
  };
};

export const updateProduct = (product) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    payload: product,
  };
}

export const createProduct = (product) => {
  return {
    type: ActionTypes.CREATE_PRODUCT,
    payload: product,
  };
}
