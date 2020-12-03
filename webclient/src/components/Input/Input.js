import React from 'react';
import './Input.css'
const Input = (props) => {

  function onFocus(event){
    props.onFocus && props.onFocus(event);
  }

  function onChange(event) {
    props.onChange && props.onChange(event);
  }

  function onBlur(event) {
    props.onBlur && props.onBlur(event);
  }

  return (
    <div className="App-Input">
      <input onFocus={onFocus} onBlur={onBlur} onChange={onChange} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;