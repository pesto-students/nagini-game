import React from 'react';
import './Button.css'

const Button = (props) => {

  function onClick(){
    props.onClick && props.onClick();
  }

  return (
    <div className="App-Button">
      <button onClick={onClick}>{props.children}</button>
    </div>
  );
};

export default Button;