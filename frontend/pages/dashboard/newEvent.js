import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar"
import SidebarMenu from "@/components/addEventSidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from '@/styles/newEvent.module.scss'
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import FreeTime from "@/components/FreeTime";
import jwt from 'jwt-decode'
import axios from "axios";

export default function newEvent() {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState({})
    const [userToken, setUserToken] = useState()
    const [event, setEvent] = useState()
    const [name, setName] = useState("");
    const [type, setType] = useState("یک به یک");
    const [location, setLocation] = useState()
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("");
    const [domain, setDomain] = useState("");
    const [steps, setSteps] = useState(1);
    // const [times, setTimes] = useState([new Date()]);


    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem("userDetails")))
        setUserToken(localStorage.getItem("token"))
    }, [])

    const handleBackBtn = () => {
        router.push({
            pathname: '/dashboard'
        })
    }

    const handleMessage = (event) => {
        setMessage(event.target.value);
    };

    const addEvent = (e) => {
        e.preventDefault()
        const token = jwt(JSON.parse(userToken))
        axios.post('http://127.0.0.1:8000/core/NewEvent/',
            { owner: token.user_id, name: name, type: type, place: location, address: address, message: message, event_domain: domain },
            {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(userToken)}`
                }
            }
        )
            .then((res) => {
                // setForm('زمان های آزاد')
                setEvent(res.data.id)
                console.log(res.data.id)
                setSteps(2)
            })
    }

    const handleAddTime = () => {
        const newTime = new Date()
        setTimes(v => [...v, newTime])
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
                    </div>
                </nav>
            </Row>
            <Row className="m-0" style={{ direction: 'rtl' }}>
                <Col lg={3} md={3} sm={3} xs={12} className="p-0">
                    <SidebarMenu step={steps} />
                </Col>
                <Col lg={9} md={9} sm={9} xs={12} className={styles.formContainer}>
                    <div className={styles.container}>
                        {steps === 1 ?
                            (<form>
                                <div className={styles.fields}>
                                    <div className={styles.field}>
                                        <label htmlFor="owner">صاحب رویداد</label>
                                        <input
                                            readOnly
                                            type="text"
                                            id="owner"
                                            aria-label="disabled input 2"
                                            value={`${userDetails.first_name} ${userDetails.last_name}`}
                                            onChange={(e) => setOwner(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="title">عنوان رویداد</label>
                                        <input id="title" type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>

                                <div className={styles.fields}>
                                    <div className={styles.field}>
                                        <label htmlFor="type">نوع رویداد</label>
                                        <select
                                            id="type"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                        >
                                            <option>یک به یک</option>
                                            <option>گروهی</option>
                                        </select>
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="link">لینک رویداد</label>
                                        <div className={styles.inputGroup}>
                                            <div className={styles.mutedText}>{userDetails.domain}/</div>
                                            <input
                                                type="text"
                                                id="link"
                                                required
                                                value={domain}
                                                onChange={(e) => setDomain(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.fields} style={{ justifyContent: 'flex-start' }}>
                                    <div className={styles.field}>
                                        <label htmlFor="location">محل برگزاری رویداد</label>
                                        <select
                                            id="location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        >
                                            <option>محل برگزاری را انتخاب کنید</option>
                                            <option>حضوری</option>
                                            <option>Google meet</option>
                                            <option>Skype</option>
                                            <option>Whatsapp</option>
                                        </select>
                                    </div>
                                    {/* {location === undefined || location === 'محل برگزاری را انتخاب کنید' ? (
                                        <></>) :
                                        ( */}
                                    <div className={styles.field}>
                                        <label htmlFor="title">
                                            {location === undefined && 'طریقه ارتباط'}
                                            {location === 'حضوری' && 'آدرس'}
                                            {location === 'Google meet' && 'لینک'}
                                            {location === 'Skype' && 'شماره تلفن'}
                                            {location === 'Whatsapp' && 'شماره تلفن'}
                                        </label>
                                        <input id="title" type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                    {/* )
                                    } */}
                                </div>

                                <div className={styles.fields}>
                                    <div className={styles.field} style={{ width: '100%' }}>
                                        <div className={`w-100`}>
                                            <label htmlFor="message">پیام مربوطه</label>
                                            <textarea
                                                id="message"
                                                // rows="2"
                                                placeholder="پیام مربوط به رویداد را بنویسید..."
                                                value={message}
                                                onChange={handleMessage}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.fields}>
                                    <div className={styles.submitBtn}>
                                        <button onClick={addEvent}>تائید و ادامه</button>
                                    </div>
                                </div>
                            </form>)
                            : <></>
                        }

                        {steps === 2 ? (
                            <FreeTime event_id={event} />
                            // <div className={styles.timeContainer}>
                            //     <Row className={styles.cardsContainer}>
                            //         {times.map((item, index) => <FreeTime key={index} />)}
                            //     </Row>
                            //     {/* <div className={styles.addBtn}>
                            //         <button onClick={handleAddTime}>
                            //             افزودن زمان
                            //             <FontAwesomeIcon icon={faAdd} />
                            //         </button>
                            //     </div> */}
                            // </div>
                        ) : <></>
                        }
                    </div>
                </Col>
            </Row>
        </>
    )
}