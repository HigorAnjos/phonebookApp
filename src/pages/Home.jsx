import React from 'react';
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1> Agenda telefonica </h1>
        <main>
          <section>
            <Login />
          </section>
          <section>
            <Register />
          </section>
        </main>
      </div>
    );
  }
}

export default Home;