import React, { Component, Fragment } from 'react';
import GridBlock from '../components/GridBlock';
import NewGameButton from '../components/NewGameButton';
import './styles/MainFrame.css';

export default class MainFrame extends Component {
    constructor() {
        super();
        this.state = {
            arrayVerticalBar: Array(25).fill('grey'),
            arrayHorizontalBar: Array(25).fill('#ccc'),
            arrayGridBlock: Array(25).fill('#fff'),
            moves: 0,
            arrayCompletion: this.buildingArray()
        }
    }

    buildingArray = () => {
        const initialArray = [];
        for(let i = 0; i < 25; i++) {
            initialArray.push(i)
        }
        const newArray = [];
        initialArray.forEach((value, index) => {
            if(index === 4 || index === 9 || index === 14 || index >= 19) {
                return;
            } else {
                newArray.push([index, index+1, index, index+5])
            }
        })
        return newArray;
    }

    restart = () => {
        this.setState({
            arrayVerticalBar: Array(25).fill('grey'),
            arrayHorizontalBar: Array(25).fill('#ccc'),
            arrayGridBlock: Array(25).fill('#fff'),
            moves: 0,
            arrayCompletion: this.buildingArray()  
        })
    }

    boardArrayBuilder = () => {
        const initialArray = [];
        for(let i = 0; i < 25; i++) {
            initialArray.push(i)
        }
        return initialArray
    }

    renderGrid = (arr) => {
        return arr.map((value, index) => {
            if(index === 4 || index === 9 || index === 14 || index === 19) {
                return (
                    <GridBlock
                        key={index}
                        displayTop="none"
                        display="none"
                        verticalIndex={value}
                        horizontalIndex={value}
                        clickTop={this.clickTop} 
                        clickLeft={this.clickLeft} 
                        fillBlock={this.state.arrayGridBlock[value]}
                        fillInColourTop={this.state.arrayHorizontalBar[value]}
                        fillInColourLeft={this.state.arrayVerticalBar[value]}               
                    />
                )
            }
            if(index > 19 && index < arr.length - 1) {
                return (
                    <GridBlock
                        key={index}
                        displayLeft="none"
                        display="none"
                        verticalIndex={value}
                        horizontalIndex={value}
                        clickTop={this.clickTop} 
                        clickLeft={this.clickLeft} 
                        fillBlock={this.state.arrayGridBlock[value]}
                        fillInColourTop={this.state.arrayHorizontalBar[value]}
                        fillInColourLeft={this.state.arrayVerticalBar[value]}               
                    />
                )
            }
            if(index === 24) {
                return (
                    <GridBlock
                        key={index}
                        displayLeft="none"
                        display="none"
                        displayTop="none"
                        verticalIndex={value}
                        horizontalIndex={value}
                        clickTop={this.clickTop} 
                        clickLeft={this.clickLeft} 
                        fillBlock={this.state.arrayGridBlock[value]}
                        fillInColourTop={this.state.arrayHorizontalBar[value]}
                        fillInColourLeft={this.state.arrayVerticalBar[value]}               
                    />
                )
            }
            return (               
                <GridBlock
                    key={value}
                    verticalIndex={value}
                    horizontalIndex={value}
                    clickTop={this.clickTop} 
                    clickLeft={this.clickLeft} 
                    fillBlock={this.state.arrayGridBlock[value]}
                    fillInColourTop={this.state.arrayHorizontalBar[value]}
                    fillInColourLeft={this.state.arrayVerticalBar[value]}               
                />
            )
        })
    }

    checkWinner = () => {
        const result = this.state.arrayGridBlock;
        const playerBlue = [];
        const playerRed = [];
        result.forEach(value => {
            if(value === "blue") {
                playerBlue.push(value);
            } else if (value === "red") {
                playerRed.push(value);
            }
        });
        if((playerBlue.length + playerRed.length) === 16) {
            if(playerBlue.length > playerRed.length) {
                setTimeout(function() {
                    alert(`the winner is player blue with ${playerBlue.length} against ${playerRed.length}`)
                }, 300)
            } else if(playerRed.length > playerBlue.length) {
                setTimeout(function() {
                    alert(`the winner is player red with ${playerRed.length} against ${playerBlue.length}`)
                }, 300)
            } else if(playerRed.length === playerBlue.length) {
                setTimeout(function() {alert(`it is a draw`)}, 300)
            }
        }
    }

