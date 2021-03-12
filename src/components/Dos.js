import React, { Component } from 'react';
import '../index.css';
import Tilt from 'react-parallax-tilt';

class Dos extends Component {
    render() {
        return  (
            <Tilt glareEnable={true} glareMaxOpacity={0.5} transitionSpeed={400} >
                <div className="carta">
                
                        <p>?</p>
                    
                </div>
            </Tilt>
        );
    }
}

export default Dos;