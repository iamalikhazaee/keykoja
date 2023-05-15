import { Dialog, Transition } from "@headlessui/react";
// import { NextComponentType } from 'next'
import { Fragment, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';  
import axios from'axios';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";


const Modal = (props) => {
  const [open, setOpen] = useState(false);
  const [owner, setOwner] = useState('فاطمه حنیفی')
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [place, setPlace] = useState('')
  const [message, setMessage] = useState('')
  const [domain, setDomain] = useState('')
  const [unit, setUnit] = useState(0.0)
  const [time, setTime] = useState()

  
  const addEvent = () => {
    axios.post('http://127.0.0.1:8000/core/NewEvent/',  
    {"owner": 1, "name": name, "type": type, "place": place, "message": message, "event_domain": domain, "time_unit": unit}).then((res) => {
      console.log(res.data);
      alert("رویداد جدید با موفقیت افزوده شد.")
      props.setOpen(false);
    })
  }

  return (
    <>
      <Transition appear show={props.open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClose={() => props.setOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-center"
                >
                  افزودن رویداد جدید
                </Dialog.Title>
                <div className="mt-6" style={{ direction: "rtl" }}>
                  <form className="text-right">
                    <div class="mb-6">
                      <label
                        for="owner"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        صاحب رویداد
                      </label>
                      <input
                        type="text"
                        id="disabled-input-2"
                        aria-label="disabled input 2"
                        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        readonly
                      />
                    </div>

                    <div class="mb-6">
                      <label
                        for="title"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        عنوان رویداد
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        for="type"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        نوع رویداد
                      </label>
                      <select
                        id="type"
                        value={type}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option>یک به یک</option>
                        <option>گروهی</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label
                        for="type"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        محل برگزاری رویداد
                      </label>
                      <select
                        id="type"
                        value={place}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        onChange={(e) => setPlace(e.target.value)}
                      >
                        <option>حضوری</option>
                        <option>Google meet</option>
                        <option>Skype</option>
                        <option>Whatsapp</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        پیام مربوطه
                      </label>
                      <textarea
                        id="message"
                        rows="2"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="پیام مربوط به رویداد را بنویسید..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label
                        for="link"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        لینک رویداد
                      </label>
                      <input
                        type="text"
                        id="link"
                        value={domain}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        onChange={(e) => setDomain(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        for="duration"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        مدت زمان رویداد
                      </label>
                      <input
                        type="text"
                        id="duration"
                        value={unit}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        onChange={(e) => setUnit(e.target.value)}
                        required
                      />
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
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-fuchsia-400 px-4 py-2 text-sm font-medium text-white hover:bg-fuchsia-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2"
                    onClick={addEvent}
                  >
                    ثبت رویداد
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
