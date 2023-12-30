/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { ChangeEvent } from "react";
import useProducts from "../../store/context/products";

const Pagination = () => {
  const { pagination, setPagination } = useProducts();

  const handleLimitItemPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    setPagination({
      ...pagination,
      limit: Number(e.target.value),
    });
  };

  const handleSorting = (e: ChangeEvent<HTMLSelectElement>) => {
    setPagination({
      ...pagination,
      sort: e.target.value,
    });
  };

  const pageLimit = [3, 5, 10];

  return (
    <div className="flex justify-end">
      <div>
        Rows per page:
        <select
          value={pagination.limit}
          onChange={handleLimitItemPerPage}
          className="mx-2 border border-gray-300 rounded"
        >
          {pageLimit.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <select
          value={pagination.sort}
          onChange={handleSorting}
          className="mx-2 border border-gray-300 rounded"
        >
          <option value={"asc"}>Newest</option>
          <option value={"desc"}>Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
