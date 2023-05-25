import Navbar from "@/components/Navbar"
import SidebarMenu from "@/components/addEventSidebar"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import styles from '@/styles/newEvent.module.scss'
import { Row, Col } from "react-bootstrap";

export default function newEvent() {
    return (
        <>
            <Navbar />
            <Row className={styles.row}>
                <nav className={styles.secondNavbar}>
                    <div className={styles.navbarContainer}>
                        <DropdownButton
                            className={styles.eventTypeBtn}
                            // as={ButtonGroup}
                            id={`dropdown-button-drop-end`}
                            drop='down'
                            // variant="secondary"
                            title='نوع رویدادهای من'
                        >
                            <Dropdown.Item eventKey="1" className={styles.eventType}>یک به یک</Dropdown.Item>
                            <Dropdown.Item eventKey="2" className={styles.eventType}>گروهی</Dropdown.Item>
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
            </Row>
            <Row className="m-0">
                <Col lg={2}>
                    <SidebarMenu />
                </Col>
            </Row>
        </>
    )
}