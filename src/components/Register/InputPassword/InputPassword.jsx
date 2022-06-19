import React from 'react';
import { string, func } from 'prop-types';
import hasPasswordError from './hasPasswordError';

class InputPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      isValid: '',
    };
  }

  validation = () => {
    const { fildPassword, setValidation, isPasswordValid } = this.props;
    const passwordError = hasPasswordError(fildPassword);
    this.setState({ isValid: passwordError || 'ok' }, () => {
      if (!passwordError) {
        setValidation(true, isPasswordValid);
      } else {
        setValidation(false, isPasswordValid);
      }
    });
  }

  render() {
    const { fildPassword, handleChange } = this.props;
    const { isValid } = this.state;

    return (
      <div>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="password"
            name="fildPassword"
            value={ fildPassword }
            onChange={ handleChange }
            onBlur={ this.validation }
          />
        </label>
        <div id="passwordMsgError">
          {isValid}
        </div>
      </div>
    );
  }
}

InputPassword.propTypes = {
  fildPassword: string.isRequired,
  handleChange: func.isRequired,
  isPasswordValid: string.isRequired,
  setValidation: func.isRequired,
};

export default InputPassword;
