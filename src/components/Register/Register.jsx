import React from 'react';

import InputEmail from './InputEmail/InputEmail';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fildName: '',
      fildEmail: '',
      fildPassword: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fildName, fildEmail, fildPassword } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              id="name"
              type="text"
              name="fildName"
              value={ fildName }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <br />
          <InputEmail
            fildEmail={ fildEmail }
            handleChange={ this.handleChange }
          />
          <br />
          <br />
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              type="password"
              name="fildPassword"
              value={ fildPassword }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <br />
          <button type="submit">Cadastre-se</button>
        </form>
      </div>

    );
  }
}

export default Register;
