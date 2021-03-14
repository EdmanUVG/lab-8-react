import React from 'react';
import Card from './Card';
import audioMatch  from '../assets/audio/match.mp3';
import audioVictory from '../assets/audio/victory.mp3';
import { Congratulations } from './Congratulations';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Board extends React.Component {

    constructor(props) {
        super(props)

        this.sound = new Audio(audioMatch);
        this.soundVicotry = new Audio(audioVictory);

        const fronts = [
            '💩',
            '👹',
            '👿',
            '🚗',
            '💎',
            '😁',
            '⚽',
            '🌓',
        ]

        const deck = fronts.concat(fronts).sort(() => Math.random() - 0.5)
            .map(f => {
                return {
                    content: f,
                    faceUp: false,
                }
            })

        this.state = {
            deck: deck,
            firstCard: null,
            count: 0,
            modalState: true,
        }
    }
  
    flipCardTo(cardIdx) {
        this.setState({
            deck: this.state.deck.map((f, i) => {
                if(i === cardIdx) {
                    return {
                        content: f.content,
                        faceUp: !f.faceUp,
                    }
                } else {
                    return f;
                }
            })
        })
    }
  
    flip(cardIdx) {

        if(this.state.firstCard === null) {
            this.setState({firstCard: cardIdx});
        } else {
            const firstCardContent = this.state.deck[this.state.firstCard].content;
            const secondCardContent = this.state.deck[cardIdx].content;

            if(firstCardContent === secondCardContent) {
                this.setState({firstCard: null});

                this.setState({count: this.state.count + 1}, () => {
                    if(this.state.count < 4) {
                        this.sound.play();
                    }
                    if (this.state.count === 4) {
                        this.soundVicotry.play();
                        <Congratulations/>
                    }
                });
            } else {
                setTimeout(() => {
                    this.flipCardTo(this.state.firstCard, false)
                    this.flipCardTo(cardIdx, false)
                    this.setState({firstCard: null});
                }, 700)
            }
        }
  
        this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp)
    }
  
    render () {
        // console.log(this.state.firstCard);
        return (
            this.state.deck.map((f, i) => {

            return (
                    <Card
                    flip={() => {this.flip(i)}}
                    content={f.content}
                    faceUp={f.faceUp} />
                )
            })
        )
    }
}
  
  export default Board;