import React, { Component } from 'react';
import '../App.css';
import InstaLogo from '../components/InstaLogo';
import LoginForm from '../components/LoginForm';

class Login extends Component {


  render() {
    return (
      <div className="login-box box-border">
        <InstaLogo img="/images/logo_text.png"/>
        <LoginForm />
        <div className="findPassword">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    );
  }
}

export default Login;
