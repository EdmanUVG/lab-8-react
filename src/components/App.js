import React, { Component } from 'react';
import { One } from './One';
import Dos from './Dos';
import { PrimaryButton } from './PrimaryButton';
import  Scoreboard from './Scoreboard';
import { Congratulations } from './Congratulations';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Board from './Board';
import Welcome from './Welcome';


class App extends Component {
    render() {
        return  (
            <Container fluid>
                <Row>
                    <Col sm={8} md={8} lg={8}>
                        <Board/>
                    </Col>
                    <Col sm={4} md={4} lg={4}>
                        <Scoreboard/>
                        <Welcome/>
                        {/* <Congratulations/> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;