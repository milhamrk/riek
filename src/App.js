import React, { Component } from 'react';
import axios from 'axios';
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
            food : []
        };
    }

    componentDidMount(){
      axios.get(`https://my-json-server.typicode.com/milhamrk/dummy/data`)
        .then(res => {
          const food = res.data;
          this.setState({ food });
        })
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
	      				<FoodCard judul={data.product} keterangan={data.exp} />
	      				)
	      		 })}
      		</div>
      	</div>
      </div>
    );
  }
}

export default App;
