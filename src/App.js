import React, {useState} from 'react';
  import Donate from './Donate';
import ButtonsHolder from './ButtonsHolder/ButtonsHolder';
import ManOfMen from  './ManOfMen/ManOfMen';
import './App.css';

function App() {

  const [selectedData, setSelectedData] = useState(null);

  const clickHandler = () => {
    setSelectedData('test');
    console.log(selectedData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Donate />
      </header>
      <ButtonsHolder clickHandler={clickHandler} />
      <ManOfMen />
    </div>
  );
}

export default App;
