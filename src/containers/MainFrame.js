import React, { Component, Fragment } from 'react';
import GridBlock from '../components/GridBlock';
import GameBoard from '../components/GameBoard';
import './styles/MainFrame.css';

export default class MainFrame extends Component {
    constructor() {
        super();
        this.state = {
            fillInColourTop: '#cccccc',
            fillInColourLeft: 'grey',
            moves: 0       
        }
    }

    clickLeft = e => {         
        this.setState(
            {
                fillInColourLeft: this.state.moves % 2 === 0 ? "blue" : "red",
                moves: this.props.moves + 1
            }
        )       
    }

    clickTop = e => {      
        this.setState(
            {
                fillInColourTop: this.state.moves % 2 === 0 ? "blue" : "red",
                moves: this.state.moves + 1
            }
        )   
    }

  render() {
    return (
      <div className="mainframe">
        <Fragment>
            <GridBlock
                rowIndex={0} 
                columnIndex={0}
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.fillInColourTop}
                fillInColourLeft={this.state.fillInColourLeft}
            />
            <GridBlock 
                rowIndex={0} 
                columnIndex={1}
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.fillInColourTop}
                fillInColourLeft={this.state.fillInColourLeft}
            />
            <GridBlock
                rowIndex={0} 
                columnIndex={2} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.fillInColourTop}
                fillInColourLeft={this.state.fillInColourLeft}
            />
            <GridBlock 
                rowIndex={0} 
                columnIndex={3}
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.fillInColourTop}
                fillInColourLeft={this.state.fillInColourLeft}
            />
            <GridBlock 
                rowIndex={0} 
                columnIndex={4}
                displayTop="none" 
                display="none" 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.fillInColourTop}
                fillInColourLeft={this.state.fillInColourLeft}
            />
        </Fragment>
        <Fragment>
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock displayTop="none" display="none" />
        </Fragment>
        <Fragment>
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock displayTop="none" display="none" />
        </Fragment>
        <Fragment>
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock displayTop="none" display="none" />
        </Fragment>
        <Fragment>
            <GridBlock displayLeft="none" display="none" />
            <GridBlock displayLeft="none" display="none" />
            <GridBlock displayLeft="none" display="none" />
            <GridBlock displayLeft="none" display="none" />
            <GridBlock displayTop="none" display="none" displayLeft="none" />
        </Fragment>
      </div>
    )
  }
}

