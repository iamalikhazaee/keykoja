import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import { Container, Row } from 'react-bootstrap'
import Cookies from 'js-cookie'
import styles from '@/styles/guests.module.scss'

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
        for(let i=0; i<guests.length; i++) {
            if(guests[i].event === id) {
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
                            <div>
                                <span>{event.name}</span>
                            </div>
                        </div>
                        <div className={styles.guests}>
                            <h6>مهمانان این رویداد :</h6>
                            {guests.map((guest, index) => (
                                guest.event === event.id ? 
                                (
                                    <div key={index}>
                                        <span>{guest.name}</span>
                                        <span>{guest.email}</span>
                                    </div>
                                ) 
                                : (<div key={index}></div>)
                            ))}
                        </div>
                    </Row>
                ))}
            </Container>
        </div>
    )
}
