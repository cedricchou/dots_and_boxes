import React, { Component } from 'react';
import MainFrame from './containers/MainFrame';
import NewGameButton from './containers/NewGameButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainFrame />
        <NewGameButton />
      </div>
    );
  }
}

export default App;
