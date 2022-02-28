import * as actionTypes from "../constants/action-types";

export const addToCart = (productID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: productID,
    },
  };
};

export const removeFromCart = (productID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: productID,
    },
  };
};

export const updateCurrentProduct = (productID) => {
  return {
    type: actionTypes.UPDATE_CURRENT_PRODUCT,
    payload: {
      id: productID,
    },
  };
};

export const deleteProduct = (productID) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    payload: {
      id: productID,
    },
  };
};


export const adjustProductQty = (productID, qty) => {
  return {
    type: actionTypes.ADJUST_PRODUCT_QTY,
    payload: {
      id: productID,
      qty,
    },
  };
};

export const loadCurrentProduct = (product) => {
  return {
    type: actionTypes.LOAD_CURRENT_PRODUCT,
    payload: product,
  };
};

export const loadAllProducts = (products) => {
  return {
    type: actionTypes.LOAD_ALL_PRODUCTS,
    payload: products,
  };
};

export const createProduct = (product) => {
  return {
    type: actionTypes.CREATE_PRODUCT,
    payload: {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
    },
  };
}
