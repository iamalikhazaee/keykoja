import React, { useEffect, useState } from "react";
import { Col, Card, Button, Row } from "react-bootstrap";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEllipsisVertical,
  faCopy,
  faTrash,
  faAdd
} from "@fortawesome/free-solid-svg-icons";
// import { useRecoilValue } from "recoil";
// import { current_user } from "@/atoms";
import styles from "./styles.module.scss";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import jwt from "jwt-decode";
import TimePicker from "../TimePicker";
import Calender from "../Calender/Calender.component";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: green[300],
    "&:hover": {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: green[300],
  },
}));

export default function EventCard(props) {
  const enable = props.item.is_enable;
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const [name, setName] = useState(props.item.name);
  const [type, setType] = useState(props.item.type);
  const [location, setLocation] = useState(props.item.place);
  const [address, setAddress] = useState(props.item.address);
  const [message, setMessage] = useState(props.item.message);
  const [domain, setDomain] = useState(props.item.event_domain);
  const [userToken, setUserToken] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    setUserToken(localStorage.getItem("token"));
    const domain = JSON.parse(localStorage.getItem("userDetails")).domain;
    axios
      .get(`http://127.0.0.1:8000/${domain}/${props.item.event_domain}/time`)
      .then((res) => {
        const d = [];
        const t = [];
        for (let i = 0; i < res.data.length; i++) {
          d.push(res.data[i].date);
          t.push(res.data[i]);
        }
        setDates(d);
        setTimes(t);
      });
  }, []);

  const openEventLink = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const editEvent = (e) => {
    // e.preventDefault();
    const token = jwt(JSON.parse(userToken));
    // console.log(message);
    axios
      .put(
        `http://127.0.0.1:8000/core/NewEvent/${props.item.id}/`,
        {
          owner: props.item.owner,
          name: name,
          type,
          place: location,
          address: address,
          message: message,
          event_domain: domain,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <Col lg={3} md={4} sm={6} xs={12} className={styles.cardContainer}>
      <Card className={styles.card}>
        <Card.Header className={styles.cardHeader}>
          <PinkSwitch
            checked={props.item.is_enable}
            onChange={(e) => props.handleEnable(e, props.item.id)}
            size="small"
          />
          <div className={styles.icons}>
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => {
                setOpenEdit(true);
              }}
            />
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openEdit}
              onClose={() => setOpenEdit(false)}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={openEdit}>
                <Box className={styles.editModal}>
                  <div className={styles.tabContainer}>
                    {/* <h4>React-Bootstrap Tab Component</h4> */}
                    <Tabs defaultActiveKey="first" className={styles.tabs}>
                      <Tab
                        eventKey="first"
                        title="تنظیمات پایه"
                        className={styles.tabContent}
                      >
                        <form>
                          <div className={styles.fields}>
                            <div className={styles.field}>
                              <label htmlFor="title">عنوان رویداد</label>
                              <input
                                id="title"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className={styles.fields}>
                            <div className={styles.field}>
                              <label htmlFor="type">نوع رویداد</label>
                              <select
                                id="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                              >
                                <option>یک به یک</option>
                                <option>گروهی</option>
                              </select>
                            </div>
                            <div
                              className={styles.field}
                              style={{ margin: "0 0 1rem 0" }}
                            >
                              <label htmlFor="link">لینک رویداد</label>
                              <div className={styles.inputGroup}>
                                <div className={styles.mutedText}>
                                  {user.domain}/
                                </div>
                                <input
                                  type="text"
                                  id="link"
                                  required
                                  value={domain}
                                  onChange={(e) => setDomain(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>

                          <div
                            className={styles.fields}
                            style={{ justifyContent: "flex-start" }}
                          >
                            <div className={styles.field}>
                              <label htmlFor="location">
                                محل برگزاری رویداد
                              </label>
                              <select
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                              >
                                <option>محل برگزاری را انتخاب کنید</option>
                                <option>حضوری</option>
                                <option>Google meet</option>
                                <option>Skype</option>
                                <option>Whatsapp</option>
                              </select>
                            </div>
                            {location === undefined ||
                            location === "محل برگزاری را انتخاب کنید" ? (
                              <></>
                            ) : (
                              <div
                                className={styles.field}
                                style={{ margin: "0 0 1rem 0" }}
                              >
                                <label htmlFor="title">
                                  {location === undefined && "طریقه ارتباط"}
                                  {location === "حضوری" && "آدرس"}
                                  {location === "Google meet" && "لینک"}
                                  {location === "Skype" && "شماره تلفن"}
                                  {location === "Whatsapp" && "شماره تلفن"}
                                </label>
                                <input
                                  id="title"
                                  type="text"
                                  value={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                />
                              </div>
                            )}
                          </div>

                          <div className={styles.fields}>
                            <div
                              className={styles.field}
                              style={{ width: "100%", margin: "0 0 1rem 0" }}
                            >
                              <div>
                                <label htmlFor="message">پیام مربوطه</label>
                                <textarea
                                  id="message"
                                  // rows="2"
                                  placeholder="پیام مربوط به رویداد را بنویسید..."
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div className={styles.fields}>
                            <div className={styles.submitBtn}>
                              <button onClick={editEvent}>ذخیره تغییرات</button>
                            </div>
                          </div>
                        </form>
                      </Tab>
                      <Tab
                        eventKey="second"
                        title="زمان های آزاد"
                        className={styles.tabContent}
                      >
                        {/* <CustomizedDatePicker setDate={setDate} date={date} /> */}
                        <Row>
                          <Col lg={7}>
                            <Calender
                              dates={dates}
                              style={{ maxHeight: "300px" }}
                            />
                          </Col>
                          <Col lg={5} md={6} className={styles.timeSection}>
                            <div className={styles.times}>
                              <div className={styles.timeContainer}>
                                <label htmlFor="time">ساعت شروع</label>
                                <div className={styles.timePicker}>
                                  <TimePicker
                                    // setHour={setStartHour}
                                    // setMin={setStartMin}
                                    // hour={startHour}
                                    // min={startMin}
                                  />
                                </div>
                              </div>

                              <div className={styles.timeContainer}>
                                <label htmlFor="time">ساعت پایان</label>
                                <div className={styles.timePicker}>
                                  <TimePicker
                                    // setHour={setEndHour}
                                    // setMin={setEndMin}
                                    // hour={endHour}
                                    // min={endMin}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className={styles.addBtn}>
                              <button 
                              // onClick={handleAddTime}
                              >
                                افزودن
                                <FontAwesomeIcon icon={faAdd} />
                              </button>
                            </div>
                          </Col>
                          <table className={styles.timeTable}>
                            <thead>
                              <tr>
                                <th>تاریخ</th>
                                <th>ساعت شروع</th>
                                <th>ساعت پایان</th>
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
                                      icon={faTrash}
                                      id={styles.trashIcon}
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </Row>
                      </Tab>
                    </Tabs>
                  </div>
                </Box>
              </Fade>
            </Modal>
            {/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                setOpenDelete(true);
              }}
            />
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openDelete}
              onClose={() => setOpenDelete(false)}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={openDelete}>
                <Box className={styles.deleteModal}>
                  <div className={styles.modalText}>
                    <p>آیا برای حذف کردن اطمینان دارید؟</p>
                  </div>
                  <div className={styles.modalBtns}>
                    <Button
                      className={styles.btn}
                      onClick={() => {
                        props.deleteEvent(props.item.id, props.index);
                        setOpenDelete(false);
                      }}
                    >
                      بله
                    </Button>
                    <Button
                      className={styles.btn}
                      onClick={() => setOpenDelete(false)}
                    >
                      خیر
                    </Button>
                  </div>
                </Box>
              </Fade>
            </Modal>
          </div>
        </Card.Header>
        <Card.Body className={!enable && styles.disabledBody}>
          <Card.Title className={styles.cardTitle}>
            {props.item.name}
          </Card.Title>
          <Card.Subtitle className={`${styles.cardSubtitle} mb-2 text-muted`}>
            {props.item.type}
          </Card.Subtitle>
          {props.showNotice && (
            <Card.Subtitle className={styles.timeNotice}>
              برای این رویداد زمان ثبت نکرده اید.
            </Card.Subtitle>
          )}
        </Card.Body>
        <Card.Footer
          className={`${styles.cardFooter} ${!enable && styles.disabledFooter}`}
        >
          <Button
            className={styles.openLinkBtn}
            onClick={() =>
              openEventLink(
                `http://localhost:3000/${user.domain}/${props.item.event_domain}`
              )
            }
          >
            {props.item.event_domain}
          </Button>
          {/* <a href={`http://localhost:3000/${user.domain}/${props.item.event_domain}`}>{props.item.event_domain}</a> */}
          <Button
            className={styles.copyBtn}
            onClick={() => {
              navigator.clipboard.writeText(
                `http://localhost:3000/${user.domain}/${props.item.event_domain}`
              );
            }}
          >
            <span>کپی لینک</span>
            <FontAwesomeIcon icon={faCopy} />
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}
