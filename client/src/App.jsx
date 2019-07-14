import React, { Component } from 'react';
import Header from './components/Layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Layout/Container';
import GlobalModal from './components/Modals/GlobalModal';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from '@date-io/moment';
import { connect } from 'react-redux';
import { onUserLogin } from './stores/actions/userAction';
import { baseRoute } from './tools/params';
import LoadingIndicator from './components/Utilities/LoadingIndicator';

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
    const { isLogin } = this.props;

    return (
      <>
        {isLogin && (
          <MuiPickersUtilsProvider utils={moment}>
            <Router basename={baseRoute}>
              <Header />
              <Container />
            </Router>
          </MuiPickersUtilsProvider>
        )}
        <GlobalModal />
        <LoadingIndicator hide={isLogin} size={100} />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
