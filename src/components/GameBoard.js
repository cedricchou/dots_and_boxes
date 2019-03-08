import React, { Component } from 'react';
import GridBlock from './GridBlock';
import './styles/GameBoard.css';

// finish writing the function to build the grid size based on user inputs
export default class GameBoard extends Component {
    gridRendering = props => {}

  render() {
    return (
      <div className="gameboard">
        {this.gridRendering()}
      </div>
    )
  }
}
