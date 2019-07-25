import React from "react";

export let state;
export let setState;

// Component used to store the current logged in state of the user. This is used throughout the admin end of the application
// to check for authorisation and render or redirect accordingly.

export default function WithState(WrappedComponent) {
  return class App extends React.Component {
    state = {
      isLoggedIn: localStorage.getItem("isLoggedIn")
    };

    render() {
      state = this.state;
      setState = newState => this.setState({ ...this.state, ...newState });

      return <WrappedComponent {...this.props} />;
    }
  };
}
