import React from 'react';
import { useHistory } from 'react-router-dom';
import './Init.css'

const Init = () => {

  const history = useHistory();

  setTimeout(() => {
    history.push('/login')
  }, 3000);

  return (
    <div className="App-Init">
      <span>I solemnly swear that I am up to no good</span>
    </div>
  );
};

export default Init;