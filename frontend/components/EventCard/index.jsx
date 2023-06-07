import React from "react";
import { Col, Card, Button } from "react-bootstrap"
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faEllipsisVertical, faCopy } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";


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

export default function EventCard(props) {
    const enable = props.item.is_enable
    
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
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </Card.Header>
          <Card.Body className={!enable && styles.disabledBody}>
            <Card.Title className={styles.cardTitle}>{props.item.name}</Card.Title>
            <Card.Subtitle className={`${styles.cardSubtitle} mb-2 text-muted`}>
              {props.item.type}
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer className={`${styles.cardFooter} ${!enable && styles.disabledFooter}`}>
            <a href="#">{props.item.event_domain}</a>
            <Button className={styles.copyBtn}>
              <span>کپی لینک</span>
              <FontAwesomeIcon icon={faCopy} />
            </Button>
          </Card.Footer>
        </Card>
      </Col>
  );
}
