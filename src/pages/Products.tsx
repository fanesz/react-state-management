import { useParams } from "react-router-dom";
import ListProducts from "../components/ListProducts"
import ProductById from "../components/ProductById";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { BellAlertIcon } from "@heroicons/react/24/outline";

const Products = () => {

  const { id } = useParams();

  const [search, setSearch] = useState("");

  return (
    <div className="h-screen bg-gray-100">
      <div className="h-16 flex justify-end gap-3">
        <div className="my-auto">
          <BellAlertIcon className="w-5 h-5 mt-1 stroke-green-700" />
        </div>
        <div className="my-auto">
          <div className="rounded-full bg-gray-300 w-8 h-8 text-center pt-1">
            U
          </div>
        </div>
        <div className="my-auto me-10 text-xl">
          Hi, Fanes!
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-800 to-gray-600 h-36 flex justify-between">
        <div className="flex gap-5 w-5/6 ms-12">
          <div className="my-auto text-xl text-white font-semibold">
            Daftar Iklan
          </div>
          <div className="my-auto ms-16 w-2/6">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 p-2 rounded h-12 w-full focus:outline-none focus:border-2 focus:border-black hover:border-1 hover:border-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="my-auto w-1/6">
          <button className="p-2 px-5 rounded-full bg-orange-400 text-white font-medium flex">
            <PlusIcon className="w-5 h-5 my-auto me-1.5" /> Tambah iklan baru
          </button>
        </div>
      </div>

      <div className="flex p-4 bg-gray-100">
        {id ? <ProductById /> : <ListProducts />}

      </div>

    </div>
  )
}

export default Products