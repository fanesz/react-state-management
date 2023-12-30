import { product } from "../../type";

export interface ProductsState {
  loading: boolean;
  payload: product[];
  error: boolean;
  pagination: {
    limit: number;
    sort: string;
  };
}

export const PRODUCTS_INITIAL: ProductsState = {
  loading: false,
  payload: [] as product[],
  error: false,
  pagination: {
    limit: 5,
    sort: "asc",
  },
};

interface Action {
  type: string;
  payload?: ProductsState["payload"];
}

const ProductsReducer = (state: ProductsState, action: Action) => {
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
    case "SET_PAGINATION":
      return {
        ...state,
        loading: false,
        error: false,
        pagination: payload ?? state.pagination,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export default ProductsReducer;
