import React from 'react';
import Home from './pages/Home'
import Main from './pages/Main'
import Newcontact from './pages/Newcontact'
import Profile from './pages/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Approuter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/profile" component={ Profile } />
          <Route path="/newcontact" component={ Newcontact } />
          <Route path="/main" component={ Main } />
          <Route path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Approuter;