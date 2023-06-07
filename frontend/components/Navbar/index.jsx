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
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Navbar() {
  const [userMenu, setUserMenu] = useState(false);
  const [items, setItems] = useState(false);
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({});
  const wrapperRef = useRef();

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));

    window.onclick = (event) => {
      if (event.target.contains(wrapperRef.current)
        && event.target !== wrapperRef.current) {
        setUserMenu(false)
      } else {
        console.log(`You clicked Inside the box at ${new Date().toLocaleString()}`);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("token");
    Cookies.remove("auth");
    Cookies.remove("token");
    router.push("http://localhost:3000/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href="/" className={styles.navbarLogo}>
          <FontAwesomeIcon icon={faCalendarAlt} id={styles.logo} />
          <h1>کی کجا</h1>
        </a>
        <div className={styles.userMenu}>
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
            <div
              className={styles.menu}
              id={styles.userDropdown}
              ref={wrapperRef}
            >
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
                  <a href="#" className={styles.links}>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className={styles.icon}
                    />
                    تنظیمات حساب
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.links}>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className={styles.icon}
                    />
                    اتصال تقویم ها
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.links}>
                    <FontAwesomeIcon
                      icon={faPuzzlePiece}
                      className={styles.icon}
                    />
                    یکپارچه سازی
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.links}>
                    <FontAwesomeIcon
                      icon={faShareAlt}
                      className={styles.icon}
                    />
                    هم رسانی لینک
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.links}>
                    <FontAwesomeIcon icon={faGem} className={styles.icon} />
                    مدیریت اشتراک
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.links}>
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className={styles.icon}
                    />
                    راهنما
                  </a>
                </li>
                <li onClick={handleLogout}>
                  <a href="" className={styles.links}>
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
              <a href="#" aria-current="page">
                رویدادهای ثبت شده
              </a>
            </li>
            <li>
              <a href="#">الگوهای زمانی</a>
            </li>
            <li>
              <a href="#">گردش کار</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
