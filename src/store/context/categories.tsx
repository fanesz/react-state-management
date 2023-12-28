/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { ReactNode, createContext, useContext, useReducer } from "react";
import CategoryReducer, { CATEGORIES_INITIAL } from "../reducer/categories";

const CategoriesContext = createContext(CATEGORIES_INITIAL);

export const CategoriesProvider = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(CategoryReducer, CATEGORIES_INITIAL);

  const startFetching = () => {
    dispatch({ type: "FETCH_START" });
  };

  const successFetching = (payload: string[]) => {
    dispatch({ type: "FETCH_SUCCESS", payload });
  };

  const errorFetching = () => {
    dispatch({ type: "FETCH_ERROR" });
  };

  const setCategory = (category: string) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  const value = {
    ...state,
    startFetching,
    successFetching,
    errorFetching,
    setCategory,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }

  return context;
};
// eslint-disable-next-line react-refresh/only-export-components
export default useCategories;
