import React from 'react';
import { string, func } from 'prop-types';
import hasNameError from './validation';

class InputName extends React.Component {
  constructor() {
    super();
    this.state = {
      isValid: '',
    };
  }

  validation = () => {
    const { fildName } = this.props;
    this.setState({ isValid: hasNameError(fildName) || 'ok' });
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
};

export default InputName;
