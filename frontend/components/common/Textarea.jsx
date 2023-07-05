import React from "react";

function Textarea({ value, placeholder, onChange }) {
  return (
    <textarea
      rows={3}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="border border-[rgb(209 213 219)] text-[rgb(17 24 39)] text-[11px] leading-5 rounded-lg block w-full p-2 focus:outline-none focus:border-[#354f52]"
    ></textarea>
  );
}

export default Textarea;
