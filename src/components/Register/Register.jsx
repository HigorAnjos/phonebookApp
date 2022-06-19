import React from 'react';

import InputEmail from './InputEmail/InputEmail';
import InputName from './InputName/InputName';
import InputPassword from './InputPassword/InputPassword';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fildName: '',
      fildEmail: '',
      fildPassword: '',
      isNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  setValidation = (validation, fild) => {
    this.setState({
      [fild]: validation,
    });
  }

  render() {
    const {
      fildName,
      fildEmail,
      fildPassword,
      isNameValid,
      isEmailValid,
      isPasswordValid,
    } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <br />
        <form>
          <InputName
            fildName={ fildName }
            handleChange={ this.handleChange }
            isNameValid="isNameValid"
            setValidation={ this.setValidation }
          />
          <br />
          <InputEmail
            fildEmail={ fildEmail }
            handleChange={ this.handleChange }
            isEmailValid="isEmailValid"
            setValidation={ this.setValidation }
          />
          <br />
          <InputPassword
            fildPassword={ fildPassword }
            handleChange={ this.handleChange }
            isPasswordValid="isPasswordValid"
            setValidation={ this.setValidation }
          />
          <br />
          <button
            type="submit"
            disabled={ !isNameValid || !isEmailValid || !isPasswordValid }
          >
            Cadastre-se
          </button>
        </form>
      </div>

    );
  }
}

export default Register;
