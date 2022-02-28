import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/main">Inicio</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
        <li><Link to="/newcontact">Adicionar novo contato</Link></li>
      </ul>
    );
  }
}

export default Header;
