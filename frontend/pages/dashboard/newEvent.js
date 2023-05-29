import Navbar from "@/components/Navbar"
import SidebarMenu from "@/components/addEventSidebar"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from '@/styles/newEvent.module.scss'
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { current_form } from "@/atoms";
import FreeTime from "@/components/FreeTime";

export default function newEvent() {
    const router = useRouter();
    const form = useRecoilValue(current_form)

    const handleBackBtn = () => {
        router.push({
            pathname: '/dashboard'
        })
    }

    return (
        <>
            <Navbar />
            <Row className={styles.row}>
                <nav className={styles.secondNavbar}>
                    <div className={styles.navbarContainer}>
                        <div className={styles.backBtn}>
                            <button onClick={handleBackBtn}>
                                <FontAwesomeIcon icon={faChevronRight} />
                                بازگشت به داشبورد
                            </button>
                        </div>
                        {/* <div className={styles.addEvent}>
                            <button
                                onClick={() => setShowModal(true)}>
                                افزودن رویداد جدید
                                <FontAwesomeIcon icon={faAdd} />
                            </button>
                        </div> */}
                    </div>
                </nav>
            </Row>
            <Row className="m-0">
                <Col lg={3} md={3} sm={3} xs={12}>
                    <SidebarMenu />
                </Col>
                <Col lg={9} md={9} sm={9} xs={12} className={styles.formContainer}>
                    <div className={styles.container}>
                        {form === 'تنظیمات پایه' ?
                            (<form>
                                <div className={styles.field}>
                                    <label htmlFor="title">عنوان رویداد</label>
                                    <input id="title" type="text" />
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="type">نوع رویداد</label>
                                    <select
                                        id="type">
                                        <option>یک به یک</option>
                                        <option>گروهی</option>
                                    </select>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="location">محل برگزاری رویداد</label>
                                    <select
                                        id="location">
                                        <option>حضوری</option>
                                        <option>Google meet</option>
                                        <option>Skype</option>
                                        <option>Whatsapp</option>
                                    </select>
                                </div>

                                <div className={styles.field}>
                                    <div className={`w-100`}>
                                        <label htmlFor="message">پیام مربوطه</label>
                                        <textarea
                                            id="message"
                                            // rows="2"
                                            placeholder="پیام مربوط به رویداد را بنویسید..."
                                        ></textarea>
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="link">لینک رویداد</label>
                                    <div className={styles.inputGroup}>
                                        <div className={styles.mutedText}>/</div>
                                        <input
                                            type="text"
                                            id="link"
                                            required
                                        />
                                    </div>
                                </div>
                            </form>)
                            : <></>
                        }

                        {form === 'زمان های آزاد' ? (
                            <FreeTime />
                        ) : <></>
                        }
                    </div>
                </Col>
            </Row>
        </>
    )
}