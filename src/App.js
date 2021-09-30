import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar darkcolor ="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;