("next");
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Calendar } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styles from "./styles.module.scss";

export default function EventModal(props) {
  const [open, setOpen] = useState(false);
  const [owner, setOwner] = useState("فاطمه حنیفی");
  const [name, setName] = useState("");
  const [type, setType] = useState("یک به یک");
  const [place, setPlace] = useState("حضوری");
  const [message, setMessage] = useState("");
  const [domain, setDomain] = useState("");
  const [unit, setUnit] = useState("");
  const [time, setTime] = useState(new Date().toLocaleDateString("fa-IR"));

  const addEvent = () => {
    axios
      .post("http://127.0.0.1:8000/core/NewEvent/", {
        owner: 1,
        name: name,
        type: type,
        place: place,
        massage: message,
        event_domain: domain,
        time_unit: unit,
      })
      .then((res) => {
        console.log(res.data);
        alert("رویداد جدید با موفقیت افزوده شد.");
        props.setOpen(false);
      });
    console.log({
      owner: 1,
      name: name,
      type: type,
      place: place,
      massage: message,
      event_domain: domain,
      time_unit: unit,
    });
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <Modal
        {...props}
        className={styles.modal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={styles.header}>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body className={styles.body}>
          <form>
            <div className={`${styles.fieldsContainer} w-100`}>
              <div className={`${styles.field} w-100`}>
                <label htmlFor="time">تایم رویداد</label>
                <DatePicker
                  id="time"
                  className={styles.fieldّ}
                  value={time}
                  onChange={(date) => {
                    setTime(date);
                  }}
                  format={"YYYY/MM/DD"}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                />
              </div>
            </div>

            <div className={styles.fieldsContainer}>
              <div className={styles.field}>
                <label htmlFor="owner">صاحب رویداد</label>
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  readOnly
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="title">عنوان رویداد</label>
                <input
                  type="text"
                  id="title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={styles.fieldsContainer}>
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

              <div className={styles.field}>
                <label htmlFor="type">محل برگزاری رویداد</label>
                <select
                  id="type"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                >
                  <option>حضوری</option>
                  <option>Google meet</option>
                  <option>Skype</option>
                  <option>Whatsapp</option>
                </select>
              </div>
            </div>

            <div className={`${styles.fieldsContainer} w-100`}>
              <div className={`${styles.field} w-100`}>
                <label htmlFor="message">پیام مربوطه</label>
                <textarea
                  id="message"
                  // rows="2"
                  placeholder="پیام مربوط به رویداد را بنویسید..."
                  value={message}
                  onChange={handleMessage}
                ></textarea>
              </div>
            </div>

            <div className={styles.fieldsContainer}>
              <div className={styles.field}>
                <label htmlFor="link">لینک رویداد</label>
                <input
                  type="text"
                  id="link"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="duration">مدت زمان رویداد</label>
                <input
                  type="text"
                  id="duration"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* <div className="mb-6" style={{ direction: "ltr" }}>
                      <label
                        for="time"
                        class="block mb-2 text-sm font-medium text-gray-900 text-right"
                      >
                        انتخاب زمان برای رویداد
                      </label>
                      <div className="text-center">
                        <Datetime value={time} onChange={(event) => console.log(event)} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            defaultValue={dayjs("2022-04-17T15:30")}
                            value={time}
                            onChange={(e) => console.log(e.target.value)}
                          />
                        </LocalizationProvider>
                      </div>
                    </div> */}
          </form>
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
          <Button onClick={props.onHide} className={styles.btn}>
            بستن
          </Button>
          <Button onClick={addEvent} className={styles.btn}>
            افزودن
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
