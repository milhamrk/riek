import React from 'react';
// import './Product.css';
import logo from './logo.svg';
// import './App.css';

class Product extends React.Component {

  render() {
    return (
        <div className="col m4">
          <div className="card blue-grey darken-1">
            <div className="card-image">
              <img src={logo} />
              <span className="card-title">{this.props.ploduk}</span>
              <a onClick={this.props.remove} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">delete</i></a>  
            </div>
            <div className="card-content white">
              <p>{this.props.harga}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Product;
