import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../assets/css/welcome.scss";
import Congrats from "../assets/images/congrats.png";

export const Congratulations = () => {

  const [show, setShow] = useState(true);
  
  const handleClose = () => setShow(false);
  
  return (
    <Modal show={show} >
      <Modal.Body>
        <img src={Congrats} width="200" height="200" />
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
};