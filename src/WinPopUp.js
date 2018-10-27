import React from "react";
import "./WinPopUp.css";

const WinPopUp = ({ visible, turnsTaken, handleReset }) => {
  let display = visible ? "flex" : "none";
  const id = "WinPopUp";
  return (
    <div id={id} style={{ display }}>
      Congratulations, you won!
      <br />
      <button className="btn-dark" onClick={handleReset}>
        Play again
      </button>
    </div>
  );
};

export default WinPopUp;
