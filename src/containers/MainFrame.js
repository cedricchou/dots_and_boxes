import React, { Component, Fragment } from 'react';
import GridBlock from '../components/GridBlock';
import NewGameButton from '../components/NewGameButton';
import './styles/MainFrame.css';

export default class MainFrame extends Component {
    constructor() {
        super();
        this.state = {
            arrayVerticalBar: Array(24).fill('grey'),
            arrayHorizontalBar: Array(24).fill('#ccc'),
            arrayGridBlock: Array(24).fill('#fff'),
            moves: 0,
            arrayCompletion: this.buildingArray()      
        }
    }

    buildingArray = () => {
        // the element indexes are as follow: 
        // [vertical left bar, vertical right bar, 
        // horizontal top bar, horizontal bottom bar, box number]
        const newArray = [
            [0, 1, 0, 5, 0],
            [1, 2, 1, 6, 1],
            [2, 3, 2, 7, 2],
            [3, 4, 3, 8, 3],
            [5, 6, 5, 10, 5],
            [6, 7, 6, 11, 6],
            [7, 8, 7, 12, 7],
            [8, 9, 8, 13, 8],
            [10, 11, 10, 15, 10],
            [11, 12, 11, 16, 11],
            [12, 13, 12, 17, 12],
            [13, 14, 13, 18, 13],
            [15, 16, 15, 20, 15],
            [16, 17, 16, 21, 16],
            [17, 18, 17, 22, 17],
            [18, 19, 18, 23, 18],
        ]
        return newArray;
    }

    restart = () => {
        this.setState({
            arrayVerticalBar: Array(24).fill('grey'),
            arrayHorizontalBar: Array(24).fill('#ccc'),
            arrayGridBlock: Array(24).fill('#fff'),
            moves: 0,
            arrayCompletion: this.buildingArray()  
        })
    }

    renderGrid = (arr, top = "block", left = "block", box= "block") => {
        return arr.map((value, index) => {
            if(index === arr.length-1) {
                return (
                    <GridBlock
                    key={index}
                    displayTop="none"
                    displayLeft={left}
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
            return (               
                <GridBlock
                    key={value}
                    displayTop={top}
                    displayLeft={left}
                    display={box}
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
            newArr[e.target.dataset.bar] = this.state.moves % 2 === 0 ? "blue" : "red";
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
            newArr[e.target.dataset.bar] = this.state.moves % 2 === 0 ? "blue" : "red";
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
            if(arrayGrid[element[4]] === "red" || arrayGrid[element[4]] === "blue") {
                return;
            } else if (
                arrayVertical[element[0]] !== "grey" &&
                arrayVertical[element[1]] !== "grey" &&                
                arrayHorizontal[element[2]] !== "#ccc" &&
                arrayHorizontal[element[3]] !== "#ccc"
                ) {
                    filled.push({
                            value: moveNumber % 2 === 0 ? "red" : "blue",
                            index: element[4]
                        })
            }   
        }) 
        return filled;
    }

  render() {
    return (
      <div className="mainframe">
        <Fragment>
            {this.renderGrid([0,1,2,3,4])}
        </Fragment>
        <Fragment>
            {this.renderGrid([5,6,7,8,9])}
        </Fragment>
        <Fragment>
            {this.renderGrid([10,11,12,13,14])}
        </Fragment>
        <Fragment>
            {this.renderGrid([15,16,17,18,19])}
        </Fragment>
        <Fragment>
            {this.renderGrid([20,21,22,23,24], "block", "none", "none")}           
        </Fragment>
        <NewGameButton restart={this.restart} />
      </div>
    )
  }
}

