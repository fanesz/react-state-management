import { StarIcon } from "@heroicons/react/24/solid";
import { product } from "../../type";

const ProductDetailCard = (props: { product: product }) => {
  return (
    <div>
      <div className="border border-gray-200 p-10 px-12 rounded-md bg-white shadow-lg">
        <div className="flex">
          <div className="rounded-md">
            <img
              className="w-20 rounded-md"
              src={props.product?.image}
              alt={props.product?.title}
            />
          </div>

          <div className="my-auto ms-10 text-xl">
            <div className="flex gap-1 text-sm text-gray-500">
              <span>{props.product?.category} |</span>
              <StarIcon className="w-4 h-4 fill-yellow-400 my-auto" />
              <span className="my-auto">
                {props.product?.rating?.rate}
                <span className="ms-1">({props.product?.rating?.count})</span>
              </span>
            </div>

            <div className="">{props.product?.title}</div>

            <div className="text-2xl text-green-700">
              ${props.product?.price}
            </div>
          </div>
        </div>

        <div className="mt-4">{props.product?.description}</div>

        <div className="mt-4">
          <button className="py-2 px-4 rounded-md bg-green-500 text-white font-semibold cursor-pointer duration-200 ease-in-out hover:bg-green-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
