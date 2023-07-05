import React from "react";

function Input({ value, type, placeholder, onChange }) {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="border border-[rgb(209 213 219)] text-[rgb(17 24 39)] text-[11px] leading-5 rounded-lg block w-full p-2 mb-[5px] focus:outline-none border-[#354f52] placeholder:text-[rgba(200, 200, 200, 1)]"
    />
  );
}

export default Input;
