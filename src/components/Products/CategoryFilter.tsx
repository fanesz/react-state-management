import { useFilterData } from "../../store";

const CategoryFilter = (props: { categories: string[]; category: string }) => {
  const handleCategory = (input: string) => {
    useFilterData.setState(() => {
      return { category: input };
    });
  };

  const categories = ["all", ...props.categories];

  return (
    <div className="border w-fit mx-auto ms-16">
      <div className="w-fit h-fit mx-auto border border-gray-200 rounded bg-white shadow-md">
        <div className="p-4 px-10 text-lg truncate">
          Filter Berdasarkan Kategori
        </div>

        <div className="h-px bg-gray-300 my-auto mb-2 w-full" />

        <div className="mb-4">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`py-2.5 rounded-e-full me-8 duration-200 ease-in-out cursor-pointer ${props.category === item
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200 hover:bg-opacity-60"
                }`}
              onClick={() => handleCategory(item)}
            >
              <span className="px-5">{item[0].toLocaleUpperCase() + item.slice(1)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
