import { useParams } from "react-router-dom";
import ListProducts from "../components/Products/ProductList";
import ProductDetail from "../components/DetailProduct/ProductDetail";
import Header from "../components/Products/ProductHeader";

const Products = () => {
  const { id } = useParams();

  return (
    <div className="h-screen bg-gray-100">
      <div>
        <Header id={id} />
      </div>

      <div className="flex p-4 bg-gray-100">
        {id ? <ProductDetail /> : <ListProducts />}
      </div>
    </div>
  );
};

export default Products;
