import React, { Component } from "react";

export const AuthContext = React.createContext();

export class ContextProvider extends Component {
  logIn = () => {
    this.setState({ loggedIn: true });
  };
  logOut = () => {
    this.setState({ loggedIn: false });
  };
  state = { turnsTaken: 0, logIn: this.logIn, logOut: this.logOut, loggedIn: false };

  render() {
    return <AuthContext.Provider value={this.state}>{this.props.children}</AuthContext.Provider>;
  }
}
