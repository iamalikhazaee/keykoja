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
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  const jalali = JalaliDateTime();
  useEffect(() => {
    setInitialRenderComplete(true);
    const today = jalali.toObject(new Date());
    setNow(today);
    console.log(now);
    if (today.month + change < 13) {
      const result = jalali.calendar(
        `${today.year}-${today.month + change < 10 ? "0" : ""}${
          today.month + change
        }`
      );
      console.log(result);
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
          {/* <HeaderStyled>
            <div className="font__h1__bold " style={{ color: "#fff" }}>
              چه زمانی؟
            </div>
            <Link to="/new">
            <div onClick={() => setActiveCalender(false)}>
              <img src={CloseIcon} alt="close" className="margin__right__8px" />
            </div>
            </Link>
          </HeaderStyled> */}
          {/* <DatesContainer>
            <DatesStyled
              background="rgba(252, 212, 64, 0.05)"
              hasBorder={hasBorder.today}
              color="#FCD440"
              onClick={() =>
                setHasBorder({ ...hasBorder, today: !hasBorder.today })
              }
            >
              <img src={CloseIcon} alt="date icon" />
              <DatesText className="margin__right__8px" color="#FCD440">
                امروز
              </DatesText>
            </DatesStyled>
            <DatesStyled
              background="rgba(174, 185, 209, 0.05)"
              hasBorder={hasBorder.tonight}
              color="#AEB9D1"
              onClick={() =>
                setHasBorder({ ...hasBorder, tonight: !hasBorder.tonight })
              }
            >
              <img src={CloseIcon} alt="date icon" />
              <DatesText className="margin__right__8px" color="#AEB9D1">
                امشب
              </DatesText>
            </DatesStyled>
          </DatesContainer>
          <DatesContainer>
            <DatesStyled
              background="rgba(253, 50, 110, 0.05)"
              hasBorder={hasBorder.tomorrow}
              color="#FD326E"
              onClick={() =>
                setHasBorder({ ...hasBorder, tomorrow: !hasBorder.tomorrow })
              }
            >
              <img src={CloseIcon} alt="date icon" />
              <DatesText className="margin__right__8px" color="#FD326E">
                فردا
              </DatesText>
            </DatesStyled>
            <DatesStyled
              background="rgba(253, 50, 110, 0.05)"
              hasBorder={hasBorder.dat}
              color="#FD326E"
              onClick={() => setHasBorder({ ...hasBorder, dat: !hasBorder.dat })}
            >
              <img src={CloseIcon} alt="date icon" />
              <DatesText className="margin__right__8px" color="#FD326E">
                پس‌فردا
              </DatesText>
            </DatesStyled>
          </DatesContainer> */}
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
              days.weeks.map((day, index) => (
                <DaysRow key={index}>
                  {day.map((d, index) => (
                    <DayStyled
                      month={days.month}
                      today={d.month}
                      key={index}
                      onClick={() => props.setDate(d)}
                    >
                      {now.day === d.day &&
                      `${now.year}-${now.month < 10 ? "0" : ""}${now.month}` ===
                        d.month ? (
                        <div className="test3">
                          {/* <img src={CloseIcon} alt="date icon" /> */}
                          <FontAwesomeIcon
                            icon={faSun}
                            style={{ color: "yellow" }}
                          />
                        </div>
                      ) : (
                        toPersianNum(d.day)
                      )}
                    </DayStyled>
                  ))}
                </DaysRow>
              ))}
          </div>
          {/* <div className="test4">
            <DatesStyled
              background="rgba(58, 165, 154, 0.05)"
              hasBorder={hasBorder.anytime}
              color="#3AA59A"
              onClick={() =>
                setHasBorder({ ...hasBorder, anytime: !hasBorder.anytime })
              }
            >
              <img src={CloseIcon} alt="date icon" />
              <DatesText className="margin__right__8px" color="#3AA59A">
                هر وقت
              </DatesText>
            </DatesStyled>
            <DatesStyled
              background="#232D37"
              hasBorder={hasBorder.notime}
              color="#828CA0"
              onClick={() =>
                setHasBorder({ ...hasBorder, notime: !hasBorder.notime })
              }
            >
              <img src={CloseIcon} alt="date icon" />
              <DatesText
                className="margin__right__8px"
                color="#828CA0"
                notBold={true}
              >
                بدون زمان
              </DatesText>
            </DatesStyled>
          </div> */}
          {/* <AddReminderStyled>
            <div className="test3">
              <img src={CloseIcon} alt="plus" />
            </div>
            <div className="font__h2__bold" style={{ color: "#fff" }}>
              اضافه کردن یادآوری
            </div>
          </AddReminderStyled> */}
        </ContainerStyled>
      </Animated>
    );
  }
  else {
    return null;
  }
};

export default Calender;
