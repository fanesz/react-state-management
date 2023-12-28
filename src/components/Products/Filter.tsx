import { ChangeEvent } from "react";
import { useFilterData } from "../../store/filter";

interface props {
  currentPage: number;
  sort: string;
}
const Pagination = (props: props) => {
  const { currentPage, sort } = props;

  const handleLimitItemPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    useFilterData.setState(() => {
      return { limit: Number(e.target.value) };
    });
  };

  const handleSorting = (e: ChangeEvent<HTMLSelectElement>) => {
    useFilterData.setState(() => {
      return { sort: e.target.value };
    });
  };

  const pageLimit = [3, 5, 10];

  return (
    <div className="flex justify-end">
      <div>
        Rows per page:
        <select
          value={currentPage}
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
          value={sort}
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
