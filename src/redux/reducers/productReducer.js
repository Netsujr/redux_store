import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
      console.log(payload);
    default:
      return state;
  }
};

export const selectedProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};


export const createProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.CREATE_PRODUCT:
      return { ...state, products: [...state.products, payload] };
    default:
      return state;
  }
};

export const updateProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_PRODUCT:
      return { ...state, products: state.products.map(product => product.id === payload.id ? payload : product) };
    default:
      return state;
  }
};

export const deleteProduct = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DELETE_PRODUCT:
      return { ...state, products: state.products.filter(product => product.id !== payload.id) };
    default:
      return state;
  }
};
