import React, { useEffect, useState } from 'react';
import './Login.css'
import logo from '../../assests/nagini-logo-final.png'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import map from "../../assests/marauders-map.png";
import Steps from '../../components/Steps/Steps';
import { useHistory } from 'react-router-dom';
const Login = () => {
  const history = useHistory();
  const [position, setPositions] = useState([300, 100]);
  // eslint-disable-next-line
  const [joinGameLink, setJoinGameLink] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (position[1] < -window.innerWidth) {
        setPositions([position[0], 0]);
      } else {
        setPositions([position[0], position[1] - 50]);
      }
    }, 600);

    return () => {
      clearInterval(interval);
    };
  });

  function createGameClicked() {
    history.push("/game");
  }

  function joinGameClicked() {
    history.push("/game");
  }

  return (
    <div className="App-login">
      <img className="login-map" src={map} alt="map " />
      <img className="login-logo" src={logo} alt="nagini" height="300px" />
      <div className="login-tag">
        <div>Prove &nbsp; Your &nbsp; Loyalty </div>
        <div>to</div>
        <div>The &nbsp; Dark &nbsp; Lord</div>
      </div>
      <div className="login-create">
        <Button onClick={createGameClicked}>Create Game</Button>
      </div>
      <span className="login-divider">OR</span>
      <div className="login-join">
        <Input
          placeholder="Enter Game Link"
          onChange={(e) => setJoinGameLink(e.target.value)}
        />
        <Button onClick={joinGameClicked}>Join Game</Button>
      </div>

      <div className="login-steps">
        <Steps name={"Harry Potter"} position={position} />
      </div>
    </div>
  );
};

export default Login;