import React, { useState } from 'react';

const EnterName = ({ eventHandler }) => {
  const [name, setName] = useState(''); 

  return (
    <div className="enterNameContainer">
      <h1>Who are you creating the page for?</h1>
      <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button className="button" onClick={() => eventHandler(name)}>Submit Name</button>
    </div>
  )
}


export default EnterName;
