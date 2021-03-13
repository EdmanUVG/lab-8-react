import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Congratulations = () => {

    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
  
    return (
      <>  
        <Modal show={show} >
            <Modal.Body>
                Woohoo, you're reading this text in a modal!
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
            </Modal.Body>
        </Modal>
      </>
    );
  }