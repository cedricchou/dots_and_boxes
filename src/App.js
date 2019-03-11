import React, { Component } from 'react';
import MainFrame from './containers/MainFrame';
import Draft from './containers/Draft';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MainFrame /> */}
        <Draft />
      </div>
    );
  }
}

export default App;
