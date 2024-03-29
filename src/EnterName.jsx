import React, { useState } from 'react';
import logo from './assets/logo.jpg';

const EnterName = ({ eventHandler }) => {
  const [name, setName] = useState(''); 

  return (
    <div className="enterNameContainer">
      <div>
        <img src={logo} />
        <h1>Who are you creating the page for?</h1>
        <input placeholder="The persons name" className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="button" onClick={() => eventHandler(name)}>Submit Name</button>
      </div>
    </div>
  )
}


export default EnterName;
