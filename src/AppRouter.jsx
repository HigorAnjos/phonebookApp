import React, { Component } from 'react';
import Home from './pages/Home'
import Main from './pages/Main'
import Newcontact from './pages/Newcontact'
import Profile from './pages/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

function PrivateRoute({component: Component, ...rest}) {

  const { isAuthenticated } = useSelector(state => state.auth)

  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated ? 
        <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      } />
  );
}

class Approuter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/profile" component={ Profile } />
          <PrivateRoute path="/newcontact" component={ Newcontact } />
          <PrivateRoute path="/main" component={ Main } />
          <Route path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Approuter;