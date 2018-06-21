import React, { Component } from 'react';

import Header from './header';

import Tasks from './tasks';

import './styles/styles.css';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Header/>
        <Tasks/>
      </div>
    );
  }
}

export default App;
