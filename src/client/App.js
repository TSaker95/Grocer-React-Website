import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = { message: null };

  componentDidMount() {
    fetch('/api/getMessage')
      .then(res => res.json())
      .then(res => this.setState({ message: res.message }));
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        {<h1>{`The server says: ${message}`}</h1>}
      </div>
    );
  }
}
