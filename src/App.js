import React from 'react';
import Donate from './Donate';
import Heading from './Heading';
import SocialLinks from './SocialLinks';

import './App.css';

function App() {
  return (
    <div className="App">
      <Heading name="David" />
      <Donate />
      <SocialLinks />
    </div>
  );
}

export default App;
