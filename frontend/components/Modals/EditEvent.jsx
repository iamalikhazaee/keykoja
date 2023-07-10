import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Label from "../common/Label";
import Input from "../common/authInput";
import SelectBox from "../common/SelectBox";
import Textarea from "../common/Textarea";
import CustomizedDatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
import { Row, Col } from "react-bootstrap";
import { toPersianNum, toEnglishNum } from "@/utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "./Confirmation";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jwt-decode";

function EditEvent(props) {
  const [startHour, setStartHour] = useState(toPersianNum("00"));
  const [startMin, setStartMin] = useState(toPersianNum("00"));
  const [endHour, setEndHour] = useState(toPersianNum("00"));
  const [endMin, setEndMin] = useState(toPersianNum("00"));
  const [deleteTimeModal, setDeleteTimeModal] = useState(false);
  const [deleteExtraTimeModal, setDeleteExtraTimeModal] = useState(false);
  const [extraTimes, setExtraTimes] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://keykoja.iran.liara.run/${props.userDomain}/${props.event_domain}/time`
      )
      .then((res) => {
        const d = [];
        const t = [];
        for (let i = 0; i < res.data.length; i++) {
          d.push(res.data[i].date);
          t.push(res.data[i]);
        }
        // setDates(d);
        setTimes(t);
      });
  }, []);

  const editEvent = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    // console.log(props.item.id)
    axios
      .put(
        `https://keykoja.iran.liara.run/core/NewEvent/${props.id}/`,
        {
          owner: props.owner,
          name: props.name,
          type: props.type,
          place: props.location,
          address: props.address,
          massage: props.message,
          event_domain: props.domain,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
      });
  };

  const handleAddTime = () => {
    if (!props.date) {
      alert("لطفا تاریخ مورد نظر خود را انتخاب نمایید.");
    } else {
      const newTime = {
        date: toPersianNum(props.date.date),
        start_hour: toPersianNum(`${startHour}:${startMin}`),
        end_hour: toPersianNum(`${endHour}:${endMin}`),
      };
      setExtraTimes((v) => [...v, newTime]);
      props.setDate(undefined);
      setStartHour(toPersianNum("00"));
      setStartMin(toPersianNum("00"));
      setEndHour(toPersianNum("00"));
      setEndMin(toPersianNum("00"));
    }
  };

  const handleSubmitTimes = () => {
    for (let i = 0; i < times.length; i++) {
      axios
        .delete(`https://keykoja.iran.liara.run/core/EventTime/${times[i].id}/`)
        .then((res) => {
          console.log(res.data);
          axios
            .post("https://keykoja.iran.liara.run/core/EventTime/", {
              profile: jwt(Cookies.get("token")).user_id,
              event: props.id,
              date: toEnglishNum(times[i].date),
              start_hour: toEnglishNum(times[i].start_hour),
              end_hour: toEnglishNum(times[i].end_hour),
            })
            .then((res) => {
            //   console.log(res.data);
            });
        });
    }
    for (let i = 0; i < extraTimes.length; i++) {
      axios
        .post("https://keykoja.iran.liara.run/core/EventTime/", {
          profile: jwt(Cookies.get("token")).user_id,
          event: props.id,
          date: toEnglishNum(extraTimes[i].date),
          start_hour: toEnglishNum(extraTimes[i].start_hour),
          end_hour: toEnglishNum(extraTimes[i].end_hour),
        })
        .then((res) => {
          props.setOpen(false);
        });
    }
  };

  const deleteExtraTime = (index) => {
    setExtraTimes((oldValues) => {
        return oldValues.filter((_, i) => i !== index);
      });
    // var copyArray = [...extraTimes];
    // copyArray.splice(index, 1);
    // setExtraTimes(copyArray);
  };

  const deleteTime = (index, i1) => {
    axios
      .delete(`https://keykoja.iran.liara.run/core/EventTime/${index}/`)
      .then((res) => {
        console.log(res.data);
        setTimes((oldValues) => {
          return oldValues.filter((_, i) => i !== i1);
        });
      });
    // var copyArray = [...times];
    // copyArray.splice(i, 1);
    // setTimes(copyArray);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={() => props.setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props.open}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] max-h-[600px] overflow-y-scroll bg-white shadow-md rounded-xl py-6 px-8 flex flex-col justify-start items-center outline-none">
          <div className="w-full">
            <Tabs defaultActiveKey="first" className="w-full p-0 text-[13px]">
              <Tab eventKey="first" title="تنظیمات پایه" className="mt-4">
                <form>
                  <div className="flex justify-start items-center">
                    <div className="w-[45%] mb-4 ml-16 flex flex-col justify-center">
                      <Label value="عنوان رویداد"></Label>
                      <Input
                        type="text"
                        value={props.name}
                        onChange={(e) => props.setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-start items-center">
                    <div className="w-[45%] mb-4 ml-16 flex flex-col justify-center">
                      <Label value="نوع رویداد"></Label>
                      <SelectBox
                        options={["یک به یک", "گروهی"]}
                        value={props.type}
                        setValue={props.setType}
                      ></SelectBox>
                    </div>
                    <div
                      className="w-[45%] mb-4 ml-16 flex flex-col justify-center"
                      style={{ margin: "0 0 1rem 0" }}
                    >
                      <Label value="لینک رویداد"></Label>
                      <div className="flex flex-row-reverse w-full items-center">
                        <div className="bg-[#f3f4f6] border border-[#d1d5db] leading-5 mb-[5px] py-2 px-4 rounded-tl-lg rounded-bl-lg text-left text-xs font-semibold text-gray-700">
                          {props.userDomain}/
                        </div>
                        <div className="w-full -ml-4">
                          <Input
                            type="text"
                            value={props.domain}
                            onChange={(e) => props.setDomain(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex justify-start items-center"
                    style={{ justifyContent: "flex-start" }}
                  >
                    <div className="w-[45%] mb-4 ml-16 flex flex-col justify-center">
                      <Label value="محل برگزاری رویداد"></Label>
                      <SelectBox
                        options={["حضوری", "گوگل میت", "اسکایپ", "واتساپ"]}
                        value={props.location}
                        setValue={props.setLocation}
                      ></SelectBox>
                    </div>
                    {props.location === undefined ||
                    props.location === "محل برگزاری را انتخاب کنید" ? (
                      <></>
                    ) : (
                      <div
                        className="w-[45%] mb-4 ml-16 flex flex-col justify-center"
                        style={{ margin: "0 0 1rem 0" }}
                      >
                        <Label
                          value={
                            props.location === undefined
                              ? "طریقه ارتباط"
                              : props.location === "حضوری"
                              ? "آدرس"
                              : props.location === "گوگل میت"
                              ? "لینک"
                              : props.location === "اسکایپ" ||
                                ("واتساپ" && "شماره تلفن")
                          }
                        ></Label>
                        <Input
                          type="text"
                          value={props.address}
                          onChange={(e) => props.setAddress(e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex justify-start items-center">
                    <div
                      className="w-[45%] mb-4 ml-16 flex flex-col justify-center"
                      style={{ width: "100%", margin: "0 0 1rem 0" }}
                    >
                      <div>
                        <Label value="پیام مربوطه"></Label>
                        <Textarea
                          id="message"
                          value={props.message}
                          onChange={(e) => props.setMessage(e.target.value)}
                        ></Textarea>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start items-center">
                    <div className="w-full flex justify-center items-center my-2 py-2">
                      <button
                        className="px-4 py-3 text-[10px] rounded-xl bg-white text-[#709680] border border-[#709680] transition-all duration-300"
                        onClick={editEvent}
                      >
                        ذخیره تغییرات
                      </button>
                    </div>
                  </div>
                </form>
              </Tab>

              <Tab eventKey="second" title="زمان های آزاد" className="mt-4">
                <Row>
                  <Col
                    col={12}
                    style={{
                      maxHeight: "300px",
                      overflow: "scroll",
                      marginBottom: "2rem",
                    }}
                  >
                    <table className="w-full rounded-xl">
                      <thead>
                        <tr>
                          <th className="py-6 text-center text-xs font-semibold border-b border-slate-200">
                            تاریخ
                          </th>
                          <th className="py-6 text-center text-xs font-semibold border-b border-slate-200">
                            ساعت شروع
                          </th>
                          <th className="py-6 text-center text-xs font-semibold border-b border-slate-200">
                            ساعت پایان
                          </th>
                          <th className="py-6 text-center text-xs font-semibold border-b border-slate-200"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {times.map((item, index) => (
                          <tr key={index}>
                            <td className="py-6 text-center text-xs border-b border-slate-200">
                              {toPersianNum(item.date)}
                            </td>
                            <td className="py-6 text-center text-xs border-b border-slate-200">
                              {toPersianNum(item.start_hour)}
                            </td>
                            <td className="py-6 text-center text-xs border-b border-slate-200">
                              {toPersianNum(item.end_hour)}
                            </td>
                            <td className="py-6 text-center text-xs border-b border-slate-200">
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="cursor-pointer text-red-700 text-xs"
                                onClick={() => setDeleteTimeModal(true)}
                              />
                            </td>
                            <ConfirmationModal
                              text="آیا از حذف کردن این تایم اطمینان دارید؟"
                              confirmText="بله"
                              cancelText="خیر"
                              btnAction={() => deleteTime(item.id, index)}
                              open={deleteTimeModal}
                              setOpen={setDeleteTimeModal}
                            />
                          </tr>
                        ))}
                        {extraTimes.map((item, index) => (
                          <tr key={index}>
                            <td className="py-6 text-center text-xs border-b border-slate-200">
                              {toPersianNum(item.date)}
                            </td>
                            <td className="py-6 text-center text-xs border-b border-slate-200">
                              {toPersianNum(item.start_hour)}
                            </td>
                            <td className="py-6 text-center text-xs border-b border-slate-200">
                              {toPersianNum(item.end_hour)}
                            </td>
                            <td className="py-6 text-center text-xs border-b border-slate-200">
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="cursor-pointer text-red-700 text-xs"
                                onClick={() => setDeleteExtraTimeModal(true)}
                              />
                            </td>
                            <ConfirmationModal
                              text="آیا از حذف کردن این تایم اطمینان دارید؟"
                              confirmText="بله"
                              cancelText="خیر"
                              btnAction={() => deleteExtraTime(index)}
                              open={deleteExtraTimeModal}
                              setOpen={setDeleteExtraTimeModal}
                            />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Col>
                </Row>
                <Row>
                  <Col lg={7}>
                    <CustomizedDatePicker
                      setDate={props.setDate}
                      date={props.date}
                    />
                  </Col>
                  <Col lg={5} md={6} className="flex flex-col p-0 sm:px-5">
                    <div className="flex flex-col">
                      <div className="flex flex-col mb-8">
                        <Label value="ساعت شروع"></Label>
                        <div className="relative text-xs pr-[10px]">
                          <TimePicker
                            setHour={setStartHour}
                            setMin={setStartMin}
                            hour={startHour}
                            min={startMin}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col mb-8">
                        <Label value="ساعت پایان"></Label>
                        <div className="relative text-xs pr-[10px]">
                          <TimePicker
                            setHour={setEndHour}
                            setMin={setEndMin}
                            hour={endHour}
                            min={endMin}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="my-8 flex justify-end items-center py-4">
                      <button
                        className="px-3 py-2 border-none text-[9px] rounded-[10px] bg-white text-[#709680] border border-[#709680] flex items-center transition-all duration-300"
                        onClick={handleAddTime}
                      >
                        افزودن
                        <FontAwesomeIcon className="mr-1" icon={faAdd} />
                      </button>
                    </div>
                  </Col>
                </Row>
                <div>
                  <div className="mt-6 flex justify-center items-center">
                    <button
                      className="py-3 px-4 text-[10px] rounded-[10px] bg-white text-[#709680] flex items-center transition-all duration-200 border border-[#709680]"
                      onClick={handleSubmitTimes}
                    >
                      ذخیره تغییرات
                    </button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default EditEvent;
