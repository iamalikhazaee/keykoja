import React, { useState } from "react";
import CustomizedDatePicker from "../DatePicker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import jwt from "jwt-decode";
import axios from "axios";
import TimePicker from "../TimePicker";
import { toPersianNum, toEnglishNum } from "../Calender/utils";

export default function FreeTime(props) {
  const [date, setDate] = useState();
  const [startHour, setStartHour] = useState(toPersianNum("00"));
  const [startMin, setStartMin] = useState(toPersianNum("00"));
  const [endHour, setEndHour] = useState(toPersianNum("00"));
  const [endMin, setEndMin] = useState(toPersianNum("00"));
  const [times, setTimes] = useState([]);
  // const [timeIsSet, setTimeIsSet] = useState(false);

  const handleAddTime = () => {
    if (!date) {
      alert("لطفا تاریخ مورد نظر خود را انتخاب نمایید.");
    } else {
      const newTime = {
        date: toPersianNum(date.date),
        start_hour: toPersianNum(`${startHour}:${startMin}`),
        end_hour: toPersianNum(`${endHour}:${endMin}`),
      };
      setTimes((v) => [...v, newTime]);
      setDate(undefined);
      setStartHour(toPersianNum("00"));
      setStartMin(toPersianNum("00"));
      setEndHour(toPersianNum("00"));
      setEndMin(toPersianNum("00"));
    }
  };

  const handleAddAll = () => {
    const token = jwt(JSON.parse(localStorage.getItem("token")));
    for (let i = 0; i < times.length; i++) {
      axios
        .post("http://127.0.0.1:8000/core/EventTime/", {
          profile: token.user_id,
          event: props.event_id,
          date: toEnglishNum(times[i].date),
          start_hour: toEnglishNum(times[i].start_hour),
          end_hour: toEnglishNum(times[i].end_hour),
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  };

  const deleteSelectedTime = (index) => {
    var copyArray = [...times];
    copyArray.splice(index, 1);
    setTimes(copyArray);
  };

  return (
    <>
      <Row className={styles.container}>
        <Col lg={6} md={6} className={styles.dateContainer}>
          <label htmlFor="time">روز</label>
          <CustomizedDatePicker setDate={setDate} date={date} />
        </Col>

        <Col lg={6} md={6} className={styles.timeSection}>
          <div className={styles.times}>
            <div className={styles.timeContainer}>
              <label htmlFor="time">ساعت شروع</label>
              <div className={styles.timePicker}>
                <TimePicker
                  setHour={setStartHour}
                  setMin={setStartMin}
                  hour={startHour}
                  min={startMin}
                />
              </div>
            </div>

            <div className={styles.timeContainer}>
              <label htmlFor="time">ساعت پایان</label>
              <div className={styles.timePicker}>
                <TimePicker
                  setHour={setEndHour}
                  setMin={setEndMin}
                  hour={endHour}
                  min={endMin}
                />
              </div>
            </div>
          </div>

          <div className={styles.addBtn}>
            <button onClick={handleAddTime}>
              افزودن
              <FontAwesomeIcon icon={faAdd} />
            </button>
          </div>
        </Col>
      </Row>

      <Row style={{ padding: "1rem" }}>
        <Col lg={12} className={styles.timeTableContainer}>
          <table className={styles.timeTable}>
            <thead>
              <tr>
                <th>تاریخ</th>
                <th>ساعت شروع</th>
                <th>ساعت پایان</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {times.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.start_hour}</td>
                  <td>{item.end_hour}</td>
                  <td>
                    <FontAwesomeIcon
                      id={styles.trashIcon}
                      icon={faTrash}
                      onClick={() => deleteSelectedTime(index)}
                    />
                  </td>
                  {/* <td>
                    <FontAwesomeIcon id={styles.editIcon} icon={faEdit} />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
      <Row className={styles.addAllBtn}>
        <button onClick={handleAddAll}>افزودن تایم ها</button>
      </Row>
    </>
  );
}
