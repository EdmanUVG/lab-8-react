import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../assets/css/congratulations.scss";
import Congrats from "../assets/images/congrats.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Congratulations = () => {

  const [show, setShow] = useState(true);
  
  const handleClose = () => setShow(false);
  
  return (
    <Modal show={show} >
      <Modal.Body>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <img src={Congrats} width="200" height="200" />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <Button onClick={handleClose}>
              CERRAR
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};