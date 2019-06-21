import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchAutorization } from '../../redux/action';
import { withDataServer } from '../hoc';

import ErrorMessage from '../error-message';

import './index.css';

class LoginPage extends React.Component {
  state = {
    login: '',
    password: ''
  };


  handleChangeLogin = (event) => {
    this.setState({login: event.target.value});
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = () => {
    this.props.fetchAutorization(this.state);
  }

  render(){
    const {isLoged, message } = this.props;
    const { login, password } = this.state;
    if (isLoged) return <Redirect to="/profile" />;
    const errorMessage = (message) ? <ErrorMessage message={message} /> : null;
    return(
      <div className="login">
        { errorMessage }
        <input type="text" value={login} onChange={this.handleChangeLogin} placeholder="Login"/>
        <input type="number" value={password} onChange={this.handleChangePassword} placeholder="Password"/>
        <button onClick={this.handleSubmit}>Авторизоваться</button>
      </div>
    );
  }
}

const mapStateToProps = ({isLoged, error: { message }}) => {
  return { isLoged, message};
};

const mapDispatchToProps = (dispatch, { server }) => {
  return {
    fetchAutorization: fetchAutorization(dispatch, server)
  };
};

export default withDataServer()(
  connect(mapStateToProps,mapDispatchToProps)(LoginPage)
);
