import React from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';
import Bar from './Bar';
import Box from './Box';
import './styles/GridBlock.css';


class GridBlock extends React.Component {
    constructor() {
        super();
    }

    

    render() {
        return (
            <div 
            className="gridblock" 
            id={this.props.horizontalIndex}
            >
                <div className="gridblock__dot-and-bar">
                    <Dot display={this.props.display} />
                    <Bar 
                        orientation="horizontal" 
                        display={this.props.displayTop} 
                        playerTurnClick={this.props.clickTop} 
                        backgroundColor={this.props.fillInColourTop} 
                        horizontalIndex={this.props.horizontalIndex}
                    />
                </div>
                <div className="gridblock__bar-and-box">
                    <Bar 
                        orientation="vertical" 
                        display={this.props.displayLeft} 
                        playerTurnClick={this.props.clickLeft} 
                        backgroundColor={this.props.fillInColourLeft}
                        verticalIndex={this.props.verticalIndex} 
                    />
                    <Box display={this.props.display} fillBlock={this.props.fillBlock}/>
                </div>
            </div>
        );
    }	 
}

GridBlock.propTypes = {
    display: PropTypes.string,
    displayLeft: PropTypes.string,
    displayTop: PropTypes.string,
    fillInColourLeft: PropTypes.string,
    fillInColourTop: PropTypes.string,
    clickTop: PropTypes.func,
    clickLeft: PropTypes.func,
};
  
GridBlock.defaultProps = {	
    display: 'block',
    displayLeft: 'block',
    displayTop: 'block',
    fillInColourLeft: 'grey',
    fillInColourTop: '#ccc',
    clickTop: () => {},
    clickLeft: () => {}
};

export default GridBlock
