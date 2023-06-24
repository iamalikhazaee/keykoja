import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import Cookies from 'js-cookie'
import styles from '@/styles/guests.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

export default function guests() {
    const router = useRouter()
    const [events, setEvents] = useState([])
    const [guests, setGuests] = useState([])

    useEffect(() => {
        const token = JSON.parse(Cookies.get('token'));
        axios.get('http://127.0.0.1:8000/core/NewEvent/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setEvents(res.data)
            axios.get('http://localhost:8000/core/GuestsList/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                setGuests(res.data)
            })
        })
    }, [])

    const returnGuests = (id) => {
        for (let i = 0; i < guests.length; i++) {
            if (guests[i].event === id) {
                return (<h1>ok</h1>)
            }
        }
    }

    return (
        <div>
            <Navbar />
            <Container className={styles.container}>
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
                                    </Row>
                                    {guests.map((guest, index) => (
                                        guest.event === event.id ?
                                            (
                                                <Row key={index} className={styles.guestRow}>
                                                    <Col className={styles.guestName}>{guest.name}</Col>
                                                    <Col className={styles.guestEmail}>{guest.email}</Col>
                                                </Row>
                                            )
                                            : (<div className={styles.noGuestMsg}>مهمانی برای این رویداد ثبت نشده است.</div>)
                                    ))}
                        </div>
                    </Row>
                ))}
            </Container>
        </div>
    )
}
