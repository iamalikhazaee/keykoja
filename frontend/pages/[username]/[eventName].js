import { useState, useEffect } from 'react';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Calender from '@/components/Calender/Calender.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { JalaliDateTime } from "jalali-date-time";
import styles from '@/styles/guestPage.module.scss'

export default function eventName() {

    const [selectedDate, setSelectedDate] = useState()
    const [eventDetails, setEventDetails] = useState()
    const [eventTimes, setEventTimes] = useState()
    const [dates, setDates] = useState([])
    const [time, setTime] = useState()
    const jalali = JalaliDateTime();

    console.log(selectedDate)

    useEffect(() => {
        // console.log(window.location.pathname)
        axios.all([
            axios.get(`http://127.0.0.1:8000${window.location.pathname}/`),
            axios.get(`http://127.0.0.1:8000${window.location.pathname}/time`)
        ])
            .then(axios.spread((res1, res2) => {
                setEventDetails(res1.data[0])
                setEventTimes(res2.data)
                // console.log(res1.data[0])
                // console.log(res2.data)
                const d = []
                for (let i = 0; i < res2.data.length; i++) {
                    // setDates([...dates, res2.data[i].date])
                    d.push(res2.data[i].date)
                }
                setDates(d)
                // console.log(d)
            }))
    }, [])

    // console.log(dates)
    if (eventTimes && selectedDate) {
        for (let i = 0; i < eventTimes.length; i++) {
            let d = jalali.toObject(new Date(eventTimes[i].date))
            if (d.day === selectedDate.day && `${d.year}-${d.month < 10 ? "0" : ""}${d.month}` === selectedDate.month){
                console.log(eventTimes[i].start_hour)
            }
            // console.log(jalali.toObject(new Date(eventTimes[i].date)))
        }
    }


    return (
        <Row className={styles.container}>
            {eventDetails && eventTimes && (
                <>
                    <Col lg={3} md={3} sm={12} className={styles.eventDetails}>
                        <div className={styles.title}>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            <span>کی کجا</span>
                        </div>
                        <span className={styles.eventName}>{eventDetails.name}</span>
                        <div className={styles.eventTime}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>مدت زمان: {eventDetails.time_unit}</span>
                        </div>
                        <div className={styles.eventPlace}>
                            <FontAwesomeIcon icon={faLocationPin} />
                            <span>محل برگزاری: {eventDetails.address}</span>
                        </div>
                        {/* <div>
                    <span>یادداشت</span>
                </div> */}
                    </Col>
                    <Col lg={5} md={9} sm={12}>
                        <Calender setDate={setSelectedDate} dates={dates} />
                    </Col>

                    <Col lg={3} md={12} sm={12} className={styles.timesContainer}>
                        <div className={styles.header}>
                            <span>تایم های قابل انتخاب</span>
                        </div>
                        <div className={styles.times}>
                            {eventTimes.map((item, index) => (
                                <div key={index} className={styles.time}>
                                    <span>{item.start_hour}</span>
                                </div>
                            ))}
                        </div>
                    </Col>
                </>
            )}
        </Row>
    )
}
