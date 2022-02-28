import * as actionTypes from "../constants/action-types";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
            item.id === payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, qty: +payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: payload,
      };

      case actionTypes.LOAD_ALL_ITEMS:
        return {
          ...state,
          products: payload,
        };

    default:
      return state;
  }
};

export default shopReducer;
