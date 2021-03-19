import React from "react";
import "../index.scss";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

export const Scoreboard = ({value}) => {
  return (<Container className="scoreboard"><p>{value}</p></Container>);
};

Scoreboard.propTypes = {
  value: PropTypes.string,
};