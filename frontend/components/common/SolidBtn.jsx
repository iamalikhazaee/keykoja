import React from "react";

function SolidBtn({ children, onClick, text }) {
  return (
    <button
      className="flex items-center justify-between p-4 rounded-xl bg-white border text-xs"
      style={{color: `#${text}`, borderColor: `#${text}`}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SolidBtn;
