import { Dispatch, SetStateAction } from "react";

interface props {
  type: string;
  placeholder: string;
  className?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const Input = (props: props) => {
  const { type, placeholder, className, value, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} border border-gray-300 p-2 rounded h-12 w-full focus:outline-none focus:border-2 focus:border-black hover:border-1 hover:border-black`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
