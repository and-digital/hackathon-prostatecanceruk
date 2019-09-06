import React from 'react';


const ButtonsHolder = ({clickHandler, dataValMusic, dataValCooking}) => {
  return (
    <div className="buttons-holder">
      <button className="button" onClick={clickHandler} data-val="music">Music</button>
      <button className="button" onClick={clickHandler} data-val="cooking">Cooking</button>
    </div>
  );
};

export default ButtonsHolder;
