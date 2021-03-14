import React, { useState } from 'react';
import '../index.scss';
import Container from 'react-bootstrap/Container';
import Tilt from 'react-parallax-tilt';
import ReactCardFlip from 'react-card-flip';
import CSS from '../assets/images/css.png';

export const One = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    
    return (
        
        <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical">
                {/* <Tilt glareEnable={true} glareMaxOpacity={0.5} transitionSpeed={400} > */}
                    <div className="carta" onClick={handleClick}>
                        <p>?</p>
                    </div>
                {/* <Tilt/> */}
                {/* <Tilt glareEnable={true} glareMaxOpacity={0.5} transitionSpeed={400} > */}
                    <div className="carta" onClick={handleClick}>
                        <img src={CSS} width="50" height="50"/>
                    </div>
                {/* <Tilt/> */}
        </ReactCardFlip>
        )
};