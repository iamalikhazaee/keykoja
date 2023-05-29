import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { hours } from "./utils";
import { minutes } from "./utils";
import { zones } from "./utils";
import styles from "./styles.module.scss";

export default function FreeTime() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('00:00');
  const [hour, setHour] = useState('00');
  const [min, setMin] = useState('00');
  const [zone, setZone] = useState('AM');
  const [showTimes, setShowTimes] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.dateContainer}>
        <label htmlFor="time">روز</label>
        <DatePicker
          id="time"
          value={date}
          onChange={(date) => {
            setDate(date);
          }}
          format={"YYYY/MM/DD"}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
        />
      </div>

      <div className={styles.timeContainer}>
        <label htmlFor="time">ساعت</label>
        <div className={styles.timePicker}>
          <input
            id="time"
            type="text"
            placeholder="تایم خود را انتخاب کنید"
            onClick={() => setShowTimes(!showTimes)}
            value={`${hour}:${min} ${zone}`}
            onChange={(e) => setTime(e.target.value)}
          />
          {showTimes && (
            <div className={styles.timeDropdown}>
              <div className={styles.hours}>
                {hours.map((item, index) => (
                  <span key={index} className={`${hour===item ? styles.active : null}`} onClick={() => setHour(item)}>{item}</span>
                ))}
              </div>
              <div className={styles.minutes}>
                {minutes.map((item, index) => (
                  <span key={index} className={`${min===item ? styles.active : null}`} onClick={() => setMin(item)}>{item}</span>
                ))}
              </div>
              <div className={styles.zones}>
                {zones.map((item, index) => (
                  <span className={`${zone===item ? styles.active : null}`} key={index} onClick={() => setZone(item)}>{item}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
