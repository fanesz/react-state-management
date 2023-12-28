import { ArrowLeftIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Navbar from "../_Shared/Navbar";
import { useNavigate } from "react-router-dom";

const Header = (props: { id: string | undefined }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-800 to-gray-600 h-36 flex justify-between">
        <div className="flex gap-5 w-5/6 ms-12">
          <div className="my-auto text-xl text-white font-semibold">
            {props.id ? (
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => navigate("/products")}
              >
                <ArrowLeftIcon className="w-5 h-5 my-auto" />
                <span className="my-auto">Kembali</span>
              </div>
            ) : (
              "Daftar Iklan"
            )}
          </div>
          <div className="my-auto ms-16 w-2/6">
            {props.id ? (
              <div className="text-2xl text-white">ID Produk: {props.id}</div>
            ) : (
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 p-2 rounded h-12 w-full focus:outline-none focus:border-2 focus:border-black hover:border-1 hover:border-black"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            )}
          </div>
        </div>
        <div className="my-auto w-1/6">
          {props.id ? (
            <button className="p-2 px-5 rounded-full bg-yellow-500 text-white font-medium flex hover:bg-yellow-400 duration-200 ease-in-out">
              <PencilIcon className="w-5 h-5 my-auto me-1.5" /> Edit Product
            </button>
          ) : (
            <button className="p-2 px-5 rounded-full bg-orange-500 text-white font-medium flex hover:bg-orange-400 duration-200 ease-in-out">
              <PlusIcon className="w-5 h-5 my-auto me-1.5" /> Add Product
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
