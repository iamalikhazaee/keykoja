import React, { useEffect, useState } from "react";
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
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("userDetails")).theme);
  }, []);
  return (
    <>
      <div
        className={`${styles.responsiveMenuContainer} w-full block border border-b-[1px] border-gray-300`}
      >
        <div className="w-full">
          <ul className="list-none flex overflow-x-scroll p-0 m-0 w-full py-4 px-2">
            <li className="min-w-[130px] flex justify-center items-center">
              <span
                className={`${
                  props.step === 1
                    ? theme?.id === 2
                      ? "text-palletteOneThird hover:text-palletteOneFirst"
                      : theme?.id === 1
                      ? "text-palletteTwoSecond hover:text-palletteTwoFirst"
                      : "text-palletteThreeFirst hover:text-palletteThreeSecond"
                    : "text-gray-400"
                } decoration-transparent text-xs transition-all duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon icon={faListCheck} className="ml-2" />
                <span className="w-full">تنظیمات پایه</span>
              </span>
            </li>
            <li className="min-w-[130px] flex justify-center items-center">
              <span
                className={`${
                  props.step === 2
                    ? theme?.id === 2
                      ? "text-palletteOneThird hover:text-palletteOneFirst"
                      : theme?.id === 1
                      ? "text-palletteTwoSecond hover:text-palletteTwoFirst"
                      : "text-palletteThreeFirst hover:text-palletteThreeSecond"
                    : "text-gray-400"
                } decoration-transparent text-xs transition-all duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon icon={faClock} className="ml-2" />
                <span className="w-full">زمان های آزاد</span>
              </span>
            </li>
            <li className="min-w-[130px] flex justify-center items-center">
              <span
                className={`${
                  props.step === 3
                    ? theme?.id === 2
                      ? "text-palletteOneThird hover:text-palletteOneFirst"
                      : theme?.id === 1
                      ? "text-palletteTwoSecond hover:text-palletteTwoFirst"
                      : "text-palletteThreeFirst hover:text-palletteThreeSecond"
                    : "text-gray-400"
                } decoration-transparent text-xs transition-all duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon icon={faGears} className="ml-2" />
                <span className="w-full">تنظیمات پیشرفته</span>
              </span>
            </li>
            <li className="min-w-[130px] flex justify-center items-center">
              <span
                className={`${
                  props.step === 4
                    ? theme?.id === 2
                      ? "text-palletteOneThird hover:text-palletteOneFirst"
                      : theme?.id === 1
                      ? "text-palletteTwoSecond hover:text-palletteTwoFirst"
                      : "text-palletteThreeFirst hover:text-palletteThreeSecond"
                    : "text-gray-400"
                } decoration-transparent text-xs transition-all duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon icon={faQuestion} className="ml-2" />
                <span className="w-full">پرسش از مهمان</span>
              </span>
            </li>
            <li className="min-w-[130px] flex justify-center items-center">
              <span
                className={`${
                  props.step === 5
                    ? theme?.id === 2
                      ? "text-palletteOneThird hover:text-palletteOneFirst"
                      : theme?.id === 1
                      ? "text-palletteTwoSecond hover:text-palletteTwoFirst"
                      : "text-palletteThreeFirst hover:text-palletteThreeSecond"
                    : "text-gray-400"
                } decoration-transparent text-xs transition-all duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon icon={faBell} className="ml-2" />
                <span className="w-full">اطلاع رسانی ها</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${styles.sidebarContainer} py-4 px-2 flex flex-col items-center sticky top-0`}
      >
        <div className="w-full">
          <ul className="list-none flex flex-col items-start py-2 px-4 m-0">
            <li className="my-4">
              <span
                className={`${
                  props.step === 1
                    ? theme?.id === 2
                      ? "text-palletteOneThird hover:text-palletteOneFirst"
                      : theme?.id === 1
                      ? "text-palletteTwoSecond hover:text-palletteTwoFirst"
                      : "text-palletteThreeFirst hover:text-palletteThreeSecond"
                    : "text-gray-400"
                } decoration-transparent text-xs transition-all duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faListCheck}
                  className={`ml-2 ${styles.itemIcon}`}
                />
                <span className={`${styles.itemText} text-xs`}>
                  تنظیمات پایه
                </span>
              </span>
            </li>
            <li className="my-4">
              <span
                className={`${
                  props.step === 2
                    ? theme?.id === 2
                      ? "text-palletteOneThird hover:text-palletteOneFirst"
                      : theme?.id === 1
                      ? "text-palletteTwoSecond hover:text-palletteTwoFirst"
                      : "text-palletteThreeFirst hover:text-palletteThreeSecond"
                    : "text-gray-400"
                } decoration-transparent text-xs transition-all duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faClock}
                  className={`ml-2 ${styles.itemIcon}`}
                />
                <span className={`${styles.itemText} text-xs`}>
                  زمان های آزاد
                </span>
              </span>
            </li>
            <li className="my-4">
              <span
                className={`${
                  props.step === 3
                    ? theme?.id === 2
                      ? "text-palletteOneThird hover:text-palletteOneFirst"
                      : theme?.id === 1
                      ? "text-palletteTwoSecond hover:text-palletteTwoFirst"
                      : "text-palletteThreeFirst hover:text-palletteThreeSecond"
                    : "text-gray-400"
                } decoration-transparent text-xs transition-all duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faGears}
                  className={`ml-2 ${styles.itemIcon}`}
                />
                <span className={`${styles.itemText} text-xs`}>
                  تنظیمات پیشرفته
                </span>
              </span>
            </li>
            <li className="my-4">
              <span
                className={`${
                  props.step === 4
                    ? theme?.id === 2
                      ? "text-palletteOneThird hover:text-palletteOneFirst"
                      : theme?.id === 1
                      ? "text-palletteTwoSecond hover:text-palletteTwoFirst"
                      : "text-palletteThreeFirst hover:text-palletteThreeSecond"
                    : "text-gray-400"
                } decoration-transparent text-xs transition-all duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faQuestion}
                  className={`ml-2 ${styles.itemIcon}`}
                />
                <span className={`${styles.itemText} text-xs`}>
                  پرسش از مهمان
                </span>
              </span>
            </li>
            <li className="my-4">
              <span
                className={`${
                  props.step === 5
                    ? theme?.id === 2
                      ? "text-palletteOneThird hover:text-palletteOneFirst"
                      : theme?.id === 1
                      ? "text-palletteTwoSecond hover:text-palletteTwoFirst"
                      : "text-palletteThreeFirst hover:text-palletteThreeSecond"
                    : "text-gray-400"
                } decoration-transparent text-xs transition-all duration-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faBell}
                  className={`ml-2 ${styles.itemIcon}`}
                />
                <span className={`${styles.itemText} text-xs`}>
                  اطلاع رسانی ها
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
