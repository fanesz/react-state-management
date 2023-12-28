import { useEffect, useState } from "react";
import { getCategories, getProductsByCategory } from "../../api/services";
import { product } from "../../type";
import Pagination from "./Filter";
import { useFilterData } from "../../store";
import CategoryFilter from "./CategoryFilter";
import ProductTable from "./ProductTable";
import ProductTableSkeleton from "../skeleton/ProductTableSkeleton";
import CategoriesSkeleton from "../skeleton/CategoriesSkeleton";

const ListProducts = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const limit = useFilterData((state) => state.limit);
  const sort = useFilterData((state) => state.sort);
  const category = useFilterData((state) => state.category);
  const [isLoading, setIsLoading] = useState({
    categories: true,
    products: true,
  });

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res);
    setIsLoading((prev) => ({ ...prev, categories: false }));
  };

  const fetchProductByCategories = async () => {
    const res = await getProductsByCategory(category, sort, limit);
    setProducts(res);
    setTimeout(() => {
      setIsLoading((prev) => ({ ...prev, products: false }));
    }, 500);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setIsLoading((prev) => ({ ...prev, products: true }));
    fetchProductByCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, sort, category]);

  return (
    <div className="w-full">
      <div className="flex">
        <div className="w-fit">
          {isLoading.products ? (
            <CategoriesSkeleton />
          ) : (
            <CategoryFilter categories={categories} category={category} />
          )}
        </div>

        <div className="px-10 w-full">
          {isLoading.products ? (
            <ProductTableSkeleton count={limit} />
          ) : (
            <ProductTable products={products} />
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
