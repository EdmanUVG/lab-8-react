/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import "../index.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Board from "./Board";
import  { Scoreboard } from "./Scoreboard";
import Welcome from "./Welcome";

class App extends Component {

  render() {
    return  (
      <Container fluid>
        <Row>
          <Col sm={8} md={8} lg={8} className="game-container">
            <Board/>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <Scoreboard/>
            <Welcome/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;