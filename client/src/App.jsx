import React, { Component } from 'react';
import Header from './components/Layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Layout/Container';
import GlobalModal from './components/Modals/GlobalModal';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from '@date-io/moment';
import { connect } from 'react-redux';
import { onUserLogin } from './stores/actions/userAction';
import CircularProgress from '@material-ui/core/CircularProgress';

const mapDispatchToProps = { onUserLogin };
const mapStateToProps = ({ user }) => ({
  isLogin: !!user.token
});

class App extends Component {
  componentDidMount() {
    this.props.onUserLogin({
      email: 'weijie0191@gmail.com',
      password: 'weijiezheng'
    });
    this.setState({ login: true });
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={moment}>
        <Router>
          <Header />
          {this.props.isLogin ? <Container /> : <CircularProgress />}

          <GlobalModal />
        </Router>
      </MuiPickersUtilsProvider>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
