export interface CategoriesState {
  loading: boolean;
  selectedCategory: string;
  payload: string[];
  error: boolean;
}

export const CATEGORIES_INITIAL: CategoriesState = {
  loading: false,
  selectedCategory: "all",
  payload: ["all"],
  error: false,
};

interface Action {
  type: string;
  payload?: CategoriesState["payload"];
}

const CategoryReducer = (state: CategoriesState, action: Action) => {
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
        payload: CATEGORIES_INITIAL.payload.concat(payload ?? []),
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: payload ?? "all",
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
export default CategoryReducer;
