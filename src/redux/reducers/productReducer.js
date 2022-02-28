const initialState = {
  products: [],
};

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    case 'SELECTED_PRODUCT':
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            selected: true,
          };
        }
        return {
          ...product,
          selected: false,
        };
      });
    case 'REMOVE_SELECTED_PRODUCT':
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            selected: false,
          };
        }
        return {
          ...product,
          selected: false,
        };
      });
    case 'EDIT_PRODUCT':
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            ...action.payload,
          };
        }
        return product;
      });
    default:
      return state;
  }
};
