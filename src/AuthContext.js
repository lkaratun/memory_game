import React, { Component } from "react";

export const AuthContext = React.createContext();

export class ContextProvider extends Component {
  state = { turnsTaken: 0, logIn: this.logIn, logOut: this.logOut, loggedIn: false };
  logIn = data => {
    this.setState({ loggedIn: true, firstName: data.profileObj.givenName, lastName: data.profileObj.familyName });
  };
  logOut = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    return <AuthContext.Provider value={this.state}>{this.props.children}</AuthContext.Provider>;
  }
}
