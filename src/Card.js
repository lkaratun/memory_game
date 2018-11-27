import React from "react";
import "./Card.css";

const Card = ({ color, opened, handleClick, cardSize }) => {
  let classList = "card " + cardSize;
  // let newColor = opened ? color : "rgba(175, 175, 175, 0.42)";
	const style = {};
  if (opened) {
    style.backgroundColor = color;
  } else {
    classList = classList + " closed";
  }
  return <div className={classList} style={style} onClick={handleClick} opened={opened.toString()} />;
};

export default Card;
