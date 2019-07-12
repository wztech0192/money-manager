import React, { Component } from 'react';
import Header from './components/Layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Layout/Container';
import GlobalModal from './components/Modals/GlobalModal';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from '@date-io/moment';
import { connect } from 'react-redux';
import { onUserLogin } from './stores/userStore/userAction';

const mapDispatchToProps = { onUserLogin };

class App extends Component {
  componentDidMount() {
    this.props.onUserLogin({
      email: 'weijie0191@gmail.com',
      password: 'weijiezheng'
    });
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={moment}>
        <Router>
          <Header />
          <Container />
          <GlobalModal />
        </Router>
      </MuiPickersUtilsProvider>
    );
  }
}

export default connect(
  false,
  mapDispatchToProps
)(App);
