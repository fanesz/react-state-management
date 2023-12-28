import { BellAlertIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div>
      <div className="h-16 flex justify-end gap-3">
        <div className="my-auto">
          <BellAlertIcon className="w-5 h-5 mt-1 stroke-green-700" />
        </div>
        <div className="my-auto">
          <div className="rounded-full bg-gray-300 w-8 h-8 text-center pt-1">
            U
          </div>
        </div>
        <div className="my-auto me-10 text-xl">Hi, Fanes!</div>
      </div>
    </div>
  );
};

export default Navbar;
