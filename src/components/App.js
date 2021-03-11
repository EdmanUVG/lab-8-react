import React, { Component } from 'react';
import One from './One';
import Dos from './Dos';
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
                    <Col>
                        <One/>
                        <Dos/>
                    </Col>
                    <Col>
                        <h1>Right</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Hola</h1>
                        <Button>SIGUIENTE</Button>
                    </Col>
                    <Col>
                        <h1>Mundo</h1>
                        <Alert variant="success">This Alert</Alert>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default App;