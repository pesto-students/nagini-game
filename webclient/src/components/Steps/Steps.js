import React, { useEffect, useState } from "react";
import "./Steps.css";
import leftStep from "../../assests/steps-left.png";
import rightStep from "../../assests/steps-right.png";
import nameTag from "../../assests/map-name.png";

const Steps = (props) => {
  const [positions, setPositions] = useState([
    [300, 100, true], //todo true for left, refactor
    [300, 100],
    [300, 100, true],
    [300, 100],
  ]);

  const [isLeftFootFirst, setIsLeftFootFirst] = useState(true);
  const [nextPositionIndex, setNextPositionIndex] = useState(0);

  useEffect(() => {
    const previousPositions = [...positions];
    previousPositions[nextPositionIndex] = [...props.position, isLeftFootFirst];
    setPositions(previousPositions);
    setNextPositionIndex((nextPositionIndex + 1) % 4);
    setIsLeftFootFirst(!isLeftFootFirst);

// eslint-disable-next-line
  }, [props]);


  return (
    <div className="App-Steps">
      {positions && positions.map((position,index)=>{
        if(index === nextPositionIndex){
          return null;
        }
        return (
        <div className="steps-feet">
          {index%2 === 0 ? <img
            className="steps-foot steps-left"
            src={leftStep}
            alt="left"
            style={{ transform: `translate(${position[0]}px,${position[1]}px)`}}
          /> : <img
            className="steps-foot steps-right"
            src={rightStep}
            alt="right"
            style={{ transform: `translate(${position[0]}px,${position[1]}px)` }}
          />}
        </div>
    )})}
      <div className="steps-name" style={{transform: `translate(${props.position[0]+20}px, ${props.position[1]-100}px)`}}>
        <img className="steps-name-base" src={nameTag} alt="name" />
        <div className="steps-name-text"> {props.name} </div>
      </div>
    </div>
  );
};

export default Steps;
