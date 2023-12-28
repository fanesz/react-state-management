import { useParams } from "react-router-dom";
import { getProductById } from "../api/services";
import { useEffect, useState } from "react";
import { product } from "../type";

const ProductById = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<product>({} as product);

  const fetchData = async () => {
    if (!id) return;
    const res = await getProductById(id);
    console.log(res);
    setProduct(res);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="border border-white mb-10 w-1/2">
        <img className="w-20" src={product?.image} alt={product?.title} />
        <div>{product?.description}</div>
        <div>{product?.price}</div>
        <div>{product?.category}</div>
        <div>{product?.rating?.rate}</div>
        <div>{product?.rating?.count}</div>
      </div>
    </div>
  );
};

export default ProductById;
