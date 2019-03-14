import React, { Component } from 'react';
import MainFrame from './containers/MainFrame';
import StartPage from './containers/StartPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      startingPage: true,
      rowNumber: 4,
      columnNumber: 4
    }
  }

  startClick = () => {
    this.setState({
      startingPage: false
    })
  }

  resetClick = () => {
    this.setState({
      startingPage: true
    })
  }

  handleChangeRow = (e) => {
    const inputValue = e.target.value;
    this.setState({
        rowNumber: inputValue,
    })
}

  handleChangeColumn = (e) => {
      const inputValue = e.target.value;
      this.setState({
          columnNumber: inputValue,
      })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.startingPage ? 
          <StartPage          
            startClick={this.startClick} 
            rowValueChange={e => this.handleChangeRow(e)}
            columnValueChange={e => this.handleChangeRow(e)}
          /> : 
          <MainFrame 
            reset={this.resetClick}
            rowValue={this.state.rowNumber}
            columnValue={this.state.columnNumber}
          />
        }          
      </div>
    );
  }
}

export default App;
