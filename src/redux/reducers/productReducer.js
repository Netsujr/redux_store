import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  cart: [],
  selectedProduct: null,
};

export const storeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    case ActionTypes.ADD_TO_CART:
      return { ...state, products: [...state.products, payload] };
    case ActionTypes.REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== payload.id) };
    case ActionTypes.UPDATE_CART_QTY:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === payload.id) {
            item.qty = payload.qty;
          }
          return item;
        }
        )
      };
    default:
      return state;
  }
};
