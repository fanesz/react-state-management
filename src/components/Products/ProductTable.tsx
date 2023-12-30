/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useNavigate } from "react-router-dom";
import ProductTableSkeleton from "../skeleton/ProductTableSkeleton";
import useProducts from "../../store/context/products";
import { useEffect } from "react";
import { getProductsByCategory } from "../../api/services";
import useCategories from "../../store/context/categories";

const ProductTable = () => {
  const navigate = useNavigate();
  const {
    loading,
    payload,
    error,
    pagination,
    startFetching,
    successFetching,
    errorFetching,
  } = useProducts();
  const { selectedCategory } = useCategories();

  const fetchProduct = async () => {
    startFetching();
    const res = await getProductsByCategory(
      selectedCategory,
      pagination.sort,
      pagination.limit,
    );
    if (res) {
      successFetching(res);
    } else {
      errorFetching();
    }
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, pagination]);

  const tableTitleStyle = "p-3 rounded-t-md border-b border-gray-300 bg-white";
  const tableBodyStyle = "text-center p-2 border-x border-gray-200";

  return (
    <>
      {loading ? (
        <ProductTableSkeleton count={pagination.limit} />
      ) : error ? (
        <div className="text-red-500">Error while fetching data</div>
      ) : (
        <div className="border border-gray-300 rounded-md">
          <table className="border-none">
            <thead>
              <tr className="rounded-md">
                <th className={`${tableTitleStyle} w-1/6 border-e`}>Title</th>
                <th className={`${tableTitleStyle} w-3/6 border-e`}>
                  Description
                </th>
                <th className={`${tableTitleStyle} w-1/6 border-e`}>Price</th>
                <th className={`${tableTitleStyle} w-1/6`}>Rating</th>
              </tr>
            </thead>
            <tbody>
              {payload.map((item, index) => (
                <tr
                  className={`hover:bg-gray-300 hover:bg-opacity-70 duration-150 cursor-pointer ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                  key={index}
                  onClick={() => navigate(`/products/${item.id}`)}
                >
                  <td className={`${tableBodyStyle} w-1/6 `}>{item.title}</td>
                  <td className={`${tableBodyStyle} w-3/6`}>
                    {item.description}
                  </td>
                  <td className={`${tableBodyStyle} w-1/6 `}>{item.price}</td>
                  <td className={`${tableBodyStyle} w-1/6 `}>
                    {item.rating.rate}
                    <span className="text-gray-400 text-sm ms-1">
                      ({item.rating.count})
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ProductTable;
