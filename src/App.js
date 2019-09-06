import React from 'react';
import queryString from 'query-string';

import ButtonsHolder from './ButtonsHolder/ButtonsHolder';
import Donate from './Donate';
import EnterName from './EnterName';
import Heading from './Heading';
import ManOfMen from  './ManOfMen/ManOfMen';
import SocialLinks from './SocialLinks';
import MemoryInput from './MemoryInput/MemoryInput';

import './App.css';
import 'antd/dist/antd.css';

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
      selectedData: [],
      captureName: true,
    }
    this.memorySubmit = this.memorySubmit.bind(this);
    this.captureName = this.captureName.bind(this);
  }

  componentDidMount() {
    const id = getID();
    if (id) {
      this.setState({
        id,
        name: names[id],
        captureName: !id,
      })
    } 
  }

  async captureName(name) {
    this.setState({
      captureName: !name,
      name,
    });

    await new Promise((res) => setTimeout(res, 2000));
    console.log('update API with name');
  }

  memorySubmit(value) {
    this.setState(state => {
      let updatedArray = [];
      const isPresent = !!state.selectedData.find(item => item.name === value.name)
      debugger;
      if (isPresent) {
        updatedArray = state.selectedData.filter(item => item.name !== value.name);
      } else {
        updatedArray = state.selectedData.concat(value);
      }
      return {
        selectedData: updatedArray,
      }
    }, async () => {
      await new Promise((res) => setTimeout(res, 2000));
      console.log('update API with selected values');
    });
  }

  render() {

    const { name, captureName, selectedData } = this.state;

    if (captureName) {
      return <EnterName eventHandler={this.captureName} />
    }
    
    return (
      <div className="App">
        <Heading name={name} />
        <ButtonsHolder memorySubmit={this.memorySubmit} />
        <ManOfMen tags={selectedData} />
        <Donate />
        <SocialLinks />
      </div>
    );
  }
}

export default App;
