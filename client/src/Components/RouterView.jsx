import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import EntryForm from './Entry';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class RouterView extends Component {
  shouldComponentUpdate({ location }) {
    if (location.pathname === this.props.location.pathname) {
      return false;
    }
    return true;
  }

  render() {
    const { location } = this.props;
    return (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="container page"
          timeout={200}
        >
          <Switch location={location}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Entry" component={EntryForm} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default RouterView;
