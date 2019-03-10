import React, { Component, Fragment } from 'react';
import GridBlock from '../components/GridBlock';
import GameBoard from '../components/GameBoard';
import './styles/MainFrame.css';

export default class MainFrame extends Component {
    constructor() {
        super();
        this.state = {
            arrayVerticalBar: Array(24).fill('grey'),
            arrayHorizontalBar: Array(24).fill('#ccc'),
            moves: 0       
        }
    }

    clickLeft = e => { 
        if (this.state.arrayVerticalBar[e.target.dataset.bar] === 'grey') {
            console.log(this.state.arrayVerticalBar)
            const newArr = [...this.state.arrayVerticalBar];
            newArr[e.target.dataset.bar] = this.state.moves % 2 === 0 ? "blue" : "red";
            this.setState(
                {
                    arrayVerticalBar: newArr,
                    moves: this.state.moves + 1
                }
            )       
        }
    }

    clickTop = e => {  
        if (this.state.arrayHorizontalBar[e.target.dataset.bar] === '#ccc') {
            console.log(this.state.arrayHorizontalBar)
            const newArr = [...this.state.arrayHorizontalBar];
            newArr[e.target.dataset.bar] = this.state.moves % 2 === 0 ? "blue" : "red";
                this.setState(
                {
                    arrayHorizontalBar: newArr,
                    moves: this.state.moves + 1
                }
            ) 
        }  
    }

  render() {
    return (
      <div className="mainframe">
        <Fragment>
            <GridBlock
                verticalIndex={0}
                horizontalIndex={0}
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[0]}
                fillInColourLeft={this.state.arrayVerticalBar[0]}
            />
            <GridBlock 
                verticalIndex={1}
                horizontalIndex={1}
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[1]}
                fillInColourLeft={this.state.arrayVerticalBar[1]}
            />
            <GridBlock
                verticalIndex={2}
                horizontalIndex={2}
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[2]}
                fillInColourLeft={this.state.arrayVerticalBar[2]}
            />
            <GridBlock 
                verticalIndex={3}
                horizontalIndex={3}
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[3]}
                fillInColourLeft={this.state.arrayVerticalBar[3]}
            />
            <GridBlock
                verticalIndex={4}
                horizontalIndex={4} 
                displayTop="none" 
                display="none" 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[4]}
                fillInColourLeft={this.state.arrayVerticalBar[4]}
            />
        </Fragment>
        <Fragment>
            <GridBlock 
                verticalIndex={5}
                horizontalIndex={5} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[5]}
                fillInColourLeft={this.state.arrayVerticalBar[5]}
            />
            <GridBlock 
                verticalIndex={6}
                horizontalIndex={6} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[6]}
                fillInColourLeft={this.state.arrayVerticalBar[6]}
            />
            <GridBlock 
                verticalIndex={7}
                horizontalIndex={7} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[7]}
                fillInColourLeft={this.state.arrayVerticalBar[7]}
            />
            <GridBlock 
                verticalIndex={8}
                horizontalIndex={8} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[8]}
                fillInColourLeft={this.state.arrayVerticalBar[8]}
            />
            <GridBlock 
                verticalIndex={9}
                horizontalIndex={9} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[9]}
                fillInColourLeft={this.state.arrayVerticalBar[9]}
                displayTop="none" 
                display="none" 
            />
        </Fragment>
        <Fragment>
            <GridBlock 
                verticalIndex={10}
                horizontalIndex={10} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[10]}
                fillInColourLeft={this.state.arrayVerticalBar[10]}
            />
            <GridBlock 
                verticalIndex={11}
                horizontalIndex={11} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[11]}
                fillInColourLeft={this.state.arrayVerticalBar[11]}
            />
            <GridBlock 
                verticalIndex={12}
                horizontalIndex={12} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[12]}
                fillInColourLeft={this.state.arrayVerticalBar[12]}
            />
            <GridBlock 
                verticalIndex={13}
                horizontalIndex={13} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[13]}
                fillInColourLeft={this.state.arrayVerticalBar[13]}
            />
            <GridBlock 
                verticalIndex={14}
                horizontalIndex={14} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[14]}
                fillInColourLeft={this.state.arrayVerticalBar[14]}
                displayTop="none" 
                display="none" 
            />
        </Fragment>
        <Fragment>
            <GridBlock 
                verticalIndex={15}
                horizontalIndex={15} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[15]}
                fillInColourLeft={this.state.arrayVerticalBar[15]}
            />
            <GridBlock 
                verticalIndex={16}
                horizontalIndex={16} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[16]}
                fillInColourLeft={this.state.arrayVerticalBar[16]}
            />
            <GridBlock 
                verticalIndex={17}
                horizontalIndex={17} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[17]}
                fillInColourLeft={this.state.arrayVerticalBar[17]}
            />
            <GridBlock 
                verticalIndex={18}
                horizontalIndex={18} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[18]}
                fillInColourLeft={this.state.arrayVerticalBar[18]}
            />
            <GridBlock 
                verticalIndex={19}
                horizontalIndex={19} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[19]}
                fillInColourLeft={this.state.arrayVerticalBar[19]}
                displayTop="none" 
                display="none" 
            />
        </Fragment>
        <Fragment>
            <GridBlock 
                verticalIndex={20}
                horizontalIndex={20} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[20]}
                fillInColourLeft={this.state.arrayVerticalBar[20]}
                displayLeft="none" 
                display="none" 
            />
            <GridBlock 
                verticalIndex={21}
                horizontalIndex={21} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[21]}
                fillInColourLeft={this.state.arrayVerticalBar[21]}
                displayLeft="none" 
                display="none" 
            />
            <GridBlock
                verticalIndex={22}
                horizontalIndex={22} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[22]}
                fillInColourLeft={this.state.arrayVerticalBar[22]} 
                displayLeft="none" 
                display="none" 
            />
            <GridBlock
                verticalIndex={23}
                horizontalIndex={23} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[23]}
                fillInColourLeft={this.state.arrayVerticalBar[23]}  
                displayLeft="none" 
                display="none" 
            />
            <GridBlock 
                verticalIndex={24}
                horizontalIndex={24} 
                clickTop={this.clickTop} 
                clickLeft={this.clickLeft} 
                fillInColourTop={this.state.arrayHorizontalBar[24]}
                fillInColourLeft={this.state.arrayVerticalBar[24]} 
                displayTop="none" 
                display="none" 
                displayLeft="none" 
            />
        </Fragment>
      </div>
    )
  }
}

