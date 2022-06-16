import React from 'react';
import { connect } from 'react-redux';
import { actionsCreators } from '../../redux/actions';
import api from '../../services/axios';
import { setToken } from '../../services/localStorage';

class Login extends React.Component {
  constructor () {
    super();

    this.state = {
      fildEmail: 'george@gmail.com',
      fildPassword: '1234',
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSingIn = async (event) => {
    event.preventDefault();

    const { setLogin } = this.props;
    try {
      const { data } = await api.post('/user', { email: this.state.fildEmail, password: this.state.fildPassword });
      if (data.token) {
        setToken(data.token);
        setLogin();
        this.props.router.history.push('/main');
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
          >Entrar</button>
        </form>
      </>
    );
  }
}

const mapDispactchToProps = (dispatch) => ({
  setLogin: () => dispatch(actionsCreators.setLogin()),
});


export default connect(null, mapDispactchToProps)(Login);
