import React from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';
import Bar from './Bar';
import Box from './Box';
import './styles/GridBlock.css';


class GridBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            completedBy: 0,
            fillInColourTop: '#cccccc',
            fillInColourLeft: 'grey',
        }
    }

    clickLeft = e => {      
        this.setState(
            {
                fillInColourLeft: "blue"
            }
        )   
    }

    clickTop = e => {      
        this.setState(
            {
                fillInColourTop: "blue"
            }
        )   
    }

    render() {
        return (
            <div className="gridblock">
                <div className="gridblock__dot-and-bar">
                    <Dot display={this.props.display} />
                    <Bar orientation="horizontal" display={this.props.displayTop} playerTurnClick={this.clickTop} backgroundColor={this.state.fillInColourTop} />
                </div>
                <div className="gridblock__bar-and-box">
                    <Bar orientation="vertical" display={this.props.displayLeft} playerTurnClick={this.clickLeft} backgroundColor={this.state.fillInColourLeft} />
                    <Box display={this.props.display} />
                </div>
            </div>
        );
    }	 
}

GridBlock.propTypes = {
    display: PropTypes.string,
    displayLeft: PropTypes.string,
    displayTop: PropTypes.string
};
  
GridBlock.defaultProps = {	
    display: 'block',
    displayLeft: 'block',
    displayTop: 'block'
};

export default GridBlock
