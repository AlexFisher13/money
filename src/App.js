import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { AppHeader } from './components/AppHeader.js'
import TextField from '@material-ui/core/TextField';

class App extends Component {

  consider() {

  }


  render() {
    return (
      <section>
        <div>
          <AppHeader/>
          <form>
          <img src={logo} className="logo" alt="logo" />
          <TextField type="text" label="Ставка" variant="outlined"
            id="custom-css-outlined-input"/>
          <Button type="submit" onClick={this.consider()}
             variant="contained" color="primary"
             id="btnCount">Посчитать</Button>
          </form>
        </div>

        <div id="result">
        </div>
      </section>
    );
  }
}

export default App;
