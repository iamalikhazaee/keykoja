import React, { useState } from "react";
import { hours, minutes } from "./utils";
import { toPersianNum } from "../Calender/utils";
import styles from "./styles.module.scss"

export default function TimePicker(props) {
    const [showTimes, setShowTimes] = useState(false)
    const [hour, setHour] = useState(toPersianNum("00"))
    const [min, setMin] = useState(toPersianNum("00"))
    // const [time, setTime] = useState(toPersianNum("00:00"))

    // console.log(toEnglishNum(hour))
    // console.log(toEnglishNum(min))

  return (
    <div className={styles.time}>
      <input
        id="time"
        type="text"
        autoComplete="off"
        placeholder="تایم خود را انتخاب کنید"
        onClick={() => {
          setShowTimes(!showTimes);
        }}
        value={`${props.hour}:${props.min}`}
        // onChange={() => props.setTime(`${hour}:${min}`)}
      />
      {showTimes && (
        <div className={styles.timeDropdown}>
          <div className={styles.hours}>
            {hours.map((item, index) => (
              <span
                key={index}
                className={`${props.hour === toPersianNum(item) ? styles.active : null}`}
                onClick={() => props.setHour(toPersianNum(item))}
              >
                {toPersianNum(item)}
              </span>
            ))}
          </div>
          <div className={styles.minutes}>
            {minutes.map((item, index) => (
              <span
                key={index}
                className={`${props.min === toPersianNum(item) ? styles.active : null}`}
                onClick={() => props.setMin(toPersianNum(item))}
              >
                {toPersianNum(item)}
              </span>
            ))}
          </div>
          {/* <div className={styles.zones}>
                        {zones.map((item, index) => (
                          <span
                            className={`${
                              zone === item ? styles.active : null
                            }`}
                            key={index}
                            onClick={() => setZone(item)}
                          >
                            {item}
                          </span>
                        ))}
                      </div> */}
        </div>
      )}
    </div>
  );
}
