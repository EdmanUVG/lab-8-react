import React from "react";
import "../index.scss";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

Scoreboard.propTypes = {
  attempt: PropTypes.any,
};

export const Scoreboard = (props) => {
  return <Container variant="scoreboard"><p>{props.attempt}</p></Container>;
};

