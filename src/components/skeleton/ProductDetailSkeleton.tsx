import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailSkeleton = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <SkeletonTheme baseColor="#DEDEDE" highlightColor="#ffffff">
        <div className="border border-gray-200 p-10 px-12 rounded-md bg-white shadow-lg">
          <div className="flex">
            <div className="rounded-md">
              <Skeleton height={150} width={150} />
            </div>

            <div className="my-auto ms-10 text-xl">
              <div className="flex gap-1 text-sm mb-1">
                <Skeleton width={250} />
              </div>

              <div className="mb-1">
                <Skeleton
                  count={2}
                  width={400}
                  height={25}
                  style={{ marginBottom: "0.2rem" }}
                />
              </div>

              <div className="text-2xl">
                <Skeleton width={100} />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Skeleton
              height={20}
              count={4}
              style={{ marginBottom: "0.3rem" }}
            />
          </div>

          <div className="mt-4"></div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default ProductDetailSkeleton;
