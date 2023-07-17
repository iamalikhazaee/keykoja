import React from "react";

function FilledBtn({ onClick, bg, children }) {
  return (
    <button
      className="flex justify-between items-center py-3 px-4 rounded-xl text-white border-none text-[11px] transition-all duration-300 hover:opacity-70"
      style={{backgroundColor: `#${bg}`}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FilledBtn;
