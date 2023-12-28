import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../api/services";
import { useEffect, useState } from "react";
import { product } from "../../type";
import ProductDetailCard from "./ProductDetailCard";
import ProductDetailSkeleton from "../skeleton/ProductDetailSkeleton";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<product>({} as product);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (!id) {
      navigate("/products");
      return;
    }
    const res = await getProductById(id);
    if (!res) {
      navigate("/products");
      return;
    }
    setProduct(res);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {isLoading ? (
        <ProductDetailSkeleton />
      ) : (
        <ProductDetailCard product={product} />
      )}
    </div>
  );
};

export default ProductDetail;
