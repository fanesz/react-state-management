/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect } from "react";
import useCategories from "../../store/context/categories";
import { getCategories } from "../../api/services";
import CategoriesSkeleton from "../skeleton/CategoriesSkeleton";

const CategoryFilter = () => {
  const {
    loading,
    selectedCategory,
    payload,
    error,
    startFetching,
    successFetching,
    errorFetching,
    setCategory,
  } = useCategories();

  const fetchCategories = async () => {
    startFetching();
    const res = await getCategories();
    if (res) {
      successFetching(res);
    } else {
      errorFetching();
    }
  };

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <CategoriesSkeleton />
      ) : error ? (
        <div className="text-red-500">Error while fetching data</div>
      ) : (
        <div className="border w-fit mx-auto ms-16">
          <div className="w-fit h-fit mx-auto border border-gray-200 rounded bg-white shadow-md">
            <div className="p-4 px-10 text-lg truncate">
              Filter Berdasarkan Kategori
            </div>

            <div className="h-px bg-gray-300 my-auto mb-2 w-full" />

            <div className="mb-4">
              {payload.map((item, index) => (
                <div
                  key={index}
                  className={`py-2.5 rounded-e-full me-8 duration-200 ease-in-out cursor-pointer ${
                    selectedCategory === item
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200 hover:bg-opacity-60"
                  }`}
                  onClick={() => handleCategory(item)}
                >
                  <span className="px-5">
                    {item[0].toLocaleUpperCase() + item.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryFilter;
