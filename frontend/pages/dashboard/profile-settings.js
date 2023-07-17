import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '@/styles/profileSettings.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Input from '@/components/common/authInput'
import Label from '@/components/common/Label'
import SelectBox from '@/components/common/SelectBox'
import Textarea from '@/components/common/Textarea'
import axios from 'axios'
import Link from 'next/link'
import FilledBtn from '@/components/common/FilledBtn'
import { useRouter } from 'next/router'
import NotificationModal from '@/components/Modals/Notification'

export default function ProfileSettings() {
    const router = useRouter()
    const [id, setId] = useState(0)
    const [token, setToken] = useState()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [link, setLink] = useState('')
    const [field, setField] = useState('')
    const [position, setPosition] = useState('')
    const [avatar, setAvatar] = useState('')
    const [about, setAbout] = useState('')
    const [theme, setTheme] = useState('')
    const [pallette, setPallette] = useState()
    const [originalAvatar, setOriginalAvatar] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userDetails'))
        setId(user.id)
        setToken(user.token.access)
        setFirstName(user.first_name)
        setLastName(user.last_name)
        setEmail(user.email)
        setLink(user.domain)
        setField(user.activation_field)
        setPosition(user.position)
        setAvatar(avatar == null ? null : (user.avatar.startsWith("/me") ? `https://keykoja.iran.liara.run/${user.avatar}` : user.avatar))
        setAbout(user.about)
        setTheme(user.theme.id)
        setPallette(user.theme)
    }, [])

    const myLoader = (src) => {
        return `${src}`;
    };

    function handleUpload(e) {
        setAvatar(e.target.files[0]);
        setOriginalAvatar(false)
    }

    function handleProfileEdit() {
        let data = new FormData()
        data.append('email', email)
        data.append('first_name', firstName)
        data.append('last_name', lastName)
        data.append('domain', link)
        data.append('theme_id', theme)
        data.append('about', about)
        data.append('position', position)
        data.append('activation_field', field)
        if (originalAvatar === false) {
            data.append('avatar', avatar)
        }

        axios.patch(`https://keykoja.iran.liara.run/core/register/${id}/`, data, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(JSON.stringify(token))}`
            }
        }).then((res) => {
            console.log(res.data)
            localStorage.setItem('userDetails', JSON.stringify(res.data))
            setOpenModal(true)
        })
    }

    const clickNotificationBtn = () => {
        router.push("/dashboard")
    }


    return (
        <div>
            <Navbar />
            <nav className='bg-white text-[13px] shadow-sm'>
                <div className='w-full flex flex-wrap items-center justify-between my-0 mx-auto p-4 py-3'>
                    <FilledBtn type="submit" onClick={() => router.push("/dashboard")} bg={pallette?.pallete_2}>
                        <FontAwesomeIcon icon={faChevronRight} className='ml-1' />
                        بازگشت به داشبورد
                    </FilledBtn>
                    {/* <Link href='/dashboard' className={styles.backBtn}>

                    </Link> */}
                </div>
            </nav>
            <div className='mt-8 px-16'>
                <div className='grid sm:grid-cols-3 md:grid-cols-6 sm:gap-3 md:gap-5 items-center'>
                    <div className='sm:col-span-3 md:col-span-3 lg:col-span-3 flex flex-col items-center'>
                        {avatar == null ? (
                            <FontAwesomeIcon icon={faUser} className='text-[40px] text-gray-600 mb-3' />
                        ) : (
                            <Image loader={() => myLoader(avatar)} src={originalAvatar ? avatar : URL.createObjectURL(avatar)} width={70} height={70} className='max-w-[70px] max-h-[70px] rounded-[100%] object-cover border border-slate-50 mb-3' />
                        )}
                        <input
                            id="avatar"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(event) => handleUpload(event)}
                        />
                        <FilledBtn
                            type="submit"
                            onClick={() => document.getElementById("avatar").click()}
                            bg={pallette?.pallete_2}
                        >
                            بارگذاری آواتار
                        </FilledBtn>
                    </div>
                    <div className='sm:col-span-3 md:col-span-3 lg:col-span-3 flex flex-col my-4'>
                        <Label value='درباره من / پیام خوش آمدگویی' />
                        <Textarea
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            placeholder="یک پیام خوش آمد گویی و یا توضیح مختصر درباره خودتان وارد کنید."
                        ></Textarea>
                    </div>
                </div>
                <div className='grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 lg:gap-5 md:gap-5 sm:gap-3 items-center'>
                    <div className='sm:col-span-3 md:col-span-3 lg:col-span-4 flex flex-col my-4'>
                        <Label value='نام' />
                        <Input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className='sm:col-span-3 md:col-span-3 lg:col-span-4 flex flex-col my-4'>
                        <Label value='نام خانوادگی' />
                        <Input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className='sm:col-span-3 md:col-span-3 lg:col-span-4 flex flex-col my-4'>
                        <Label value='ایمیل' />
                        <Input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='sm:col-span-3 md:col-span-3 lg:col-span-4 flex flex-col my-4'>
                        <Label value='لینک' />
                        <div className='w-full flex flex-row-reverse items-center'>
                            <div className='bg-gray-200 border border-[rgb(209 213 219)] leading-5 p-2 rounded-ee-lg rounded-tl-lg text-[11px] font-semibold text-gray-500 mb-[5px]'>/keykoja.ir</div>
                            <div className='w-full -ml-4'>
                                <Input
                                    type="text"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='sm:col-span-3 md:col-span-3 lg:col-span-4 flex flex-col my-2'>
                        <Label value='حوزه فعالیت' />
                        <SelectBox
                            options={["اداری", "آموزشی", "درمانی"]}
                            value={field}
                            setValue={setField}
                        />
                    </div>
                    <div className='sm:col-span-3 md:col-span-3 lg:col-span-4 flex flex-col my-4'>
                        <Label value='سمت شغلی' />
                        <Input
                            type="text"
                            placeholder="سمت"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <Label value="تم رنگ" />
                    <div className='w-full flex justify-center'>
                        <div
                            className={`${theme === 2 ? 'shadow-xl -mt-2' : ''} w-1/3 h-14 p-1 ml-2 flex items-center cursor-pointer transition-all duration-500 hover:shadow-xl border border-slate-200 mb-3 rounded-lg `}
                            onClick={() => setTheme(2)}
                        >
                            <div className="w-1/3 h-full bg-[#1e6091]"></div>
                            <div className="w-1/3 h-full bg-[#1a759f]"></div>
                            <div className="w-1/3 h-full bg-[#168aad]"></div>
                        </div>
                        <div
                            className={`${theme === 1 ? 'shadow-lg -mt-2' : ''} w-1/3 h-14 p-1 ml-2 flex items-center cursor-pointer transition-all duration-500 hover:shadow-xl border border-slate-200 mb-3 rounded-lg`}
                            onClick={() => setTheme(1)}
                        >
                            <div className="w-1/3 h-full bg-[#3a5a40]"></div>
                            <div className="w-1/3 h-full bg-[#588157]"></div>
                            <div className="w-1/3 h-full bg-[#a3b18a]"></div>
                        </div>
                        <div
                            className={`${theme === 3 ? 'shadow-lg -mt-2' : ''} w-1/3 h-14 p-1 flex items-center cursor-pointer transition-all duration-500 hover:shadow-xl border border-slate-200 mb-3 rounded-lg`}
                            onClick={() => setTheme(3)}
                        >
                            <div className="w-1/3 h-full bg-[#c8b6ff]"></div>
                            <div className="w-1/3 h-full bg-[#e7c6ff]"></div>
                            <div className="w-1/3 h-full bg-[#ffd6ff]"></div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 sm:w-full md:mx-auto sm:mx-0 my-8 flex justify-center'>
                    <FilledBtn
                        type="submit"
                        onClick={handleProfileEdit}
                        bg={pallette?.pallete_2}
                    >
                        ذخیره تغییرات
                    </FilledBtn>
                </div>
                <NotificationModal
                    text="تغییرات مورد نظر با موفقیت ثبت شدند."
                    confirmText="متوجه شدم"
                    open={openModal}
                    setOpen={setOpenModal}
                    btnAction={clickNotificationBtn}
                />
            </div>
        </div>
    )
}
