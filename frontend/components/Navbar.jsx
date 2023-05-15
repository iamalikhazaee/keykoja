import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserCircle, faCalendar, faPuzzlePiece, faShareAlt, faGem, faInfoCircle, faSignOutAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/dashboard.module.scss";
import { useState } from "react";

export default function Navbar() {
  const [userMenu, setUserMenu] = useState(false);
  const [items, setItems] = useState(false);

  return (
    <nav class="bg-white border-gray-200 py-1 px-4" style={{ background: "#E57F84" }}>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          {/* <Image
            src="/next.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
            width={50}
            height={50}
          /> */}
          <FontAwesomeIcon icon={faCalendarAlt} className="ml-2" style={{ fontSize: 30, color: "white" }} />
          <h1 class="self-center mr-2 font-semibold whitespace-nowrap dark:text-white">
            کی کجا
          </h1>
        </a>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="flex mr-3 text-sm rounded-full md:mr-0"
            id={styles.userMenuButton}
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={() => setUserMenu(!userMenu)}
          >
            <span class="sr-only">Open user menu</span>
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: 25, color: "white" }}
            />
          </button>
          {userMenu && (
            <div
              class="z-50 absolute top-14 left-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
              style={{ background: "#F4EAE6" }}
              id={styles.userDropdown}
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-500 dark:text-gray-400">
                  فاطمه حنیفی
                </span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  fatemehanifi@gmail.com
                </span>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    class="flex justify-start items-center px-4 py-2 text-xs text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FontAwesomeIcon icon={faUserCircle} className="ml-2" style={{ fontSize: 15, color: "gray" }} />
                    تنظیمات حساب
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex justify-start items-center px-4 py-2 text-xs text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FontAwesomeIcon icon={faCalendar} className="ml-2" style={{ fontSize: 15, color: "gray" }} />
                    اتصال تقویم ها
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex justify-start items-center px-4 py-2 text-xs text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FontAwesomeIcon icon={faPuzzlePiece} className="ml-2" style={{ fontSize: 15, color: "gray" }} />
                    یکپارچه سازی
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex justify-start items-center px-4 py-2 text-xs text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FontAwesomeIcon icon={faShareAlt} className="ml-2" style={{ fontSize: 15, color: "gray" }} />
                    هم رسانی لینک
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex justify-start items-center px-4 py-2 text-xs text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FontAwesomeIcon icon={faGem} className="ml-2" style={{ fontSize: 15, color: "gray" }} />
                    مدیریت اشتراک
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex justify-start items-center px-4 py-2 text-xs text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className="ml-2" style={{ fontSize: 15, color: "gray" }} />
                    راهنما
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex justify-start items-center px-4 py-2 text-xs text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="ml-2" style={{ fontSize: 15, color: "gray" }} />
                    خروج
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex mr-3 items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-controls="mobileMenu2"
            aria-expanded="false"
            onClick={() => setItems(!items)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class={`transition-transform duration-1000 items-center justify-between ${items === false ? 'hidden' : null} w-full md:flex md:w-auto md:order-1`}
          id={styles.mobileMenu2}
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
            style={{ background: "#E57F84" }}
          >
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 ml-7 text-gray-900 rounded hover:text-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                رویدادهای ثبت شده
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                الگوهای زمانی
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                گردش کار
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
