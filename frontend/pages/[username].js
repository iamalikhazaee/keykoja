import Cookies from 'js-cookie'
import React from 'react'
// import jwt from 'jwt-decode'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import styles from '@/styles/userDomain.module.scss'

export default function EventsAndGuests() {
    const router = useRouter()
    const keyword = router.query.username
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get(`https://keykoja.iran.liara.run/${keyword}/`).then((res) => {
            setEvents(res.data)
        })
    })

    const openGuestPage = (event_domain) => {
        window.open(`https://keykojaa.ir/${keyword}/${event_domain}`, "_blank", "noreferrer");
    }

    return (
        <Container className={styles.container}>
            <div className={styles.content}>
                <Row className={styles.welcome}>
                    <Col col={12} className={styles.welcomeText}>
                        به صفحه من خوش آمدید. اینجا میتوانیم به آسانی یک جلسه هماهنگ کنیم.
                    </Col>
                </Row>
                <Row className={styles.events}>
                    {events.map((item, index) => (
                        <Col lg={5} md={5} key={index} className={styles.eventsContainer} onClick={() => openGuestPage(item.event_domain)}>
                            <FontAwesomeIcon icon={faTag} className={`${styles.icon} text-slate-400`} />
                            <div className={styles.eventName}>
                                <span>{item.name}</span>
                            </div>
                            <div className={styles.eventDetail}>
                                <p>{item.type}</p>
                                <p>{item.place}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    )
}
