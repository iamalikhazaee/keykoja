import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import styles from '@/styles/dashboard.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import EventCard from "@/components/EventCard";
import FilledBtn from "@/components/common/FilledBtn";


export default function Dashboard() {
    const [events, setEvents] = useState([]);
    const [theme, setTheme] = useState();
    const router = useRouter()

    useEffect(() => {
        const token = JSON.parse(Cookies.get('token'));
        setTheme(JSON.parse(localStorage.getItem("userDetails")).theme)
        axios.get('https://keykoja.iran.liara.run/core/NewEvent/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setEvents(res.data)
        })
    }, [])


    const handleEventEnable = (e, id) => {
        const token = JSON.parse(Cookies.get('token'));
        axios.patch(`https://keykoja.iran.liara.run/core/NewEvent/${id}/`, { is_enable: e.target.checked }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            // console.log(res)
            axios.get('https://keykoja.iran.liara.run/core/NewEvent/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                setEvents(res.data)
                // console.log(res.data)
            })
        })
    }

    const handleDeleteEvent = (id, index) => {
        const token = JSON.parse(Cookies.get('token'));
        // console.log(id)
        // console.log(index)
        axios.delete(`https://keykoja.iran.liara.run/core/NewEvent/${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            var copyArray = [...events];
            copyArray.splice(index, 1);
            setEvents(copyArray);
            console.log(res.data)
        })
    }


    return (
        <>
            <Navbar />
            <nav className="bg-white text-[13px]">
                <div className="w-full flex flex-wrap items-center justify-end my-0 mx-auto p-4">
                    <div>
                        <FilledBtn
                            bg={theme? theme.pallete_2 : ''}
                            onClick={() => router.push({ pathname: '/dashboard/newEvent/' })}>
                            افزودن رویداد جدید
                            <FontAwesomeIcon icon={faAdd} className="mr-1" />
                        </FilledBtn>
                    </div>
                </div>
            </nav>
            {/* {showModal && <EventModal show={showModal} onHide={() => setShowModal(false)} />} */}
            <Container className={styles.container}>
                <Row className={styles.row}>
                    {events.map((item, index) => (
                        <EventCard theme={theme} key={index} index={index} item={item} handleEnable={handleEventEnable} deleteEvent={handleDeleteEvent} />
                    ))}
                </Row>
            </Container>
        </>
    )
}