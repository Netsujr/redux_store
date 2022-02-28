import * as actionTypes from "../constants/action-types";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentPruduct: null,
};

const shopReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      const product = state.products.find(
        (product) => product.id === payload.id
      );
      const inCart = state.cart.find((product) =>
        product.id === payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((product) =>
            product.id === payload.id
              ? { ...product, qty: product.qty + 1 }
              : product
          )
          : [...state.cart, { ...product, qty: 1 }],
      };

    case actionTypes.UPDATE_CURRENT_PRODUCT:
      const currentProduct = state.products.find(
        (product) => product.id === payload.id
      );
      return {
        ...state,
        currentProduct,
      };

      case actionTypes.DELETE_PRODUCT:
        const NewProducts = state.products.filter(
          (product) => product.id !== payload.id
        );
        return {
          ...state,
          products: NewProducts,
        };


    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload.id),
      };
    case actionTypes.ADJUST_PRODUCT_QTY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === payload.id
            ? { ...product, qty: +payload.qty }
            : product
        ),
      };
    case actionTypes.LOAD_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: payload,
      };

      case actionTypes.LOAD_ALL_PRODUCTS:
        return {
          ...state,
          products: payload,
        };

        case actionTypes.CREATE_PRODUCT:
          return {
            ...state,
            products: [...state.products, payload],
          };

    default:
      return state;
  }
};

export default shopReducer;
