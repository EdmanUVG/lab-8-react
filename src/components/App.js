import React, { Component } from 'react';
import { One } from './One';
import Dos from './Dos';
import { PrimaryButton } from './PrimaryButton';
import { Scoreboard } from './Scoreboard';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


class App extends Component {
    render() {
        return  (
            <Container fluid>
                <Row>
                    <Col sm={9} md={9} lg={9}>
                        <One/>
                        <Dos/>
                        <One/>
                    </Col>
                    <Col sm={3} md={3} lg={3}>
                        <Scoreboard/>
                        <h1>Right</h1>
                        <PrimaryButton/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;