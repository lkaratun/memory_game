import React, { Component } from "react";
import "./NavBar.css";
import { AuthContext } from "./AuthContext";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.expandDropdown = this.expandDropdown.bind(this);
    this.collapseDropdown = this.collapseDropdown.bind(this);
  }

  expandDropdown() {
    this.setState({ expanded: true });
    document.addEventListener("click", this.collapseDropdown);
  }
  collapseDropdown() {
    this.setState({ expanded: false });
    document.removeEventListener("click", this.collapseDropdown);
  }

  render() {
    return (
      <nav>
        <div className="title">The memory game</div>

        <AuthContext.Consumer>
          {context => {
            console.log(context);
            window.context = context;

            return (
              <div id="buttons">
                <button id="NewGame" onClick={this.props.handleNewGameClick}>
                  New game
                </button>
                <div className="dropdown">
                  <button onClick={this.expandDropdown} className="dropbtn">
                    Difficulty <i className="fa fa-angle-down" />
                  </button>
                  <div id="myDropdown" className={"dropdown-content" + (this.state.expanded ? " expanded" : "")}>
                    <button onClick={() => this.props.handleDifficultyClick("easy")}>Easy</button>
                    <button onClick={() => this.props.handleDifficultyClick("medium")}>Medium</button>
                    <button onClick={() => this.props.handleDifficultyClick("hard")}>Hard</button>
                  </div>
                </div>
                {context.loggedIn ? (
                  <button onClick={context.logOut}>Log out</button>
                ) : (
                  <button onClick={context.logIn}>Log in</button>
                )}
              </div>
            );
          }}
        </AuthContext.Consumer>
      </nav>
    );
  } //render
}

export default NavBar;
