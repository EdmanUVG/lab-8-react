import React, { useState } from 'react';
import '../index.scss';
import Button from 'react-bootstrap/Button';

export const PrimaryButton = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    
    return (

        <Button className="next" onClick={handleClick}>NIVEL 2</Button>

        )
};