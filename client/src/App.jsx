import React, { Component } from 'react';
import Header from './Components/Layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './Components/Layout/Container';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

class App extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router>
          <Header />
          <Container />
        </Router>
      </MuiPickersUtilsProvider>
    );
  }
}

export default App;
