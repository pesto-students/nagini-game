import React from 'react';
import './Game.css';
import logo from '../../assests/nagini-logo-final.png'
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router-dom';

const arr = Array(144).fill(0);

const Game = () => {

  const history = useHistory()

  function onLeaveClicked(){
    history.push('/exit')
  }
  
  return (
    <div className="App-Game">
      <div className="game-panel">
        <img className="game-logo" src={logo} alt="nagini" height="200px" />
        <div className="game-link"> Game Link : https://nagini.play/abcde</div>
        <Button onClick={onLeaveClicked}>Leave</Button>
        <div className="game-score">
          Score: <span>1234</span>
        </div>
        <div className="game-level">
          Level: <span>12</span>
        </div>

        <div className="game-topscores">
          <span className="topscores-heading">Top Scores</span>
          <span>5123 - (1st Dec)</span>
          <span>4234 - (1st Dec)</span>
          <span>3567 - (1st Dec)</span>
          <span>2456 - (1st Dec)</span>
        </div>
      </div>

      <div className="game-grid">
        {arr.map((v) => (
          <div></div>
        ))}
      </div>
    </div>
  );
};

export default Game;