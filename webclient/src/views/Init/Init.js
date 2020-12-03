import React from 'react';
import { useHistory } from 'react-router-dom';
import './Init.css'
import wand from '../../assests/wand.png'

const Init = () => {

  const history = useHistory();

  setTimeout(() => {
    history.push('/login')
  }, 3000);

  return (
    <div className="App-Init">
      <img className="init-wand" src={wand} alt="wand" />
      <span>I solemnly swear that I am up to no good</span>
    </div>
  );
};

export default Init;