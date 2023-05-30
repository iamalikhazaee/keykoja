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
import { useEffect } from "react";
import { useState } from "react";

export default function newEvent() {
    const router = useRouter();
    const form = useRecoilValue(current_form)
    const [userDetails, setUserDetails] = useState({})
    const [userToken, setUserToken] = useState()
    const [location, setLocation] = useState()

    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem("userDetails")))
        setUserToken(localStorage.getItem("token"))
    }, [])

    const handleBackBtn = () => {
        router.push({
            pathname: '/dashboard'
        })
    }

    console.log(userDetails)
    console.log(userToken)

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
                                    <label htmlFor="owner">صاحب رویداد</label>
                                    <input
                                        readOnly
                                        type="text"
                                        id="owner"
                                        aria-label="disabled input 2"
                                        value={`${userDetails.first_name} ${userDetails.last_name}`}
                                    // onChange={(e) => setOwner(e.target.value)}
                                    />
                                </div>
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
                                        id="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        defaultValue={''}
                                    >
                                        <option>محل برگزاری را انتخاب کنید</option>
                                        <option>حضوری</option>
                                        <option>Google meet</option>
                                        <option>Skype</option>
                                        <option>Whatsapp</option>
                                    </select>
                                </div>

                                {location === undefined || location === 'محل برگزاری را انتخاب کنید' ? (
                                    <></>) :
                                    (
                                        <div className={styles.field}>
                                            <label htmlFor="title">
                                                {location === 'حضوری' && 'آدرس'}
                                                {location === 'Google meet' && 'لینک'}
                                                {location === 'Skype' && 'شماره تلفن'}
                                                {location === 'Whatsapp' && 'شماره تلفن'}
                                            </label>
                                            <input id="title" type="text" />
                                        </div>
                                    )
                                }


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
                                        <div className={styles.mutedText}>{userDetails.domain}/</div>
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