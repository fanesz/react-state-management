import Pagination from "./Filter";
import CategoryFilter from "./CategoryFilter";
import ProductTable from "./ProductTable";
import { CategoriesProvider } from "../../store/context/categories";
import { ProductsProvider } from "../../store/context/products";

const ListProducts = () => {
  return (
    <div className="w-full">
      <CategoriesProvider>
        <ProductsProvider>
          <div className="flex">
            <div className="w-fit">
              <CategoryFilter />
            </div>
            <div className="px-10 w-full">
              <ProductTable />
            </div>
          </div>
          <div className="py-8 pe-8">
            <Pagination />
          </div>
        </ProductsProvider>
      </CategoriesProvider>
    </div>
  );
};

export default ListProducts;
