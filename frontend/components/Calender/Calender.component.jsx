import React, { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { JalaliDateTime } from "jalali-date-time";
import { toPersianNum } from "../../utils/utils";
import {
  ContainerStyled,
  CalenderHeader,
  WeekdaysHeader,
  DaysRow,
  DayStyled,
  AvailableDate,
  DisableDate,
} from "./Calender.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const Calender = (props) => {
  const [days, setDays] = useState("");
  const [now, setNow] = useState("");
  const [change, setChange] = useState(0);
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
            <div
              onClick={() => setChange(change - 1)}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="font__h2__bold" style={{ color: "#000" }}>
              {days.title}
            </div>
            <div
              onClick={() => setChange(change + 1)}
              style={{ cursor: "pointer", padding: "0 10px" }}
            >
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
                    now.year === Number(d.date.split("-")[0]) &&
                    now.month === Number(d.date.split("-")[1]) ? (
                      now.day <= d.day ? (
                        props.dates.includes(d.date) ? (
                          <AvailableDate
                            key={index}
                            onClick={() => props.setDateAndTime(d)}
                          >
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
                      ) : (
                        <DisableDate key={index}>
                          {toPersianNum(d.day)}
                        </DisableDate>
                      )
                    ) : now.month <= Number(d.date.split("-")[1]) ? (
                      props.dates.includes(d.date) ? (
                        <AvailableDate
                          key={index}
                          onClick={() => props.setDateAndTime(d)}
                        >
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
                    ) : (
                      now.month > Number(d.date.split("-")[1]) && (
                        <DisableDate key={index}>
                          {toPersianNum(d.day)}
                        </DisableDate>
                      )
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
