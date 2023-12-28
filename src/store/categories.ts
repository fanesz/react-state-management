export interface CategoriesState {
  loading: boolean;
  payload: string[];
  error: boolean;
}

export const CATEGORIES_INITIAL: CategoriesState = {
  loading: false,
  payload: ["all"],
  error: false,
};

interface Action {
  type: string;
  payload?: CategoriesState["payload"];
}

export const CategoryReducer = (state: CategoriesState, action: Action) => {
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
    default:
      return state;
  }
};
