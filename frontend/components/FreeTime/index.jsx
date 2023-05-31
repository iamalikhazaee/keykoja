import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css"
import InputIcon from "react-multi-date-picker/components/input_icon";
import { hours } from "./utils";
import { minutes } from "./utils";
import { zones } from "./utils";
import { Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import moment from "moment/moment";

function CustomInput({ onFocus, className, value, onChange }) {
  return <input className={className} onFocus={onFocus} value={value} onChange={onChange} />;
}

export default function FreeTime(props) {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("00");
  const [min, setMin] = useState("00");
  const [zone, setZone] = useState("AM");
  const [time, setTime] = useState();
  const [showTimes, setShowTimes] = useState(false);

  // console.log(new Date((date.unix * 1000)).toLocaleDateString('en'))
  const t = moment.utc().hour(hour).minute(min);
  // console.log(t)

  return (
    // <Col lg={3}>
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
          <DatePicker
            render={<CustomInput className={styles.costumInput} value={time} onChange={(t) => setTime(t)} />}
            className={styles.time}
            disableDayPicker
            format="HH:mm"
            plugins={[<TimePicker hideSeconds />]}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
          {/* <input
            id="time"
            type="text"
            placeholder="تایم خود را انتخاب کنید"
            onClick={() => setShowTimes(!showTimes)}
            value={`${hour}:${min} ${zone}`}
            onChange={(e) => setTime(`${hour}:${min} ${zone}`)}
          />
          {showTimes && (
            <div className={styles.timeDropdown}>
              <div className={styles.hours}>
                {hours.map((item, index) => (
                  <span
                    key={index}
                    className={`${hour === item ? styles.active : null}`}
                    onClick={() => setHour(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className={styles.minutes}>
                {minutes.map((item, index) => (
                  <span
                    key={index}
                    className={`${min === item ? styles.active : null}`}
                    onClick={() => setMin(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className={styles.zones}>
                {zones.map((item, index) => (
                  <span
                    className={`${zone === item ? styles.active : null}`}
                    key={index}
                    onClick={() => setZone(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </div>
      <div className={styles.addBtn}>
        <button>
          افزودن
          <FontAwesomeIcon icon={faAdd} />
        </button>
      </div>
    </div>
    // </Col>
  );
}
