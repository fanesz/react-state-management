import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useItemsPerPage } from "../store";
import { ChangeEvent } from "react";

const Pagination = (props: { currentPage: number }) => {
  const handleArrow = (e: ChangeEvent<HTMLSelectElement>) => {
    useItemsPerPage.setState(() => {
      return { limit: Number(e.target.value) };
    });
  };

  return (
    <div className="flex justify-end">
      <div>
        Rows per page:
        <select
          value={props.currentPage}
          onChange={handleArrow}
          className="mx-2 border border-gray-300 rounded"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className="flex gap-2">
        <ChevronLeftIcon
          className={`${
            props.currentPage <= 1 && "cursor-default fill-gray-400"
          } my-auto h-6 w-6 cursor-pointer`}
        />
        x
        <ChevronRightIcon
          className={`${
            props.currentPage >= 100 && "cursor-default fill-gray-400"
          } my-auto h-6 w-6 cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default Pagination;
