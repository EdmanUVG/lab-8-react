import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../assets/css/welcome.scss';
import Typed from 'react-typed';

class Welcome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: true,
        };
    }

    render() {
        return (
            <>
                <Modal show={this.state.show}>
                    <Modal.Body>

                        <Typed
                        className="typed-text"
                        strings={["Bienvenido", "Welcome", "Guatemala", "Facebook"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop />

                        <Button variant="secondary" onClick={() => this.setState({show: false})}>
                            Close
                        </Button>

                    </Modal.Body>
                </Modal>
            </> 
        )
    }
}

export default Welcome;