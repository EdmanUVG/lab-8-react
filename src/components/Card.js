import React, { useState } from 'react';
import '../assets/css/card.scss';
import Tilt from 'react-parallax-tilt';
import { Scoreboard } from './Scoreboard';


class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 2,
        };
    }

    render() {
        let content;
        if(this.props.faceUp) {
            content = this.props.content;
        } else {
            content = '?'
        }

        // this.setState({count: this.state.count + 1});

        return (

            <div onClick={this.props.flip} className={`card ${this.props.faceUp ? 'face-up': ''}`}>
                {content}
            </div>
            
        )
    }
}
  
  export default Card;