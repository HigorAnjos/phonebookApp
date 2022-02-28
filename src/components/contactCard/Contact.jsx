import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  render() {
    const { name, phone, email } = this.props;
    return (
      <div>
        <div class="card__container">
          <h2 class="card__header">{name}</h2>
          <h3>{phone}</h3>
          <p class="card__info">{email}</p>
        </div>
      </div>
    );
  }
}

export default Contact;
