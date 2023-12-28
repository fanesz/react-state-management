import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductTableSkeleton = (props: { count: number }) => {
  const tableTitleStyle = "p-3 rounded-t-md border-b border-gray-300 bg-white";
  const tableBodyStyle = "text-center p-2 border-x border-gray-200";

  return (
    <div>
      <SkeletonTheme baseColor="#DEDEDE" highlightColor="#ffffff">
        <div className="border border-gray-300 rounded-md">
          <table className="border-none w-full">
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
              {[...Array(props.count)].map((_item, index) => (
                <tr
                  className={`hover:bg-gray-300 hover:bg-opacity-70 duration-150 cursor-pointer ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                  key={index}
                >
                  <td className={`${tableBodyStyle} w-1/6 `}>
                    <Skeleton count={2} />
                  </td>
                  <td className={`${tableBodyStyle}`}>
                    <Skeleton
                      count={4}
                      height={20}
                      style={{ marginBottom: "0.5rem" }}
                    />
                  </td>
                  <td className={`${tableBodyStyle} w-1/6 `}>
                    <Skeleton count={2} />
                  </td>
                  <td className={`${tableBodyStyle} w-1/6 `}>
                    <Skeleton count={2} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default ProductTableSkeleton;
