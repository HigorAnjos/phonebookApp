import React from 'react';
import { string, func } from 'prop-types';
import hasNameError from './hasNameError';

class InputName extends React.Component {
  constructor() {
    super();
    this.state = {
      isValid: '',
    };
  }

  validation = () => {
    const { fildName, isNameValid, setValidation } = this.props;
    const nameError = hasNameError(fildName);
    this.setState({ isValid: hasNameError(fildName) || 'ok' }, () => {
      if (!nameError) {
        setValidation(true, isNameValid);
      } else {
        setValidation(false, isNameValid);
      }
    });
  }

  render() {
    const { isValid } = this.state;
    const { fildName, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            name="fildName"
            value={ fildName }
            onChange={ handleChange }
            onBlur={ this.validation }
          />
        </label>
        <div id="nameMsgError">
          {isValid}
        </div>
      </div>
    );
  }
}

InputName.propTypes = {
  fildName: string.isRequired,
  handleChange: func.isRequired,
  isNameValid: string.isRequired,
  setValidation: func.isRequired,
};

export default InputName;
