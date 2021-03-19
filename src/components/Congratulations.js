import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Congratulations = () => {

  const [show, setShow] = useState(true);
  
  const handleClose = () => setShow(false);
  
  return (
    <Modal show={show} >
      <Modal.Body>
        Felicidades...
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
};