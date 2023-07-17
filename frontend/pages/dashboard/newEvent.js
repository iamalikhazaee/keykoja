import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar"
import SidebarMenu from "@/components/addEventSidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import FreeTime from "@/components/FreeTime";
import jwt from 'jwt-decode'
import axios from "axios";
import Label from "@/components/common/Label";
import Input from "@/components/common/authInput";
import SelectBox from "@/components/common/SelectBox";
import Textarea from "@/components/common/Textarea";
import FilledBtn from "@/components/common/FilledBtn";


export default function newEvent() {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState({})
    const [theme, setTheme] = useState()
    const [userToken, setUserToken] = useState()
    const [event, setEvent] = useState()
    const [name, setName] = useState("");
    const [type, setType] = useState();
    const [location, setLocation] = useState()
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("");
    const [domain, setDomain] = useState("");
    const [steps, setSteps] = useState(1);


    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem("userDetails")))
        setTheme(JSON.parse(localStorage.getItem("userDetails")).theme)
        setUserToken(localStorage.getItem("token"))
    }, [])

    const handleBackBtn = () => {
        router.push({
            pathname: '/dashboard'
        })
    }

    const addEvent = (e) => {
        e.preventDefault()
        const token = jwt(JSON.parse(userToken))
        axios.post('https://keykoja.iran.liara.run/core/NewEvent/',
            { owner: token.user_id, name: name, type: type, place: location, address: address, massage: message, event_domain: domain },
            {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(userToken)}`
                }
            }
        )
            .then((res) => {
                setEvent(res.data.id)
                console.log(res.data)
                setSteps(2)
            })
    }

    return (
        <>
            <Navbar />
            <div className="m-0 shadow-md">
                <nav className="bg-white text-xs">
                    <div className="flex flex-wrap items-center justify-between my-0 mx-auto py-3 px-4">
                        <div>
                            <FilledBtn
                                bg={theme ? theme.pallete_2 : ''}
                                onClick={handleBackBtn}>
                                <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
                                بازگشت به داشبورد
                            </FilledBtn>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="grid grid-cols-12 gap-2 m-0" style={{ direction: 'rtl' }}>
                <div className="lg:col-span-2 md:col-span-3 sm:col-span-2 xs:col-span-12 p-0">
                    <SidebarMenu step={steps} />
                </div>
                <div className={`lg:col-span-9 md:col-span-9 sm:col-span-9 xs:col-span-12 py-8`}>
                    <div className='px-3 lg:pl-7'>
                        {steps === 1 ?
                            (<form>
                                <div className='grid grid-cols-4 gap-3'>
                                    <div className='sm:col-span-2 xs:col-span-4'>
                                        <Label value='صاحب رویداد' />
                                        <Input
                                            type="text"
                                            value={`${userDetails.first_name} ${userDetails.last_name}`}
                                            onChange={(e) => <></>}
                                        />
                                    </div>
                                    <div className="sm:col-span-2 xs:col-span-4">
                                        <Label value='عنوان رویداد' />
                                        <Input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='عنوان'
                                        />
                                    </div>
                                </div>

                                <div className='grid grid-cols-4 gap-3'>
                                    <div className="sm:col-span-2 xs:col-span-4">
                                        <Label value='نوع رویداد' />
                                        <SelectBox
                                            options={["یک به یک", "گروهی"]}
                                            value={type}
                                            setValue={setType}
                                            placeholder="نوع رویداد را انتخاب کنید"
                                        />
                                    </div>
                                    <div className="sm:col-span-2 xs:col-span-4">
                                        <Label value='لینک رویداد' />
                                        <div className="w-full flex items-center flex-row-reverse">
                                            <div className="bg-[#f3f4f6] border border-[#d1d5db] leading-5 p-2 rounded-tl-lg rounded-bl-lg text-xs font-semibold text-slate-500 mb-[5px] flex flex-row-reverse">{userDetails.domain}
                                                <span>/</span>
                                            </div>
                                            <div className="w-full -ml-3">
                                                <Input
                                                    type="text"
                                                    value={domain}
                                                    onChange={(e) => setDomain(e.target.value)}
                                                    placeholder='لینک'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-4 gap-3' style={{ justifyContent: 'flex-start' }}>
                                    <div className="sm:col-span-2 xs:col-span-4">
                                        <Label value='محل برگزاری رویداد' />
                                        <SelectBox
                                            options={["حضوری", "گوگل میت", "اسکایپ", "واتساپ"]}
                                            value={location}
                                            setValue={setLocation}
                                            placeholder="محل برگزاری را انتخاب کنید"
                                        />
                                    </div>
                                    <div className="sm:col-span-2 xs:col-span-4">
                                        <Label value={`${location === undefined ? 'طریقه ارتباط' :
                                            (location === 'حضوری' ? 'آدرس' :
                                                (location === 'گوگل میت' ? 'لینک' :
                                                    (location === 'اسکایپ' ? 'شماره تلفن' :
                                                        (location === 'واتساپ' && 'شماره تلفن'))))}`} />
                                        <Input
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder='آدرس'
                                        />
                                    </div>
                                    {/* )
                                    } */}
                                </div>

                                <div className="w-full mb-4">
                                    <div className={`w-100`}>
                                        <Label value='پیام مربوطه' />
                                        <Textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="پیام مربوط به رویداد را اینجا بنویسید..."
                                        ></Textarea>
                                    </div>
                                </div>

                                <div className="w-full flex justify-center">
                                    <FilledBtn bg={theme ? theme.pallete_2 : ''} onClick={addEvent}>تائید و ادامه</FilledBtn>
                                </div>
                            </form>)
                            : <></>
                        }

                        {steps === 2 ? (
                            <FreeTime event_id={event} />
                        ) : <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}