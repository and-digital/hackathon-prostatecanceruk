import React from 'react';
import queryString from 'query-string';
import Donate from './Donate';
import Heading from './Heading';
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
    }
  }

  componentDidMount() {
    const id = getID();

    this.setState({
      id,
      name: names[id],
    })
  }

  render() {
    return (
      <div className="App">
        <Heading name={this.state.name} />
        <Donate />
        <SocialLinks />
      </div>
    );
  }
}

export default App;
