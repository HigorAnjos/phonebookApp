import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Main from './pages/Main';
import Newcontact from './pages/Newcontact';
import Profile from './pages/Profile';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Route
      { ...rest }
      render={ (props) => (isAuthenticated
        ? <Component { ...props } />
        : <Redirect to={ { pathname: '/', state: { from: props.location } } } />) }
    />
  );
}

// eslint-disable-next-line react/no-multi-comp
class Approuter extends React.Component {
  render() {
    return (
      <ThemeProvider theme={ defaultTheme }>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/profile" component={ Profile } />
            <PrivateRoute path="/newcontact" component={ Newcontact } />
            <PrivateRoute path="/main" component={ Main } />
            <Route path="/" render={ (props) => <Home { ...props } /> } />
          </Switch>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    );
  }
}

export default Approuter;
