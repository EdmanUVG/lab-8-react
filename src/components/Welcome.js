import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../assets/css/welcome.scss";
import Typed from "react-typed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UVG from "../assets/images/uvg.png";

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <Modal show={this.state.show}>
        <Modal.Body>
          <Container>
            <Row>
              <Col className="welcome-body">
                <Typed
                  className="typed-text"
                  strings={["Bienvenido", "presione", "comenzar", "para jugar"]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop />
              </Col>
            </Row>
            <Row>
              <Col className="start-body">
                <Button className="start-button" variant="secondary" onClick={() => this.setState({show: false})}>
                    COMENZAR
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Welcome;