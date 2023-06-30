import Navbar from '@/components/Navbar'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/profileSettings.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
// import Cookies from 'js-cookie'
// import jwt from 'jwt-decode'

export default function ProfileSettings() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [link, setLink] = useState('')

    useEffect(() => {
        // const token = jwt(JSON.parse(Cookies.get('token')))
        const user = JSON.parse(localStorage.getItem('userDetails'))
        setFirstName(user.first_name)
        setLastName(user.last_name)
        setEmail(user.email)
        setLink(user.domain)
    }, [])


    return (
        <div className={styles.container}>
            <Navbar />
            <nav className={styles.secondNavbar}>
                <div className={styles.navbarContainer}>
                    <div className={styles.backBtn}>
                        <a href='http://localhost:3000/dashboard'>
                            <FontAwesomeIcon icon={faChevronRight} />
                            بازگشت به داشبورد
                        </a>
                    </div>
                </div>
            </nav>
            <Container className={styles.settingsForm}>
                <Row className={styles.inputRows}>
                    <Col lg={6} className={styles.profileImg}>
                        <FontAwesomeIcon icon={faUser} />
                        <button>بارگذاری آواتار</button>
                    </Col>
                    <Col lg={6} className={styles.field}>
                        <label htmlFor='welcome'>درباره من / پیام خوش آمدگویی</label>
                        <textarea
                            id="welcome"
                        // rows="2"
                        // placeholder="پیام مربوط به رویداد را بنویسید..."
                        // value={message}
                        // onChange={handleMessage}
                        ></textarea>
                    </Col>
                </Row>
                <Row className={styles.inputRows}>
                    <Col lg={6} className={styles.field}>
                        <label htmlFor='name'>نام</label>
                        <input id="name" type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </Col>
                    <Col lg={6} className={styles.field}>
                        <label htmlFor='lastName'>نام خانوادگی</label>
                        <input id="lastName" type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </Col>
                </Row>
                <Row className={styles.inputRows}>
                    <Col lg={6} className={styles.field}>
                        <label htmlFor='email'>ایمیل</label>
                        <input id="email" type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                    <Col className={styles.field}>
                        <label htmlFor="link">لینک</label>
                        <div className={styles.inputGroup}>
                            <div className={styles.mutedText}>keykoja.ir/</div>
                            <input
                                type="text"
                                id="link"
                                required
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className={styles.saveBtn}>
                    <button>ذخیره</button>
                </Row>
            </Container>
        </div>
    )
}
