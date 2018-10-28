import React from "react";
import "./WinPopUp.css";
import "./BootstrapButtons.css";

const WinPopUp = ({ visible, handleReset, handleClose }) => {
  let display = visible ? "flex" : "none";
  const id = "WinPopUp";
  return (
    <div id={id} style={{ display }}>
      Congratulations, you won!
      <br />
      <div id="buttons-wrapper">
        <button id="play-again" className="btn btn-dark" onClick={handleReset}>
          Play again
        </button>
        <button id="close" className="btn btn-outline-dark" onClick={handleClose}>
          Close popup
        </button>
      </div>
    </div>
  );
};

export default WinPopUp;
