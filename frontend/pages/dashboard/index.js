import { useEffect, useState } from "react";
import EventModal from "@/components/addEventModal";
import Navbar from "@/components/Navbar";
import styles from '@/styles/dashboard.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faPen, faEllipsisVertical, faCopy } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import axios from "axios";
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { useRecoilValue } from "recoil";
import { current_user } from "@/atoms";
import { useRouter } from "next/router";


const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[300],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[300],
    },
}));

export default function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    const [events, setEvents] = useState([]);
    const user = useRecoilValue(current_user)
    const router = useRouter()

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/core/NewEvent/').then((res) => {
            setEvents(res.data)
        })
        // if (!localStorage.getItem('token')) {
        //     router.push({
        //         pathname: '/'
        //     })
        // }
        // console.log(user)
    }, [])

    return (
        <>
            <Navbar />
            <nav className={styles.secondNavbar}>
                <div className={styles.navbarContainer}>
                    <DropdownButton
                        className={styles.eventTypeBtn}
                        // as={ButtonGroup}
                        id={`dropdown-button-drop-end`}
                        drop='down'
                        // variant="secondary"
                        title='نوع رویدادهای من'
                    >
                        <Dropdown.Item eventKey="1" className={styles.eventType}>یک به یک</Dropdown.Item>
                        <Dropdown.Item eventKey="2" className={styles.eventType}>گروهی</Dropdown.Item>
                    </DropdownButton>
                    <div className={styles.addEvent}>
                        <button
                            onClick={() => router.push({pathname: '/dashboard/newEvent'})}>
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
                        <Col lg={3} md={4} sm={6} xs={12} key={index}>
                            <Card className={styles.card}>
                                <Card.Header className={styles.cardHeader}>
                                    <PinkSwitch defaultChecked size="small" />
                                    <div className={styles.icons}>
                                        <FontAwesomeIcon icon={faPen} />
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className={styles.cardTitle}>{item.name}</Card.Title>
                                    <Card.Subtitle className={`${styles.cardSubtitle} mb-2 text-muted`}>{item.type}</Card.Subtitle>
                                    {/* <Card.Text className={styles.cardText}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text> */}
                                </Card.Body>
                                <Card.Footer className={styles.cardFooter}>
                                    <a href="#">{item.event_domain}</a>
                                    <Button className={styles.copyBtn}>
                                        <span>
                                            کپی لینک
                                        </span>
                                        <FontAwesomeIcon icon={faCopy} />
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}