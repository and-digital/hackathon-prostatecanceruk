import React from 'react';
import queryString from 'query-string';

import ButtonsHolder from './ButtonsHolder/ButtonsHolder';
import Donate from './Donate';
import Heading from './Heading';
import ManOfMen from  './ManOfMen/ManOfMen';
import MusicTag from './MusicTag/MusicTag';
import CookingTag from './CookingTag/CookingTag';
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
      selectedData: [],
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

  clickHandler(e) {
    const value = e.target.dataset.val
    this.setState(state => {
      let updatedArray;
      if (state.selectedData.includes(value)) {
        updatedArray = state.selectedData.filter(item => item !== value);
      } else {
        updatedArray = state.selectedData.concat(value);
      }
      return {
        selectedData: updatedArray,
      }
    });
  }

  render() {
    console.log('selectedData: ', this.state.selectedData)
    return (
      <div className="App">
        <Heading name={this.state.name} />
        <ButtonsHolder
          clickHandler={this.clickHandler}
          dataValMusic={{name: 'music'}}
          dataValCooking={{name: 'cooking'}}
        />
        <ManOfMen />
        {/* {this.isMusicSelected && (<MusicTag />)}
        {this.isCookingSelected && (<CookingTag />)} */}
        <Donate />
        <SocialLinks />
      </div>
    );
  }
}

export default App;
