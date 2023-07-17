import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faSignOutAlt,
  faCalendarAlt,
  faUserCheck,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [userMenu, setUserMenu] = useState(false);
  const [items, setItems] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [theme, setTheme] = useState([]);
  const [avatar, setAvatar] = useState("");
  const wrapperRef = useRef();

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
    let ava = JSON.parse(localStorage.getItem("userDetails")).avatar
    let a = ava !== null && ava.startsWith("/me")
    setAvatar(a ? `https://keykoja.iran.liara.run/${ava}` : ava)
    setTheme(JSON.parse(localStorage.getItem("userDetails")).theme)

    let handler = (event) => {
      if (!wrapperRef.current.contains(event.target)) {
        setUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("token");
    Cookies.remove("auth");
    Cookies.remove("token");
  };

  const myLoader = (src) => {
    return `${src}`;
  };

  return (
    <nav
      className="py-1 px-2"
      style={{ backgroundColor: `#${theme.pallete_1}` }}
    >
      <div
        className={`${styles.navbarContainer} max-w-full flex flex-wrap items-center justify-between my-0 mx-auto py-2 px-6`}
      >
        <a
          href="/"
          className="flex items-center decoration-transparent text-white"
        >
          <FontAwesomeIcon icon={faCalendarAlt} className="ml-2 text-3xl" />
          <h1 className="self-center mr-2 font-semibold whitespace-nowrap text-xl m-0">
            کی کجا
          </h1>
        </a>
        <div
          className={`${styles.userMenu} flex items-center relative `}
          ref={wrapperRef}
        >
          <button
            type="button"
            className={`${styles.userBtn} flex mr-3 text-sm leading-5 bg-none border-none `}
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={() => setUserMenu(!userMenu)}
          >
            <span
              className={`${styles.openMenu} absolute w-[1px] h-[1px] p-0 -m[1px] overflow-hidden whitespace-nowrap border-none`}
            >
              Open user menu
            </span>
            <Image
              alt="avatar"
              loader={() => myLoader(`${avatar}`)}
              src={avatar}
              width={70}
              height={70}
              className="w-10 h-10 rounded-[100%] object-cover"
            />
          </button>
          {userMenu && (
            <div
              className={`${styles.menu} absolute z-50 top-[40px] -left-3 w-[150px] text-base leading-6 rounded-xl bg-[#f5f1ed]`}
              id={styles.userDropdown}
            >
              <div className="p-3 border-b border-slate-400">
                <span className="block text-sm leading-5 text-slate-600">
                  {userDetails.first_name} {userDetails.last_name}
                </span>
                {/* <span>{userDetails.email}</span> */}
              </div>
              <ul
                className="p-0 list-none m-0"
                aria-labelledby="user-menu-button"
              >
                <li>
                  <Link
                    href="/dashboard/profile-settings"
                    className="w-full flex justify-start items-center py-2 pr-3 my-2 text-slate-600 decoration-transparent text-xs transition-all duration-300 hover:bg-slate-50 hover:text-gray-500"
                  >
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className="ml-2 text-sm text-slate-500"
                    />
                    تنظیمات حساب
                  </Link>
                </li>
                <li onClick={handleLogout}>
                  <Link
                    href="/"
                    className="w-full flex justify-start items-center py-2 pr-3 my-2 text-slate-600 decoration-transparent text-xs transition-all duration-300 hover:bg-slate-50 hover:text-gray-500"
                  >
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="ml-2 text-sm text-slate-500"
                    />
                    خروج
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className={`${styles.burgerBtn} inline-flex mr-3 items-center p-2 ml-1 text-sm leading-5 text-gray-400 rounded-lg border-none outline-none hover:bg-slate-200 focus:border-none focus:outline-none`}
            aria-controls="mobileMenu2"
            aria-expanded="false"
            onClick={() => setItems(!items)}
          >
            <span className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-none">
              Open main menu
            </span>
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            styles.middleMenu
          } transition-all duration-100 flex items-center justify-between w-full ${
            items === true ? "hidden" : ""
          }`}
        >
          <ul
            className={`${styles.menu} flex flex-col font-medium text-sm mb-0 list-none `}
          >
            <li>
              <Link
                href={`/${userDetails?.domain}/guests`}
                // target="_blank"
                rel="noopener noreferrer"
                className="decoration-transparent flex text-white items-center py-2 px-4 ml-7 rounded-xl transition-all duration-300"
              >
                <FontAwesomeIcon icon={faUserCheck} className="ml-[6px]" />
                جلسات هماهنگ شده
              </Link>
            </li>
            <li>
              <Link
                href={`/${userDetails?.domain}`}
                target="_blank"
                className="decoration-transparent flex text-white items-center py-2 px-4 ml-7 rounded-xl transition-all duration-300"
              >
                <FontAwesomeIcon icon={faUserTag} className="ml-[6px]" />
                دامنه شما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
