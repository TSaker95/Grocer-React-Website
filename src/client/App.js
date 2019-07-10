import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = { message: null, products: [] };

  componentDidMount() {
    fetch('/api/getMessage')
      .then(res => res.json())
      .then(res => this.setState({ message: res.message }));
    fetch('api/products')
      .then(res => res.json())
      .then(res => this.setState({ products: res }))
    console.log(this.state.products);
  }

  render() {
    const { message, products } = this.state;
    return (
      <div>
        {<h1>{`The server says: ${message}`}</h1>}
        <p>This is the first product in the collection: {products[0] && products[0].name}</p>
        <button onClick={() => console.log(products)}>Console log all products</button>
      </div>
    );
  }
}
