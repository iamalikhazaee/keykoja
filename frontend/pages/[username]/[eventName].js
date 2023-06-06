import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Calender from '@/components/Calender/Calender.component';
import styles from '@/styles/guestPage.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function eventName() {

    const [selectedDate, setSelectedDate] = useState()

    console.log(selectedDate)

    return (
        <Row className={styles.container}>
            <Col lg={3} md={3} sm={12} className={styles.eventDetails}>
                <div className={styles.title}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>کی کجا</span>
                </div>
                <span className={styles.eventName}>عنوان رویداد</span>
                <div className={styles.eventTime}>
                    <FontAwesomeIcon icon={faClock} />
                    <span>مدت زمان</span>
                </div>
                <div className={styles.eventPlace}>
                    <FontAwesomeIcon icon={faLocationPin} />
                    <span>محل برگزاری</span>
                </div>
                {/* <div>
                    <span>یادداشت</span>
                </div> */}
            </Col>
            <Col lg={5} md={9} sm={12}>
                <Calender setDate={setSelectedDate} />
            </Col>
            <Col lg={3} md={12} sm={12} className={styles.timesContainer}>
                <div className={styles.header}>
                    <span>تایم های قابل انتخاب</span>
                </div>
                <div className={styles.times}>
                    <div className={styles.time}>
                        <span>۱۱:۳۰</span>
                    </div>
                    <div className={styles.time}>
                        <span>۱۱:۳۰</span>
                    </div>
                    <div className={styles.time}>
                        <span>۱۱:۳۰</span>
                    </div>
                    <div className={styles.time}>
                        <span>۱۱:۳۰</span>
                    </div>
                    <div className={styles.time}>
                        <span>۱۱:۳۰</span>
                    </div>
                    <div className={styles.time}>
                        <span>۱۱:۳۰</span>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
