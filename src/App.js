import React from 'react';
import queryString from 'query-string';

import ButtonsHolder from './ButtonsHolder/ButtonsHolder';
import Donate from './Donate';
import Heading from './Heading';
import ManOfMen from  './ManOfMen/ManOfMen';
import SocialLinks from './SocialLinks';

import './App.css';

const names = {
  1: 'Pravien',
  2: 'David',
}

function getID() { 
  const { id } = queryString.parse(window.location.search);
  return id;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: null,
      selectedData: null,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const id = getID();

    this.setState({
      id,
      name: names[id],
    })
  }

  clickHandler() {
    this.setState({
      setSelectedData: 'test'
    });
    console.log('here');
  }

  render() {
    return (
      <div className="App">
        <Heading name={this.state.name} />
        <ButtonsHolder clickHandler={this.clickHandler} />
        <ManOfMen />
        <Donate />
        <SocialLinks />
      </div>
    );
  }
}

export default App;
