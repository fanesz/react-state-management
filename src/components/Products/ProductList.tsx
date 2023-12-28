import { useEffect, useReducer } from "react";
import { getCategories, getProductsByCategory } from "../../api/services";
import Pagination from "./Filter";
import { CATEGORIES_INITIAL, CategoryReducer } from "../../store/categories";
import CategoryFilter from "./CategoryFilter";
import ProductTable from "./ProductTable";
import ProductTableSkeleton from "../skeleton/ProductTableSkeleton";
import CategoriesSkeleton from "../skeleton/CategoriesSkeleton";
import { ACTION_TYPES } from "../../store/_shared";
import { PRODUCTS_INITIAL, ProductsReducer } from "../../store/products";
import { useFilterData } from "../../store/filter";

const ListProducts = () => {
  const [productsState, productsDispatch] = useReducer(
    ProductsReducer,
    PRODUCTS_INITIAL,
  );
  const [categoriesState, categoriesDispatch] = useReducer(
    CategoryReducer,
    CATEGORIES_INITIAL,
  );

  const limit = useFilterData((state) => state.limit);
  const sort = useFilterData((state) => state.sort);
  const category = useFilterData((state) => state.category);

  const fetchCategories = async () => {
    categoriesDispatch({ type: ACTION_TYPES.FETCH_START });
    const res = await getCategories();
    if (res) {
      categoriesDispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: res });
    } else {
      categoriesDispatch({ type: ACTION_TYPES.FETCH_ERROR });
    }
  };

  const fetchProductByCategories = async () => {
    productsDispatch({ type: ACTION_TYPES.FETCH_START });
    const res = await getProductsByCategory(category, sort, limit);
    if (res) {
      productsDispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: res });
    } else {
      productsDispatch({ type: ACTION_TYPES.FETCH_ERROR });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProductByCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, sort, category]);

  return (
    <div className="w-full">
      <div className="flex">
        <div className="w-fit">
          {categoriesState.loading ? (
            <CategoriesSkeleton />
          ) : categoriesState.error ? (
            <div className="text-red-500">Error while fetching data</div>
          ) : (
            <CategoryFilter categories={categoriesState} category={category} />
          )}
        </div>

        <div className="px-10 w-full">
          {productsState.loading ? (
            <ProductTableSkeleton count={limit} />
          ) : productsState.error ? (
            <div className="text-red-500">Error while fetching data</div>
          ) : (
            <ProductTable products={productsState} />
          )}
        </div>
      </div>

      <div className="py-8 pe-8">
        <Pagination currentPage={limit} sort={sort} />
      </div>
    </div>
  );
};

export default ListProducts;
