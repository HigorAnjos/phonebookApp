import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/profile">Perfil</Link></li>
          <li><Link to="/newcontact">Adicionar novo contato</Link></li>
        </ul>
        <h1> Meus Contatos</h1>
      </div>
    );
  }
}

export default Main;