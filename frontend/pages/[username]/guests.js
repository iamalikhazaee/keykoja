import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import Cookies from 'js-cookie'
import styles from '@/styles/guests.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function guests() {
    const router = useRouter()
    const [events, setEvents] = useState([])
    const [guests, setGuests] = useState([])

    useEffect(() => {
        const token = JSON.parse(Cookies.get('token'));
        axios.get('https://keykoja.iran.liara.run/core/NewEvent/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setEvents(res.data)
            axios.get('https://keykoja.iran.liara.run/core/GuestsList/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                setGuests(res.data)
                console.log(res.data)
            })
        })
    }, [])

    const handleBackBtn = () => {
        router.push({
            pathname: '/dashboard'
        })
    }

    return (
        <div>
            <Navbar />
            <Container className={styles.container}>
                <Row>
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
                <h6>در این بخش شما میتوانید رویدادهای خود را به همراه مهمانانی که جلسه رزرو کرده اند مشاهده نمایید.</h6>
                {events.map((event, i) => (
                    <Row key={i} className={styles.eventContainer}>
                        <div className={styles.header}>
                            <FontAwesomeIcon icon={faTag} className={styles.icon} />
                            <span>{event.name}</span>
                        </div>
                        <div className={styles.guests}>
                            <p>مهمانان این رویداد :</p>
                            <Row className={styles.guestsHeader}>
                                <Col className={styles.colItem}>نام و نام خانوادگی</Col>
                                <Col className={styles.colItem}>ایمیل</Col>
                                <Col className={styles.colItem}>تاریخ</Col>
                                <Col className={styles.colItem}>ساعت شروع</Col>
                                <Col className={styles.colItem}>ساعت پایان</Col>
                            </Row>
                            {guests.map((guest, index) => (
                                guest.event.id === event.id ?
                                    (
                                        <Row key={index} className={styles.guestRow}>
                                            <Col className={styles.guestRowItem}>{guest.name}</Col>
                                            <Col className={styles.guestRowItem}>{guest.email}</Col>
                                            <Col className={styles.guestRowItem}>{guest.time.date}</Col>
                                            <Col className={styles.guestRowItem}>{guest.time.start_hour}</Col>
                                            <Col className={styles.guestRowItem}>{guest.time.end_hour}</Col>
                                        </Row>
                                    )
                                    : (<div key={index} className={styles.noGuestMsg}></div>)
                            ))}
                        </div>
                    </Row>
                ))}
            </Container>
        </div>
    )
}
