import { useState } from "react";
import EventModal from "@/components/EventModal";
import Navbar from "@/components/Navbar";
import styles from '@/styles/dashboard.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    const [eventTypes, setEventTypes] = useState(false);

    return (
        <>
            <Navbar />
            <nav className={styles.secondNavbar}>
                <div className={styles.navbarContainer}>
                    {/* <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" onClick={() => setEventTypes(!eventTypes)}
                        className={styles.eventTypeBtn}>
                        نوع رویدادهای من
                        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    {eventTypes &&
                        <div id="dropdownNavbar" className={styles.eventTypeMenu}>
                            <ul aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#">یک به یک</a>
                                </li>
                                <li>
                                    <a href="#">گروهی</a>
                                </li>
                            </ul>
                        </div>
                    } */}
                    <DropdownButton
                        className={styles.eventTypeBtn}
                        // as={ButtonGroup}
                        id={`dropdown-button-drop-end`}
                        drop='down'
                        // variant="secondary"
                        title='نوع رویدادهای من'
                    >
                        <Dropdown.Item eventKey="1">یک به یک</Dropdown.Item>
                        <Dropdown.Item eventKey="2">گروهی</Dropdown.Item>
                        {/* <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
                    </DropdownButton>
                    <div className={styles.addEvent}>
                        <button
                            onClick={() => setShowModal(true)}>
                            افزودن رویداد جدید
                            <FontAwesomeIcon icon={faAdd} />
                        </button>
                    </div>
                </div>
            </nav>
            {showModal && <EventModal show={showModal} onHide={() => setShowModal(false)} />}
        </>
    )
}