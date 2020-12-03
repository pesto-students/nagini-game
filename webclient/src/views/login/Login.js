import React from 'react';
import './Login.css'
import logo from '../../assests/nagini-logo-final.png'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
const Login = () => {
  return (
    <div className="App-login">
      <img src={logo} alt="nagini" height="300px"/>
      <div className="login-tag">
        <div>Prove &nbsp; Your  &nbsp; Loyalty </div>
        <div>to</div>
        <div>The  &nbsp; Dark  &nbsp; Lord</div>
      </div>
      <div className="login-create">
        <Button>Create Game</Button>
      </div>
      <span className="login-divider">OR</span>
      <div className="login-join">
        <Input />
        <Button>Join Game</Button>
      </div>
    </div>
  );
};

export default Login;