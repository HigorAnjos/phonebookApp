import React from 'react';
import Home from './pages/Home'
import { BrowserRouter, Route } from 'react-router-dom';

class Approuter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ Home } />
      </BrowserRouter>
    );
  }
}

export default Approuter;