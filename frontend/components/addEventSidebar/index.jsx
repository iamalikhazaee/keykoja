import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faClock,
  faGears,
  faQuestion,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

export default function SidebarMenu(props) {
  return (
    <>
      <div
        className={`${styles.responsiveMenuContainer} w-full block border border-b-[1px] border-gray-300`}
      >
        <div className="w-full">
          <ul className="list-none flex overflow-x-scroll p-0 m-0 w-full py-4 px-2">
            <li className="min-w-[130px] flex justify-center items-center">
              <a
                href="#"
                className={`decoration-transparent text-xs text-gray-400 hover:text-[#52819A]  ${
                  props.step == 1 ? "text-[#52819A]" : ""
                }`}
                onClick={() => setSelected("تنظیمات پایه")}
              >
                <FontAwesomeIcon icon={faListCheck} className="ml-2" />
                <span className="w-full">تنظیمات پایه</span>
              </a>
            </li>
            <li className="min-w-[130px] flex justify-center items-center">
              <a
                href="#"
                className="decoration-transparent text-xs text-gray-400 hover:text-[#52819A]"
                // onClick={() => setSelected('زمان های آزاد')}
              >
                <FontAwesomeIcon icon={faClock} className="ml-2" />
                <span className="w-full">زمان های آزاد</span>
              </a>
            </li>
            <li className="min-w-[130px] flex justify-center items-center">
              <a
                href="#"
                className="decoration-transparent text-xs text-gray-400 hover:text-[#52819A]"
                // onClick={() => setSelected('تنظیمات پیشرفته')}
              >
                <FontAwesomeIcon icon={faGears} className="ml-2" />
                <span className="w-full">تنظیمات پیشرفته</span>
              </a>
            </li>
            <li className="min-w-[130px] flex justify-center items-center">
              <a
                href="#"
                className="decoration-transparent text-xs text-gray-400 hover:text-[#52819A]"
                // onClick={() => setSelected('پرسش از مهمان')}
              >
                <FontAwesomeIcon icon={faQuestion} className="ml-2" />
                <span className="w-full">پرسش از مهمان</span>
              </a>
            </li>
            <li className="min-w-[130px] flex justify-center items-center">
              <a
                href="#"
                className="decoration-transparent text-xs text-gray-400 hover:text-[#52819A]"
                // onClick={() => setSelected('اطلاع رسانی ها')}
              >
                <FontAwesomeIcon icon={faBell} className="ml-2" />
                <span className="w-full">اطلاع رسانی ها</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${styles.sidebarContainer} p-4 flex flex-col items-center sticky top-0`}
      >
        <div className="w-full">
          <ul className="list-none flex flex-col items-start p-2 m-0">
            <li className="my-4">
              <a
                href="#"
                className={`${
                  props.step == 1 ? "text-[rgb(132,169,140)]" : ""
                } decoration-transparent flex items-center font-semibold text-slate-400 transition-all duration-75 hover:text-[#84A98C] `}
                // onClick={() => setSelected('تنظیمات پایه')}
              >
                <FontAwesomeIcon
                  icon={faListCheck}
                  className={`ml-2 ${styles.itemIcon}`}
                />
                <span className={`${styles.itemText} text-xs`}>
                  تنظیمات پایه
                </span>
              </a>
            </li>
            <li className="my-4">
              <a
                href="#"
                className={`${
                  props.step == 2 ? "text-[rgb(132,169,140)]" : ""
                } decoration-transparent flex items-center font-semibold text-slate-400 transition-all duration-75 hover:text-[#84A98C] `}
                // onClick={() => setSelected('زمان های آزاد')}
              >
                <FontAwesomeIcon
                  icon={faClock}
                  className={`ml-2 ${styles.itemIcon}`}
                />
                <span className={`${styles.itemText} text-xs`}>
                  زمان های آزاد
                </span>
              </a>
            </li>
            <li className="my-4">
              <a
                href="#"
                className={`${
                  props.step == 3 ? "text-[rgb(132,169,140)]" : ""
                } decoration-transparent flex items-center font-semibold text-slate-400 transition-all duration-75 hover:text-[#84A98C] `}
                // onClick={() => setSelected('تنظیمات پیشرفته')}
              >
                <FontAwesomeIcon
                  icon={faGears}
                  className={`ml-2 ${styles.itemIcon}`}
                />
                <span className={`${styles.itemText} text-xs`}>
                  تنظیمات پیشرفته
                </span>
              </a>
            </li>
            <li className="my-4">
              <a
                href="#"
                className={`${
                  props.step == 4 ? "text-[rgb(132,169,140)]" : ""
                } decoration-transparent flex items-center font-semibold text-slate-400 transition-all duration-75 hover:text-[#84A98C] `}
                // onClick={() => setSelected('پرسش از مهمان')}
              >
                <FontAwesomeIcon
                  icon={faQuestion}
                  className={`ml-2 ${styles.itemIcon}`}
                />
                <span className={`${styles.itemText} text-xs`}>
                  پرسش از مهمان
                </span>
              </a>
            </li>
            <li className="my-4">
              <a
                href="#"
                className={`${
                  props.step == 5 ? "text-[rgb(132,169,140)]" : ""
                } decoration-transparent flex items-center font-semibold text-slate-400 transition-all duration-75 hover:text-[#84A98C] `}
                // onClick={() => setSelected('اطلاع رسانی ها')}
              >
                <FontAwesomeIcon
                  icon={faBell}
                  className={`ml-2 ${styles.itemIcon}`}
                />
                <span className={`${styles.itemText} text-xs`}>
                  اطلاع رسانی ها
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
