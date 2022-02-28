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

export const removeFromCart = (itemID) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID
    }
  };
};

export const updateCart = (itemID, value) => {
  return {
    type: ActionTypes.UPDATE_CART_QTY,
    payload: { id: itemID, qty: value },
  };
}

export const addToCart = (itemID) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id: itemID
    }
  };
}
