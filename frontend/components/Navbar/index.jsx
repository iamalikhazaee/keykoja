import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserCircle,
  faCalendar,
  faPuzzlePiece,
  faShareAlt,
  faGem,
  faInfoCircle,
  faSignOutAlt,
  faCalendarAlt,
  faUserCheck,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Navbar() {
  const [userMenu, setUserMenu] = useState(false);
  const [items, setItems] = useState(false);
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({});
  const wrapperRef = useRef();

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));

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
    // router.push("http://localhost:3000/");
  };

  // const openEventLink = (url) => {
  //   window.open(url, "_blank", "noreferrer");
  // };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href="/" className={styles.navbarLogo}>
          <FontAwesomeIcon icon={faCalendarAlt} id={styles.logo} />
          <h1>کی کجا</h1>
        </a>
        <div className={styles.userMenu} ref={wrapperRef}>
          <button
            type="button"
            className={styles.userBtn}
            id={styles.userMenuButton}
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={() => setUserMenu(!userMenu)}
          >
            <span className={styles.openMenu}>Open user menu</span>
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: 25, color: "white" }}
            />
          </button>
          {userMenu && (
            <div className={styles.menu} id={styles.userDropdown}>
              <div className={styles.menuHeader}>
                <span>
                  {userDetails.first_name} {userDetails.last_name}
                </span>
                {/* <span>{userDetails.email}</span> */}
              </div>
              <ul
                className={styles.menuList}
                aria-labelledby="user-menu-button"
              >
                <li>
                  <a href="http://localhost:3000/dashboard/profile-settings" className={styles.links}>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className={styles.icon}
                    />
                    تنظیمات حساب
                  </a>
                </li>
                <li onClick={handleLogout}>
                  <a href="http://localhost:3000" className={styles.links}>
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className={styles.icon}
                    />
                    خروج
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className={styles.burgerBtn}
            aria-controls="mobileMenu2"
            aria-expanded="false"
            onClick={() => setItems(!items)}
          >
            <span>Open main menu</span>
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
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
          className={`${styles.middleMenu} ${
            items === true ? styles.hidden : ""
          }`}
          id={styles.mobileMenu2}
        >
          <ul className={styles.menu}>
            <li>
              <a
                href={`/${userDetails.domain}/guests`}
                // target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faUserCheck} />
                جلسات هماهنگ شده
              </a>
            </li>
            <li>
              <a href={`/${userDetails.domain}`} target="_blank">
                <FontAwesomeIcon icon={faUserTag} />
                دامنه شما
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faInfoCircle} />
                راهنما
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
