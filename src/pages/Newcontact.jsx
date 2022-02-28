import React from 'react';
import { connect } from 'react-redux';
import { actionsCreators } from '../redux/actions'

class Newcontact extends React.Component {
  constructor() {
    super();

    this.state = {
      fildName: '',
      fildPhone: '',
      fildEmail: '',
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSave = (event) => {
    event.preventDefault();
    const { fildName, fildPhone, fildEmail } = this.state;
    const { saveContact } = this.props;
    const contact = {
      name: fildName,
      phone: fildPhone,
      email: fildEmail,
    }
    saveContact(contact);
  }

  render() {
    const { fildName, fildPhone, fildEmail } = this.state;
    return (
      <div>
        <h1>Adicionar novo contato</h1>
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
          <label htmlFor="phone">
            Phone:
            <input
              id="phone"
              placeholder="phone"
              type="phone"
              name="fildPhone"
              value={ fildPhone }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            email:
            <input
              id="email"
              placeholder="email"
              type="email"
              name="fildEmail"
              value={ fildEmail }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleSave }
          >Adicionar</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveContact: (contact) => dispatch(actionsCreators.setContact(contact))
})

export default connect(null, mapDispatchToProps)(Newcontact);