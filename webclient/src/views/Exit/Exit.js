import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Exit.css'
const Exit = () => {

  const history = useHistory()

  function playAgainClicked(){
    history.push('/');
  }

  return (
    <div className="App-Exit">
      <span>Mischief Managed!</span>
      <span>Your Score: 5124</span>
      <Button onClick={playAgainClicked}>Play Again</Button>
    </div>
  );
};

export default Exit;