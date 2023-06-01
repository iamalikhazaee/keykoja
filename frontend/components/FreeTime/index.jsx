import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import jwt from "jwt-decode";
import axios from "axios";

function CustomInput({ onFocus, className, value, onChange }) {
  return (
    <input
      className={className}
      onFocus={onFocus}
      value={value}
      onChange={onChange}
    />
  );
}

export default function FreeTime(props) {
  const [date, setDate] = useState(new Date());
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [times, setTimes] = useState([]);

  const handleAddTime = () => {
    const d = new Date(date.unix * 1000).toLocaleDateString("en");
    console.log(typeof d);
    let options = { hour: "numeric", minute: "numeric", seconds: 0 };
    const start_hour = new Date(start.unix * 1000).toLocaleTimeString(
      "fa-IR-u-nu-latn",
      options
    );
    // console.log(start_hour);
    const end_hour = new Date(end.unix * 1000).toLocaleTimeString(
      "fa-IR-u-nu-latn",
      options
    );
    console.log(typeof end_hour);

    const newTime = { date: d, start_hour: start_hour, end_hour: end_hour };
    setTimes((v) => [...v, newTime]);
  };

  const handleAddAll = () => {
    const token = jwt(JSON.parse(localStorage.getItem("token")));
    for (let i = 0; i < times.length; i++) {
      axios.post("http://127.0.0.1:8000/core/EventTime/", {
        profile: token.user_id,
        event: props.event_id,
        date: times[i].date,
        start_hour: times[i].start_hour,
        end_hour: times[i].end_hour
      }).then((res) => {
        console.log(res.data)
      })
    }
  };

  console.log(times);

  return (
    <>
      <Row>
        <Col lg={5}>
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
              <label htmlFor="time">ساعت شروع</label>
              <div className={styles.timePicker}>
                <DatePicker
                  render={
                    <CustomInput
                      className={styles.costumInput}
                      value={start}
                      onChange={(t) => setStart(t.target.value)}
                    />
                  }
                  className={styles.time}
                  disableDayPicker
                  format="HH:mm"
                  plugins={[<TimePicker hideSeconds />]}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  onChange={(t) => setStart(t)}
                />
              </div>
            </div>

            <div className={styles.timeContainer}>
              <label htmlFor="time">ساعت پایان</label>
              <div className={styles.timePicker}>
                <DatePicker
                  render={
                    <CustomInput
                      className={styles.costumInput}
                      value={end}
                      onChange={(t) => setEnd(t.target.value)}
                    />
                  }
                  className={styles.time}
                  disableDayPicker
                  format="HH:mm"
                  plugins={[<TimePicker hideSeconds />]}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  onChange={(t) => setEnd(t)}
                />
              </div>
            </div>

            <div className={styles.addBtn}>
              <button onClick={handleAddTime}>
                افزودن
                <FontAwesomeIcon icon={faAdd} />
              </button>
            </div>
          </div>
        </Col>

        <Col lg={7} className={styles.timeTableContainer}>
          <table className={styles.timeTable}>
            <tr>
              <th>تاریخ</th>
              <th>ساعت شروع</th>
              <th>ساعت پایان</th>
            </tr>
            {times.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.start_hour}</td>
                <td>{item.end_hour}</td>
              </tr>
            ))}
          </table>
        </Col>
      </Row>
      <Row className={styles.addAllBtn}>
        <button onClick={handleAddAll}>افزودن تایم ها</button>
      </Row>
    </>
  );
}

{
  /* <input
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
          )} */
}
