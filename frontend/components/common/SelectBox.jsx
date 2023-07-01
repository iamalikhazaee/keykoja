import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";

export default function SelectBox(props) {
  const [showDropDown, setShowDropDown] = useState(false);
  let wrapperRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!wrapperRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        className="relative py-2 px-1 ml-[1px] border border-[rgb(209 213 219)] rounded-lg cursor-pointer"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className="h-4 w-4 p-1 absolute box-border top-1/2 left-[2px] transform -translate-y-1/2 text-[10px]"
        />
        <input
          value={props.value}
          className="px-1 box-border focus:border-none focus:outline-none text-[11px] cursor-pointer"
        ></input>
        {showDropDown && (
          <div className="absolute top-10 -left-[1px] bg-white z-10 w-full border border-gray-300 rounded-xl text-[11px] shadow-md">
            {props.options.map((item, index) => (
              <div
                key={index}
                className=" w-full p-2 border-b-[1px] border-slate-100 last:border-none cursor-pointer hover:bg-slate-100"
                onClick={() => props.setValue(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

