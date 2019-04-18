import React from 'react';
import './Product.css';
import logo from './logo.svg';
import './App.css';

class Product extends React.Component {
  render() {
    return (
        <div className="grid">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Ploduk {this.props.ploduk}</h2>
            <h2>Harga {this.props.harga}</h2>
            <button>Tambah Kekeranjang</button>
        </div>
    );
  }
}

export default Product;
