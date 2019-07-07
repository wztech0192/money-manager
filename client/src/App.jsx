import React, { Component } from 'react';
import Header from './components/Layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Layout/Container';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from '@date-io/moment';
import store from './stores';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={moment}>
          <Router>
            <Header />
            <Container />
          </Router>
        </MuiPickersUtilsProvider>
      </Provider>
    );
  }
}

export default App;
