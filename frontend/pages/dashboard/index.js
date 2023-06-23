import { useEffect, useState } from "react";
import EventModal from "@/components/addEventModal";
import Navbar from "@/components/Navbar";
import styles from '@/styles/dashboard.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container, Row } from "react-bootstrap";
import axios from "axios";
// import { useRecoilValue } from "recoil";
// import { current_user } from "@/atoms";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import EventCard from "@/components/EventCard";

// const PinkSwitch = styled(Switch)(({ theme }) => ({
//     '& .MuiSwitch-switchBase.Mui-checked': {
//         color: pink[300],
//         '&:hover': {
//             backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
//         },
//     },
//     '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
//         backgroundColor: pink[300],
//     },
// }));

export default function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    const [events, setEvents] = useState([]);
    // const user = useRecoilValue(current_user)
    const router = useRouter()

    useEffect(() => {
        const token = JSON.parse(Cookies.get('token'));
        axios.get('http://127.0.0.1:8000/core/NewEvent/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setEvents(res.data)
        })
    }, [])


    const handleEventEnable = (e, id) => {
        const token = JSON.parse(Cookies.get('token'));
        axios.patch(`http://127.0.0.1:8000/core/NewEvent/${id}/`, { is_enable: e.target.checked }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            // console.log(res)
            axios.get('http://127.0.0.1:8000/core/NewEvent/', {
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
        axios.delete(`http://127.0.0.1:8000/core/NewEvent/${id}/`, {
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
            <nav className={styles.secondNavbar}>
                <div className={styles.navbarContainer}>
                    {/* <DropdownButton
                        className={styles.eventTypeBtn}
                        // as={ButtonGroup}
                        id={`dropdown-button-drop-end`}
                        drop='down'
                        // variant="secondary"
                        title='نوع رویدادهای من'
                    >
                        <Dropdown.Item eventKey="1" className={styles.eventType}>یک به یک</Dropdown.Item>
                        <Dropdown.Item eventKey="2" className={styles.eventType}>گروهی</Dropdown.Item>
                    </DropdownButton> */}
                    <div className={styles.addEvent}>
                        <button
                            onClick={() => router.push({ pathname: '/dashboard/newEvent/' })}>
                            افزودن رویداد جدید
                            <FontAwesomeIcon icon={faAdd} />
                        </button>
                    </div>
                </div>
            </nav>
            {showModal && <EventModal show={showModal} onHide={() => setShowModal(false)} />}
            <Container className={styles.container}>
                <Row className={styles.row}>
                    {events.map((item, index) => (
                        <EventCard key={index} index={index} item={item} handleEnable={handleEventEnable} deleteEvent={handleDeleteEvent} />
                    ))}
                </Row>
            </Container>
        </>
    )
}