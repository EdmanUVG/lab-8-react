import React from "react";
import "../assets/css/card.scss";
import PropTypes from "prop-types";

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }

  render() {
    let content;
    // eslint-disable-next-line react/prop-types
    if(this.props.faceUp) {
      // eslint-disable-next-line react/prop-types
      content = this.props.content;
    } else {
      content = "?";
    }

    return (
      // eslint-disable-next-line react/prop-types
      <div onClick={this.props.flip} className={`card ${this.props.faceUp ? "face-up": ""}`}>
        {content}
      </div>
    );
  }
}

// Card.propTypes = {
//   faceUp: PropTypes.any,
//   content: PropTypes.string,
//   flip: PropTypes.bool
// };

export default Card;