import { product } from "../type";

export interface ProductsState {
  loading: boolean;
  payload: product[];
  error: boolean;
}

export const PRODUCTS_INITIAL: ProductsState = {
  loading: false,
  payload: [] as product[],
  error: false,
};

interface Action {
  type: string;
  payload?: ProductsState["payload"];
}

export const ProductsReducer = (state: ProductsState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        payload: payload ?? [],
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
