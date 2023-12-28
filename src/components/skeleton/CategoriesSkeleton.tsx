import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategoriesSkeleton = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#DEDEDE" highlightColor="#ffffff">
        <div className="border w-fit mx-auto ms-16">
          <div className="w-fit h-fit mx-auto border border-gray-200 rounded bg-white shadow-md">
            <div className="p-4 px-10 text-lg truncate">
              Filter Berdasarkan Kategori
            </div>

            <div className="h-px bg-gray-300 my-auto mb-2 w-full" />

            <div className="mb-4 mt-4">
              {[...Array(4)].map((_item, index) => (
                <div className="px-5" key={index}>
                  <Skeleton height={25} style={{ marginBottom: "0.81rem" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default CategoriesSkeleton;
