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
      <div className={styles.responsiveMenuContainer}>
        <div className={styles.responsiveMenu}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <a
                href="#"
                className={`${props.step == 1 ? styles.active : null} ${
                  styles.itemLink
                }`}
                onClick={() => setSelected("تنظیمات پایه")}
              >
                <FontAwesomeIcon
                  icon={faListCheck}
                  className={styles.itemIcon}
                />
                <span className={styles.itemText}>تنظیمات پایه</span>
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="#"
                className={styles.itemLink}
                // onClick={() => setSelected('زمان های آزاد')}
              >
                <FontAwesomeIcon icon={faClock} className={styles.itemIcon} />
                <span className={styles.itemText}>زمان های آزاد</span>
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="#"
                className={styles.itemLink}
                // onClick={() => setSelected('تنظیمات پیشرفته')}
              >
                <FontAwesomeIcon icon={faGears} className={styles.itemIcon} />
                <span className={styles.itemText}>تنظیمات پیشرفته</span>
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="#"
                className={styles.itemLink}
                // onClick={() => setSelected('پرسش از مهمان')}
              >
                <FontAwesomeIcon
                  icon={faQuestion}
                  className={styles.itemIcon}
                />
                <span className={styles.itemText}>پرسش از مهمان</span>
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="#"
                className={styles.itemLink}
                // onClick={() => setSelected('اطلاع رسانی ها')}
              >
                <FontAwesomeIcon icon={faBell} className={styles.itemIcon} />
                <span className={styles.itemText}>اطلاع رسانی ها</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.sidebarContainer}>
        <div className={styles.sidebarMenu}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <a
                href="#"
                className={`${props.step == 1 ? styles.active : null} ${
                  styles.itemLink
                }`}
                // onClick={() => setSelected('تنظیمات پایه')}
              >
                <FontAwesomeIcon
                  icon={faListCheck}
                  className={styles.itemIcon}
                />
                <span className={styles.itemText}>تنظیمات پایه</span>
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="#"
                className={`${props.step == 2 ? styles.active : null} ${
                  styles.itemLink
                }`}
                // onClick={() => setSelected('زمان های آزاد')}
              >
                <FontAwesomeIcon icon={faClock} className={styles.itemIcon} />
                <span className={styles.itemText}>زمان های آزاد</span>
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="#"
                className={`${props.step == 3 ? styles.active : null} ${
                  styles.itemLink
                }`}
                // onClick={() => setSelected('تنظیمات پیشرفته')}
              >
                <FontAwesomeIcon icon={faGears} className={styles.itemIcon} />
                <span className={styles.itemText}>تنظیمات پیشرفته</span>
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="#"
                className={`${props.step == 4 ? styles.active : null} ${
                  styles.itemLink
                }`}
                // onClick={() => setSelected('پرسش از مهمان')}
              >
                <FontAwesomeIcon
                  icon={faQuestion}
                  className={styles.itemIcon}
                />
                <span className={styles.itemText}>پرسش از مهمان</span>
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="#"
                className={`${props.step == 4 ? styles.active : null} ${
                  styles.itemLink
                }`}
                // onClick={() => setSelected('اطلاع رسانی ها')}
              >
                <FontAwesomeIcon icon={faBell} className={styles.itemIcon} />
                <span className={styles.itemText}>اطلاع رسانی ها</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex flex-column justify-content-between">
            <div>
              <a className="text-decoration-none text-white d-flex align-items-center ms-3 mt-3 d-none d-sm-inline">
                <span className="ms-1 py-2 py-sm-0 fs-4 d-none d-sm-inline">
                  Brand
                </span>
              </a>
              <hr className="text-secondary d-none d-sm-block" />
              <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link" aria-current="page">
                    <FontAwesomeIcon icon={faListCheck} />
                    <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link" aria-current="page">
                    <FontAwesomeIcon icon={faClock} />
                    <span className="ms-3 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link" aria-current="page">
                    <FontAwesomeIcon icon={faGears} />
                    <span className="ms-3 d-none d-sm-inline">Orders</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link" aria-current="page">
                    <FontAwesomeIcon icon={faQuestion} />
                    <span className="ms-3 d-none d-sm-inline">Orders</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link" aria-current="page">
                    <FontAwesomeIcon icon={faBell} />
                    <span className="ms-3 d-none d-sm-inline">Orders</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
