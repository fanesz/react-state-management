import { useNavigate } from "react-router-dom";
import { product } from "../../type";

const ProductTable = (props: { products: product[] }) => {
  const navigate = useNavigate();

  const tableTitleStyle = "p-3 rounded-t-md border-b border-gray-300 bg-white";
  const tableBodyStyle = "text-center p-2 border-x border-gray-200";

  return (
    <div>
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
            {props.products.map((item, index) => (
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
    </div>
  );
};

export default ProductTable;
