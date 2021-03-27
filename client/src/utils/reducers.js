import {
  UPDATE_CURRENT_CATEGORY,
  UPDATE_CATEGORIES,
  UPDATE_PRODUCTS,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    default:
      return state;
  }
};
