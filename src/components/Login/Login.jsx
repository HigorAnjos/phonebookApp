import React from 'react';

class Login extends React.Component {
  constructor () {
    super();

    this.state = {
      fildEmail: '',
      fildPassword: '',
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSingIn = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { fildEmail, fildPassword } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            <input
              id="email"
              placeholder="email"
              type="email"
              name="fildEmail"
              value={ fildEmail }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              id="password"
              placeholder="senha"
              type="password"
              name="fildPassword"
              value={ fildPassword }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleSingIn }
          >Entrar</button>
        </form>
      </>
    );
  }
}

export default Login;
