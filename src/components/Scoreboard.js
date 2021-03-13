import React, { useState } from 'react';
import '../index.css';
import Container from 'react-bootstrap/Container';

export const Scoreboard = () => {

    const [count, setCount] = useState(0);
    
    return (

        <Container  className="scoreboard" onClick={() => setCount(count + 1)}> <p>{count}</p> </Container>

        )
};