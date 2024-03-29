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
import Label from "@/components/common/Label";
import Input from "@/components/common/authInput";
import SelectBox from "@/components/common/SelectBox";
import Textarea from "@/components/common/Textarea";
import FilledBtn from "@/components/common/FilledBtn";


export default function newEvent() {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState({})
    const [theme, setTheme] = useState()
    const [userToken, setUserToken] = useState()
    const [event, setEvent] = useState()
    const [name, setName] = useState("");
    const [type, setType] = useState();
    const [location, setLocation] = useState()
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("");
    const [domain, setDomain] = useState("");
    const [steps, setSteps] = useState(1);


    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem("userDetails")))
        setTheme(JSON.parse(localStorage.getItem("userDetails")).theme)
        setUserToken(localStorage.getItem("token"))
    }, [])

    const handleBackBtn = () => {
        router.push({
            pathname: '/dashboard'
        })
    }

    const addEvent = (e) => {
        e.preventDefault()
        const token = jwt(JSON.parse(userToken))
        axios.post('https://keykoja.iran.liara.run/core/NewEvent/',
            { owner: token.user_id, name: name, type: type, place: location, address: address, massage: message, event_domain: domain },
            {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(userToken)}`
                }
            }
        )
            .then((res) => {
                setEvent(res.data.id)
                console.log(res.data)
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
                        <div>
                            <FilledBtn
                                bg={theme ? theme.pallete_2 : ''}
                                onClick={handleBackBtn}>
                                <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
                                بازگشت به داشبورد
                            </FilledBtn>
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
                                        <Label value='صاحب رویداد' />
                                        <Input
                                            type="text"
                                            value={`${userDetails.first_name} ${userDetails.last_name}`}
                                            onChange={(e) => <></>}
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <Label value='عنوان رویداد' />
                                        <Input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='عنوان'
                                        />
                                    </div>
                                </div>

                                <div className={styles.fields}>
                                    <div className={styles.field}>
                                        <Label value='نوع رویداد' />
                                        <SelectBox
                                            options={["یک به یک", "گروهی"]}
                                            value={type}
                                            setValue={setType}
                                            placeholder="نوع رویداد را انتخاب کنید"
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <Label value='لینک رویداد' />
                                        <div className={styles.inputGroup}>
                                            <div className={styles.mutedText}>{userDetails.domain}/</div>
                                            <Input
                                                type="text"
                                                value={domain}
                                                onChange={(e) => setDomain(e.target.value)}
                                                placeholder='لینک'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.fields} style={{ justifyContent: 'flex-start' }}>
                                    <div className={styles.field}>
                                        <Label value='محل برگزاری رویداد' />
                                        <SelectBox
                                            options={["حضوری", "گوگل میت", "اسکایپ", "واتساپ"]}
                                            value={location}
                                            setValue={setLocation}
                                            placeholder="محل برگزاری را انتخاب کنید"
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <Label value={`${location === undefined ? 'طریقه ارتباط' :
                                            (location === 'حضوری' ? 'آدرس' :
                                                (location === 'گوگل میت' ? 'لینک' :
                                                    (location === 'اسکایپ' ? 'شماره تلفن' :
                                                        (location === 'واتساپ' && 'شماره تلفن'))))}`} />
                                        <Input
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder='آدرس'
                                        />
                                    </div>
                                    {/* )
                                    } */}
                                </div>

                                <div className={styles.fields}>
                                    <div className={styles.field} style={{ width: '100%' }}>
                                        <div className={`w-100`}>
                                            <Label value='پیام مربوطه' />
                                            <Textarea
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="پیام مربوط به رویداد را اینجا بنویسید..."
                                            ></Textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.fields}>
                                    <div className={styles.submitBtn}>
                                        <FilledBtn bg={theme ? theme.pallete_2 : ''} onClick={addEvent}>تائید و ادامه</FilledBtn>
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