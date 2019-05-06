import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Product from './Product';
import Navbar from './AppBars'
import FoodCard from './FoodCard'
import { SSL_OP_NO_TLSv1_2 } from 'constants';

class App extends Component {

 constructor(){
        super();
        this.state = {
            food : [
                {judul : 'Sate Bebek',keterangan : 'Lorem ipsum sit dolor amet 1'},
                {judul : 'Sate Ayam',keterangan : 'Lorem ipsum sit dolor amet 1'},
                {judul : 'Sate Sapi',keterangan : 'Lorem ipsum sit dolor amet 1'},
                {judul : 'Sate Kambing',keterangan : 'Lorem ipsum sit dolor amet 1'},
            ]
        }
    }

  render() {
    return (
      <div>
      	<Navbar />
      	<br />
      	<div className="col m12">
      		<div className="row">
	      		{this.state.food.map((data) => {
	      			return(
	      				<FoodCard judul={data.judul} keterangan={data.keterangan} />
	      				)
	      		 })}
      		</div>
      	</div>
      </div>
    );
  }
}

export default App;
