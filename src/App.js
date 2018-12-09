import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import { AppHeader } from './components/AppHeader.js';
import TextField from '@material-ui/core/TextField';
import AppTable from './components/AppTable.js';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        resultOpened: false,
        payment: ''
      };
    }


  consider(event) {
    event.preventDefault(); //Не перегружает страницу при сабмите
    console.log('Указана ставка ' + this.state.payment)
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({payment: event.target.value});
  }

  render() {
    return (
      <section>
        <div>
          <AppHeader/>
          <form onSubmit={this.consider.bind(this)}>
            <img src={logo} className="logo" alt="logo" />
            <TextField type="text" label="Ставка" variant="outlined"
              id="custom-css-outlined-input" onChange={this.handleChange.bind(this)}/>

          <Button type="submit"
             variant="contained" color="primary"
             id="btnCount">Посчитать</Button>
          </form>
        </div>

        <div id="result" className="result">
          <AppTable payment={this.state.payment} />
        </div>
      </section>
    );
  }
}

export default App;
