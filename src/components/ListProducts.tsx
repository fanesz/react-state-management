import { useEffect, useState } from "react";
import { getCategories, getProductsByCategory } from "../api/services";
import { useNavigate } from "react-router-dom";
import { product } from "../type";
import Pagination from "./Pagination";
import { useItemsPerPage } from "../store";

const ListProducts = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const limit = useItemsPerPage((state) => state.limit as number);
  const [category, setCategory] = useState("electronics");

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res);
  };

  const fetchProductByCategories = async (input: string | null) => {
    const res = await getProductsByCategory(input || category);
    console.log(res);
    setProducts(res);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProductByCategories(null);
  }, [limit]);

  const handleCategory = (input: string) => {
    setCategory(input);
    fetchProductByCategories(input);
  };

  return (
    <div>
      <div className="flex">
        <div className="w-1/5 flex">
          <div className="w-fit h-fit mx-auto border border-gray-200 rounded bg-white shadow-md">
            <div className="p-4 px-10 text-lg">Filter Berdasarkan Kategori</div>

            <div className="h-px bg-gray-300 my-auto mb-2 w-full" />

            <div className="mb-4">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className={`py-2.5 rounded-e-full me-8 duration-200 ease-in-out cursor-pointer ${
                    category === item
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200 hover:bg-opacity-60"
                  }`}
                  onClick={() => handleCategory(item)}
                >
                  <span className="px-5">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-4/5 px-10">
          <div className="border border-gray-300 rounded-md">
            <table className="border-none">
              <thead>
                <tr className="rounded-md">
                  <th className="w-1/6 p-3 rounded-t-md border-e border-b border-gray-300 bg-white">
                    Title
                  </th>
                  <th className="w-3/6 p-3 rounded-t-md border-e border-b border-gray-300 bg-white">
                    Description
                  </th>
                  <th className="w-1/6 p-3 rounded-t-md border-e border-b border-gray-300 bg-white">
                    Price
                  </th>
                  <th className="w-1/6 rounded-t-md p-3 border-b border-gray-300 bg-white">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr
                    className={`hover:bg-gray-300 hover:bg-opacity-70 duration-150 cursor-pointer ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                    key={index}
                    onClick={() => navigate(`/products/${item.id}`)}
                  >
                    <td className="w-1/6 text-center p-2 max-h-10 border-x border-gray-200">
                      {item.title}
                    </td>
                    <td className="w-3/6 text-center p-2 max-h-10 border-x border-gray-200">
                      {item.description}
                    </td>
                    <td className="w-1/6 text-center p-2 max-h-10 border-x border-gray-200">
                      {item.price}
                    </td>
                    <td className="w-1/6 text-center p-2 max-h-10 border-x border-gray-200">
                      {item.rating.rate}{" "}
                      <span className="text-gray-400 text-sm">
                        ({item.rating.count})
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="py-8 pe-8">
        <Pagination currentPage={limit} />
      </div>
    </div>
  );
};

export default ListProducts;
