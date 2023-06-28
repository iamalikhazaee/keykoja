import { useState, useEffect } from 'react';
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Calender from '@/components/Calender/Calender.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { JalaliDateTime } from "jalali-date-time";
import styles from '@/styles/guestPage.module.scss'
import { toPersianNum } from '@/components/Calender/utils';

export default function eventName() {

    const [selectedDate, setSelectedDate] = useState()
    const [selectedTime, setSelectedTime] = useState()
    const [eventDetails, setEventDetails] = useState()
    const [eventTimes, setEventTimes] = useState()
    const [guestName, setGuestName] = useState('')
    const [guestEmail, setGuestEmail] = useState('')
    const [dates, setDates] = useState([])
    const [time, setTime] = useState()
    const jalali = JalaliDateTime();

    // console.log(selectedDate)

    useEffect(() => {
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

    const setDateAndTime = (d) => {
        setSelectedTime(null)
        const t = []
        setSelectedDate(d)
        for (let i = 0; i < eventTimes.length; i++) {
            if (eventTimes[i].date === d.date) {
                // console.log(eventTimes[i])
                if (eventTimes[i].is_enable) {
                    t.push(eventTimes[i])
                }
            }
        }
        setTime(t)
        // console.log(t)
    }

    const addGuest = () => {
        // const d = [];
        // for (let i = 0; i < dates.length; i++) {
        //     let da = jalali.toObject(new Date(dates[i]))
        //     d.push(`${da.year}-${da.month < 10 ? "0" : ""}${da.month}-${da.day}`)
        // }
        if (selectedDate && !(dates.includes(selectedDate.date)) || !selectedDate) {
            alert('لطفا یک تاریخ معتبر انتخاب کنید.')
        }
        else if (selectedTime == null) {
            alert('لطفا یک ساعت مناسب برای خود انتخاب کنید.')
        }
        else if (guestName === '' || guestEmail === '') {
            alert('لطفا مشخصات خود را بصورت کامل وارد کنید.')
        }
        else {
            axios.all([
                axios.post('http://localhost:8000/core/GuestsReg/', {
                    name: guestName, email: guestEmail, approve: false, event: eventDetails.id, time: selectedTime.id
                }),
                axios.patch(`http://localhost:8000/core/EventTime/${selectedTime.id}/`, { is_enable: false })
            ]).then(axios.spread((res1, res2) => {
                console.log(res1)
                console.log(res2)
            }))
        }
    }

    return (
        <>
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
                        </Col>
                        <Col lg={5} md={9} sm={12}>
                            <Calender setDate={setSelectedDate} dates={dates} setDateAndTime={setDateAndTime} />
                        </Col>

                        <Col lg={3} md={12} sm={12} className={styles.timesContainer}>
                            <div className={styles.header}>
                                <span>تایم های قابل انتخاب</span>
                            </div>
                            <div className={styles.times}>
                                {time && (
                                    time.length == 0 ? (
                                        <div className={styles.emptyMsg}>
                                            <span>متاسفانه زمان خالی برای این تاریخ وجود ندارد.</span>
                                        </div>
                                    ) : (
                                        time.map((item, index) => (
                                            <button key={index} className={styles.time} onClick={() => setSelectedTime(item)}>
                                                {toPersianNum(item.start_hour)}
                                            </button>
                                        ))
                                    )
                                )
                                }
                            </div>
                        </Col>
                    </>
                )}
            </Row>

            <Row className={styles.guestInfo}>
                <Col lg={12} className={styles.guestInfoContainer}>
                    <form>
                        <div className={styles.field}>
                            <label htmlFor='name'>نام و نام خانوادگی</label>
                            <input id='name' type='text' value={guestName} onChange={(e) => setGuestName(e.target.value)} />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor='email'>ایمیل</label>
                            <input id='email' type='email' value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} />
                        </div>
                    </form>
                    <Button className={styles.submitBtn} onClick={addGuest}>
                        ثبت تایم
                    </Button>
                </Col>
            </Row>
        </>
    )
}
