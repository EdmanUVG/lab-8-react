/* eslint-disable react/destructuring-assignment */
import React from "react";
import Card from "./Card";
import audioMatch  from "../assets/audio/match.mp3";
import audioVictory from "../assets/audio/victory.mp3";

class Board extends React.Component {

  constructor(props) {
    super(props);

    this.sound = new Audio(audioMatch);
    this.soundVicotry = new Audio(audioVictory);

    const fronts = [
      "💩",
      "👹",
      "👿",
      "🚗",
      "💎",
      "😁",
      "⚽",
      "🌓",
    ];

    const deck = fronts.concat(fronts).sort(() => Math.random() - 0.5)
      .map(f => ({ 
        content: f, 
        faceUp: false, 
      }));

    this.state = {
      deck: deck,
      firstCard: null,
      count: 0,
      attempt: 0,
    };
  }
  
  flipCardTo(cardIdx) {
    this.setState({
      deck: this.state.deck.map((f, i) => {

        if(i === cardIdx) {
          return {
            content: f.content,
            faceUp: !f.faceUp,
          };
        } 
        
        return f;
        
      })
    });
  }
  
  flip(cardIdx) {

    this.setState(prevState => ({attempt: prevState.attempt + 1}), () => {
      console.log("Attempts" + this.state.attempt);
    });

    if(this.state.firstCard === null) {
      this.setState({firstCard: cardIdx});
    } else {
      const firstCardContent = this.state.deck[this.state.firstCard].content;
      const secondCardContent = this.state.deck[cardIdx].content;

      if(firstCardContent === secondCardContent) {
        this.setState({firstCard: null});

        this.setState(prevState => ({count: prevState.count + 1}), () => {
          if(this.state.count < 8) {
            this.sound.play();
          }
          if (this.state.count === 8) {
            this.soundVicotry.play();
          }
        });
      } else {
        setTimeout(() => {
          this.flipCardTo(this.state.firstCard, false);
          this.flipCardTo(cardIdx, false);
          this.setState({firstCard: null});
        }, 700);
      }
    }
  
    this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp);
  }
  
  render () {
    return (
      this.state.deck.map((f, i) => (
        <Card
          key
          flip={() => {this.flip(i);}}
          content={f.content}
          faceUp={f.faceUp} />
      ))
    );
  }
}
  
export default Board;