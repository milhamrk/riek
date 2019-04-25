import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Product from './Product';
import Navbar from './AppBars'
import { SSL_OP_NO_TLSv1_2 } from 'constants';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products : [
        {
          judul : 'Tjinta',
          harga : '180000'
        },
        {
          judul : 'Hati',
          harga : '80000'
        },
        {
          judul : 'Rasa',
          harga : '120000'
        }
      ]
    }
  }

  handleSubmit = (e)=>{
    let judul = this.refs.judul.value;
    let harga = this.refs.harga.value;
    e.preventDefault();
    this.state.products.push({judul,harga});
    this.setState({products:this.state.products});

    this.refs.form.reset();
  }
  
  hapus = (key)=>{
    // console.log(key);
    this.state.products.splice(key,1);
    this.setState({products:this.state.products});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
          <div className="col m4">
              <div className="card">
                  <div className="card-content">
                          <span className="card-title">Tambah Data</span>
                          <form id="form_tambah" ref="form" action="#" onSubmit={this.handleSubmit}>
                              <div className="form-group">
                                  <label >Judul</label>
                                  <input type="text" className="form-control" id="judul" ref="judul" placeholder="Masukkan judul" required />
                              </div>
                              <div className="form-group">
                                  <label >harga</label>
                                  <input type="text" className="form-control" id="harga" ref="harga" placeholder="Masukkan harga" required />
                              </div> 
                              <button type="submit" className="btn btn-primary"><i className="material-icons left">send</i>Tambah</button>
                          </form>
                  </div>
              </div>
          </div>
            <div className="col m8">
              <div className="row">
                {this.state.products.map((data,key)=>{
                  return (
                    <Product remove={()=>this.hapus(key)} ploduk={data.judul} key={key} harga={data.harga}/>
                  )
                })}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
