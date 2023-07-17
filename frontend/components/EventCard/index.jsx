import React, { useEffect, useState } from "react";
import { Col, Card, Button, Row } from "react-bootstrap";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCopy,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import axios from "axios";
import ConfirmationModal from "../Modals/Confirmation";
import Link from "next/link";
import EditEvent from "../Modals/EditEvent";

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
  const [message, setMessage] = useState(props.item.massage);
  const [domain, setDomain] = useState(props.item.event_domain);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [date, setDate] = useState([]);

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
            <EditEvent
              open={openEdit}
              setOpen={setOpenEdit}
              name={name}
              setName={setName}
              type={type}
              setType={setType}
              domain={domain}
              setDomain={setDomain}
              location={location}
              setLocation={setLocation}
              address={address}
              setAddress={setAddress}
              message={message}
              setMessage={setMessage}
              userDomain={user.domain}
              date={date}
              setDate={setDate}
              id={props.item.id}
              owner={props.item.owner}
              event_domain={props.item.event_domain}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                setOpenDelete(true);
              }}
            />
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
          <Link
            href={`${user.domain}/${props.item.event_domain}`}
            target="_blank"
            className={styles.openLinkBtn}
          >
            {props.item.event_domain}
          </Link>
          {/* <a href={`http://localhost:3000/${user.domain}/${props.item.event_domain}`}>{props.item.event_domain}</a> */}
          <Button
            className={styles.copyBtn}
            onClick={() => {
              navigator.clipboard.writeText(
                `https://keykojaa.iran.liara.run/${user.domain}/${props.item.event_domain}`
              );
            }}
          >
            <span>کپی لینک</span>
            <FontAwesomeIcon icon={faCopy} />
          </Button>
        </Card.Footer>
        <ConfirmationModal
          text="آیا از حذف کردن این رویداد اطمینان دارید؟"
          confirmText="بله"
          cancelText="خیر"
          btnAction={() => props.deleteEvent(props.item.id, props.index)}
          open={openDelete}
          setOpen={setOpenDelete}
        />
      </Card>
    </Col>
  );
}
