import React from 'react';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';
import { actionsCreators } from '../../redux/actions';
import api from '../../services/axios';
import { setToken } from '../../services/localStorage';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      fildEmail: 'george@gmail.com',
      fildPassword: '1234',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSingIn = async (event) => {
    event.preventDefault();

    const { setLogin, router: { history } } = this.props;
    const { fildEmail, fildPassword } = this.state;
    try {
      const { data } = await api.post('/user', {
        email: fildEmail,
        password: fildPassword,
      });
      if (data.token) {
        setToken(data.token);
        setLogin();
        history.push('/main');
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { fildEmail, fildPassword } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            <input
              id="email"
              placeholder="email"
              type="email"
              name="fildEmail"
              value={ fildEmail }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              id="password"
              placeholder="senha"
              type="password"
              name="fildPassword"
              value={ fildPassword }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleSingIn }
          >
            Entrar

          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: () => dispatch(actionsCreators.setLogin()),
});

Login.propTypes = {
  setLogin: func.isRequired,
  router: shape({ history: shape({
    push: func.isRequired,
  }),
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
