import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
          <div class="col m4">
              <div class="card">
                  <div class="card-content">
                          <span class="card-title">Tambah Data</span>
                          <form id="form_tambah">
                              <div class="form-group">
                                  <label >Judul</label>
                                  <input type="text" class="form-control" id="judul" placeholder="Masukkan judul" />
                              </div>
                              <div class="form-group">
                                  <label >Keterangan</label>
                                  <input type="text" class="form-control" id="keterangan" placeholder="Masukkan keterangan" />
                              </div> 
                              <button type="submit" class="btn btn-primary"><i class="material-icons left">send</i>Tambah</button>
                          </form>
                  </div>
              </div>
          </div>
            <div className="col m8">
              <div className="row">
                <Product ploduk="Tjinta" harga="80000"/>
                <Product ploduk="Hati" harga="80000"/>
                <Product ploduk="Hati" harga="80000"/>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
