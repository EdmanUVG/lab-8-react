import React from "react";
import "../index.scss";
import Container from "react-bootstrap/Container";
// import PropTypes from "prop-types";

// Scoreboard.propTypes = {
//   attempt: PropTypes.number,
// };

export const Scoreboard = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Container className="scoreboard"><p>{props.attempt}</p></Container>;
};

