import React from 'react';

const ButtonsHolder = ({clickHandler}) => {
  return (
    <div className="buttons-holder">
      <h1>Select a Button</h1>
      <button className="option-btn" onClick={clickHandler}>Music</button>
      <button className="option-btn" onClick={clickHandler}>Cooking</button>
    </div>
  );
};

export default ButtonsHolder;
