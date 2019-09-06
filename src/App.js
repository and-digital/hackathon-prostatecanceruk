import React, {useState} from 'react';
import ButtonsHolder from './ButtonsHolder/ButtonsHolder';
import ManOfMen from  './ManOfMen/ManOfMen';
import Donate from './Donate';
import Heading from './Heading';
import SocialLinks from './SocialLinks';

import './App.css';

function App() {

  const [selectedData, setSelectedData] = useState(null);

  const clickHandler = () => {
    setSelectedData('test');
    console.log(selectedData);
  };

  return (
    <div className="App">
      <Heading name="David" />
      <Donate />
      <ButtonsHolder clickHandler={clickHandler} />
      <ManOfMen />
      <SocialLinks />
    </div>
  );
}

export default App;
