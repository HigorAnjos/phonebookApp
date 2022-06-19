import React from 'react';
import { func, string } from 'prop-types';
import hasEmailError from './hasEmailError';

class InputEmail extends React.Component {
  constructor() {
    super();
    this.state = {
      isValid: '',
    };
  }

  validation = () => {
    const { fildEmail, isEmailValid, setValidation } = this.props;
    const emailError = hasEmailError(fildEmail);
    this.setState({ isValid: hasEmailError(fildEmail) || 'ok' }, () => {
      if (!emailError) {
        setValidation(true, isEmailValid);
      } else {
        setValidation(false, isEmailValid);
      }
    });
  }

  render() {
    const { fildEmail, handleChange } = this.props;
    const { isValid } = this.state;

    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            name="fildEmail"
            value={ fildEmail }
            onChange={ handleChange }
            onBlur={ this.validation }
          />
        </label>
        <div id="emailMsgError">
          {isValid}
        </div>
      </div>
    );
  }
}

InputEmail.propTypes = {
  fildEmail: string.isRequired,
  handleChange: func.isRequired,
  isEmailValid: string.isRequired,
  setValidation: func.isRequired,
};

export default InputEmail;
