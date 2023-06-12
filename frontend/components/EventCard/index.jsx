import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEllipsisVertical,
  faCopy,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
// import { useRecoilValue } from "recoil";
// import { current_user } from "@/atoms";
import styles from "./styles.module.scss";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";

const style = {
  direction: "rtl",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid lightgray",
  boxShadow: 24,
  borderRadius: 2,
  // fontSize: 12,
  p: 4,
};

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
  const [open, setOpen] = useState(false);

  const openEventLink = (url) => {
    window.open(url, "_blank", "noreferrer");
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
            <FontAwesomeIcon icon={faPen} />
            {/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                setOpen(true);
              }}
            />
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={() => setOpen(false)}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box className={styles.modal}>
                  <div className={styles.modalText}>
                    <p>آیا برای حذف کردن اطمینان دارید؟</p>
                  </div>
                  <div className={styles.modalBtns}>
                    <Button
                      className={styles.btn}
                      onClick={() => {
                        props.deleteEvent(props.item.id, props.index);
                        setOpen(false);
                      }}
                    >
                      بله
                    </Button>
                    <Button className={styles.btn} onClick={() => setOpen(false)}>خیر</Button>
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
              navigator.clipboard.writeText(props.item.event_domain);
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
