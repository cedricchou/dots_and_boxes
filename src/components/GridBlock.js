import React from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';
import Bar from './Bar';
import Box from './Box';
import './styles/GridBlock.css';



const GridBlock = props => (
    <div 
    className="gridblock" 
    id={props.horizontalIndex}
    >
        <div className="gridblock__dot-and-bar">
            <Dot display={props.display} />
            <Bar 
                orientation="horizontal" 
                display={props.displayTop} 
                playerTurnClick={props.clickTop} 
                backgroundColor={props.fillInColourTop} 
                horizontalIndex={props.horizontalIndex}
            />
        </div>
        <div className="gridblock__bar-and-box">
            <Bar 
                orientation="vertical" 
                display={props.displayLeft} 
                playerTurnClick={props.clickLeft} 
                backgroundColor={props.fillInColourLeft}
                verticalIndex={props.verticalIndex} 
            />
            <Box display={props.display} fillBlock={props.fillBlock}/>
        </div>
    </div>
) 


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
