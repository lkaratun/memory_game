import React, { Component } from "react";

import { ContextProvider } from "./AuthContext";
import Board from "./Board";
import "./App.css";

class App extends Component {
  state = { turnsTaken: 0 };
  incrementTurnCounter = () => {
    this.setState(prevState => ({ turnsTaken: prevState.turnsTaken + 1 }));
  };
  resetTurnCounter = () => {
    this.setState({ turnsTaken: 0 });
  };
  render() {
    return (
      <ContextProvider value={this.state}>
        <div className="App">
          <Board handleMove={this.incrementTurnCounter} handleReset={this.resetTurnCounter} />
          <p id="instructions">
            Find pairs of cards with the same color to win! <br />
            Turns taken: {this.state.turnsTaken}
          </p>
        </div>
      </ContextProvider>
    );
  }
}

export default App;
