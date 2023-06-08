import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import { JalaliDateTime } from "jalali-date-time";
import { toPersianNum } from "./utils";
import {
  ContainerStyled,
  CalenderHeader,
  WeekdaysHeader,
  DaysRow,
  DayStyled,
  AddReminderStyled,
  HeaderStyled,
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
    // console.log(now);
    if (today.month + change < 13) {
      const result = jalali.calendar(
        `${today.year}-${today.month + change < 10 ? "0" : ""}${
          today.month + change
        }`
      );
      // console.log(result);
      setDays(result);
    }
    const dates = [];
    for (let i = 0; i < props.dates.length; i++) {
      const d = jalali.toObject(new Date(props.dates[i]));
      dates.push(d);
    }
    setAvailableDates(dates);
  }, [change]);

  // console.log(availableDates);
  const isAvailable = availableDates[0]?.day ? true : false;

  // const renderDays = (d) => {
  //   for (let i = 0; i < availableDates.length; i++) {
  //     console.log(i)
  //     if (
  //       availableDates[i].day === d.day &&
  //       `${availableDates[i].year}-${availableDates[i].month < 10 ? "0" : ""}${
  //         availableDates[i].month
  //       }` === d.month
  //     ) {
  //       return (
  //         <div className="test3">
  //           <FontAwesomeIcon icon={faSun} style={{ color: "yellow" }} />
  //         </div>
  //       );
  //     }
  //     else {
  //       return toPersianNum(d.day)
  //     }
  //   }
  // };

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
                  {day.map((d, index) => (
                    <DayStyled
                      month={days.month}
                      today={d.month}
                      key={index}
                      d={d}
                      onClick={() => props.setDateAndTime(d)}
                    >
                      {/* {availableDates ? (
                        availableDates.map((item) =>
                          item.day === d.day &&
                          `${item.year}-${item.month < 10 ? "0" : ""}${item.month}` === d.month ? (
                            <div className="test3">
                              <FontAwesomeIcon
                                icon={faSun}
                                style={{ color: "yellow" }}
                              />
                            </div>
                          ) : (
                            toPersianNum(d.day)
                          )
                        )
                      ) : (
                        <></>
                      )} */}
                      {toPersianNum(d.day)}
                      {
                        isAvailable &&
                          availableDates.map((date, index) =>
                            date.day == d.day ? (
                              <div className="test3">
                                <FontAwesomeIcon
                                  icon={faSun}
                                  style={{ color: "yellow" }}
                                />
                              </div>
                            ) : (
                              // toPersianNum(d.day)
                              <></>
                            )
                            // console.log(date.day==d.day)
                          )
                        // ? (
                        // <div className="test3">
                        //   <FontAwesomeIcon
                        //     icon={faSun}
                        //     style={{ color: "yellow" }}
                        //   />
                        // </div>
                        //   console.log(availableDates[0]?.day === d.day)
                        // ) : (
                        //   toPersianNum(d.day)
                        // )
                      }
                    </DayStyled>
                  ))}
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
