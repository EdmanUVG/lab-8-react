import React from "react";
import "../index.scss";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

export const Scoreboard = (props) => {  
  return <Container className="scoreboard"><p>{props.value}</p></Container>;
};

Scoreboard.propTypes = {
  value: PropTypes.number,
};
