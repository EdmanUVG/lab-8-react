import React from "react";
import "../assets/css/card.scss";
import PropTypes from "prop-types";

Card.propTypes = {
  faceUp: PropTypes.any,
  content: PropTypes.any,
  flip: PropTypes.any
};

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }

  render() {
    let content;
    if(this.props.faceUp) {
      content = this.props.content;
    } else {
      content = "?";
    }

    return (
      <div onClick={this.props.flip} className={`card ${this.props.faceUp ? "face-up": ""}`}>
        {content}
      </div>
    );
  }
}

export default Card;