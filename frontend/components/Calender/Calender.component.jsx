import React, { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { JalaliDateTime } from "jalali-date-time";
import { toPersianNum } from "./utils";
import {
  ContainerStyled,
  CalenderHeader,
  WeekdaysHeader,
  DaysRow,
  DayStyled,
  AvailableDate,
} from "./Calender.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
const Calender = (props) => {
  const [days, setDays] = useState("");
  const [now, setNow] = useState("");
  const [change, setChange] = useState(0);
  const [availableDates, setAvailableDates] = useState([]);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  const jalali = JalaliDateTime();
  useEffect(() => {
    setInitialRenderComplete(true);
    const today = jalali.toObject(new Date());
    setNow(today);
    if (today.month + change < 13) {
      const result = jalali.calendar(
        `${today.year}-${today.month + change < 10 ? "0" : ""}${
          today.month + change
        }`
      );
      setDays(result);
    }
    const dates = [];
    for (let i = 0; i < props.dates.length; i++) {
      const d = jalali.toObject(new Date(props.dates[i]));
      dates.push(`${d.year}-${d.month < 10 ? "0" : ""}${d.month}-${d.day}`);
    }
    setAvailableDates(dates);
  }, [change]);

  if (initialRenderComplete) {
    return (
      <Animated
        className="position__absolute"
        animationIn="fadeInUpBig"
        animationOut="fadeOutDownBig"
        animationInDuration={500}
        animationOutDuration={1500}
        isVisible={true}
      >
        <ContainerStyled>
          <CalenderHeader>
            <div onClick={() => setChange(change - 1)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="font__h2__bold" style={{ color: "#000" }}>
              {days.title}
            </div>
            <div onClick={() => setChange(change + 1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </CalenderHeader>
          <WeekdaysHeader>
            <span
              className="font__h2"
              style={{
                color: "#828CA0",
                width: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              ش
            </span>
            <span
              className="font__h2"
              style={{
                color: "#828CA0",
                width: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              ی
            </span>
            <span
              className="font__h2"
              style={{
                color: "#828CA0",
                width: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              د
            </span>
            <span
              className="font__h2"
              style={{
                color: "#828CA0",
                width: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              س
            </span>
            <span
              className="font__h2"
              style={{
                color: "#828CA0",
                width: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              چ
            </span>
            <span
              className="font__h2"
              style={{
                color: "#828CA0",
                width: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              پ
            </span>
            <span
              className="font__h2"
              style={{
                color: "#828CA0",
                width: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              ج
            </span>
          </WeekdaysHeader>
          <div className="test2" style={{ width: "100%" }}>
            {days &&
              days.weeks.map((day, i) => (
                <DaysRow key={i}>
                  {day.map((d, index) =>
                    availableDates.includes(d.date) ? (
                      <AvailableDate onClick={() => props.setDateAndTime(d)}>
                        {toPersianNum(d.day)}
                      </AvailableDate>
                    ) : (
                      <DayStyled
                        month={days.month}
                        today={d.month}
                        key={index}
                        onClick={() => props.setDateAndTime(d)}
                      >
                        {toPersianNum(d.day)}
                      </DayStyled>
                    )
                  )}
                </DaysRow>
              ))}
          </div>
        </ContainerStyled>
      </Animated>
    );
  } else {
    return null;
  }
};

export default Calender;
