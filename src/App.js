import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { turnsTaken: 0 };
    this.incrementTurnCounter = this.incrementTurnCounter.bind(this);
    this.resetTurnCounter = this.resetTurnCounter.bind(this);
  }

  incrementTurnCounter() {
    this.setState(prevState => ({ turnsTaken: prevState.turnsTaken + 1 }));
  }

  resetTurnCounter() {
    this.setState({ turnsTaken: 0 });
  }

  render() {
    return (
      <div className="App">
        <Board
          handleMove={this.incrementTurnCounter}
          handleReset={this.resetTurnCounter}
        />
        <p id="instructions">
          Find pairs of cards with the same color to win! <br />
          Turns taken: {this.state.turnsTaken}
        </p>
      </div>
    );
  }
}

export default App;
