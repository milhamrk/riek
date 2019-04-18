import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Product ploduk="Tjinta" harga="80000"/>
          <Product ploduk="Hati" harga="80000"/>
          <Product ploduk="Hati" harga="80000"/>
          <Product ploduk="Hati" harga="80000"/>
        </header>
      </div>
    );
  }
}

export default App;
