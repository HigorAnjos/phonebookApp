import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  render() {
    const { name, phone, email } = this.props;
    return (
      <div>
        <div className="card__container">
          <h2 className="card__header">{name}</h2>
          <h3>{phone}</h3>
          <p className="card__info">{email}</p>
        </div>
      </div>
    );
  }
}

export default Contact;
