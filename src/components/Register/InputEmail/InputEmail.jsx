import React from 'react';
import { func, string } from 'prop-types';
import hasEmailError from './validation';

class InputEmail extends React.Component {
  constructor() {
    super();
    this.state = {
      isValid: '',
    };
  }

  validation = () => {
    const { fildEmail } = this.props;
    this.setState({ isValid: hasEmailError(fildEmail) || 'ok' });
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
};

export default InputEmail;
