import React from "react";
import "../assets/css/scoreboard.scss";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

export const Scoreboard = (props) => {  
  if (props.value < 20) {
    return ( 
      <Container className="scoreboard">
        <h1>Scoreboard</h1>
        <p>{props.value}</p>
      </Container>
    );
  } else if(props.value < 30){
    return ( 
      <Container className="scoreboard-warning">
        <h1>Scoreboard</h1>
        <p>{props.value}</p>
      </Container>
    );
  } else {
    return ( 
      <Container className="scoreboard-danger">
        <h1>Scoreboard</h1>
        <p>{props.value}</p>
      </Container>
    );
  }

};

Scoreboard.propTypes = {
  value: PropTypes.number,
};
