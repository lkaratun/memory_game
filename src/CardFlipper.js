import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import Card from "./Card";

class CardFlipper extends Component {
  render() {
    const { color, opened, handleClick, cardSize } = this.props;
    return (
      <ReactCardFlip isFlipped={opened}>
        <Card key="front" color={color} opened={false} cardSize={cardSize} handleClick={handleClick} />
        <Card key="back" color={color} opened={true} cardSize={cardSize} handleClick={handleClick} />
      </ReactCardFlip>
      // <Card color={color} opened={opened} cardSize={cardSize} />
    );
  }
}

export default CardFlipper;