    clickLeft = e => { 
        if (this.state.arrayVerticalBar[e.target.dataset.bar] === 'grey') {
            const newArr = [...this.state.arrayVerticalBar];
            newArr[e.target.dataset.bar] = this.state.moves % 2 === 0 ? "rgba(0, 0, 255, 0.8)" : "rgba(255, 0, 0, 0.8)";
            this.setState(
                {
                    arrayVerticalBar: newArr,
                    moves: this.state.moves + 1
                },
                () => this.pointsCounting()
            )       
        }
    }

    clickTop = e => {  
        if (this.state.arrayHorizontalBar[e.target.dataset.bar] === '#ccc') {           
            const newArr = [...this.state.arrayHorizontalBar];
            newArr[e.target.dataset.bar] = this.state.moves % 2 === 0 ? "rgba(0, 0, 255, 0.8)" : "rgba(255, 0, 0, 0.8)";
                this.setState(
                {
                    arrayHorizontalBar: newArr,
                    moves: this.state.moves + 1
                },               
                () => this.pointsCounting()
                ) 
            } 
    }

    pointsCounting = () => {
        let counts = this.boxFillingConditions();
        if(counts.length === 2) {
            if(counts[0].value === "blue" || counts[1].value === "blue") {
                const newArr = [...this.state.arrayGridBlock];
                newArr[counts[0].index] = "blue";
                newArr[counts[1].index] = "blue";
                this.setState({
                    arrayGridBlock: newArr,
                    moves: this.state.moves - 1
                },
                () => this.checkWinner()
                )
            } else if(counts[0].value === "red" || counts[1].value === "red") {
                const newArr = [...this.state.arrayGridBlock];
                newArr[counts[0].index] = "red";
                newArr[counts[1].index] = "red";
                this.setState({
                    arrayGridBlock: newArr,
                    moves: this.state.moves - 1
                },
                () => this.checkWinner()
                )           
            }
        } else if(counts.length === 1) {
            if(counts[0].value === "blue") {
                const newArr = [...this.state.arrayGridBlock];
                newArr[counts[0].index] = "blue";
                this.setState({
                    arrayGridBlock: newArr,
                    moves: this.state.moves - 1
                },
                () => this.checkWinner()
                )
            } else if(counts[0].value === "red") {
                const newArr = [...this.state.arrayGridBlock];
                newArr[counts[0].index] = "red";
                this.setState({
                    arrayGridBlock: newArr,
                    moves: this.state.moves - 1
                },
                () => this.checkWinner()
                )           
            }
        }

    }

    boxFillingConditions = () => {
        const boxFilled = this.state.arrayCompletion;
        let filled = [];
        let arrayHorizontal = this.state.arrayHorizontalBar;
        let arrayVertical = this.state.arrayVerticalBar;
        let arrayGrid = this.state.arrayGridBlock;
        let moveNumber = this.state.moves;
        boxFilled.forEach(element => {   
            if(arrayGrid[element[0]] === "red" || arrayGrid[element[0]] === "blue") {
                return;
            } else if (
                arrayVertical[element[0]] !== "grey" &&
                arrayVertical[element[1]] !== "grey" &&                
                arrayHorizontal[element[2]] !== "#ccc" &&
                arrayHorizontal[element[3]] !== "#ccc"
                ) {
                    filled.push({
                            value: moveNumber % 2 === 0 ? "red" : "blue",
                            index: element[0]
                        })
            }   
        }) 
        return filled;
    }

  render() {
    const boardArray = this.boardArrayBuilder();  
    return (
      <div className="mainframe">
        <Fragment>
            {this.renderGrid(boardArray)}
        </Fragment>
        <NewGameButton restart={this.restart} />
      </div>
    )
  }
}

