import React from 'react';

const ButtonsHolder = ({clickHandler}) => {
  return (
    <div className="buttons-holder">
      <button className="button" onClick={clickHandler}>Music</button>
      <button className="button" onClick={clickHandler}>Cooking</button>
    </div>
  );
};

export default ButtonsHolder;
