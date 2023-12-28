/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { ReactNode, createContext, useContext, useReducer } from "react";
import ProductsReducer, {
  PRODUCTS_INITIAL,
  ProductsState,
} from "../reducer/products";

const ProductsContext = createContext(PRODUCTS_INITIAL);

export const ProductsProvider = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ProductsReducer, PRODUCTS_INITIAL);

  const startFetching = () => {
    dispatch({ type: "FETCH_START" });
  };

  const successFetching = (payload: string[]) => {
    dispatch({ type: "FETCH_SUCCESS", payload });
  };

  const errorFetching = () => {
    dispatch({ type: "FETCH_ERROR" });
  };

  const setPagination = (pagination: ProductsState["pagination"]) => {
    dispatch({ type: "SET_PAGINATION", payload: pagination });
  };

  const value = {
    ...state,
    startFetching,
    successFetching,
    errorFetching,
    setPagination,
  };

  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }

  return context;
};
// eslint-disable-next-line react-refresh/only-export-components
export default useProducts;
