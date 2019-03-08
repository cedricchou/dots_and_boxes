import React from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';
import Bar from './Bar';
import Box from './Box';
import './styles/GridBlock.css';


const GridBlock = (props) => {
	return (
		<div className="gridblock">
			<div className="gridblock__dot-and-bar">
				<Dot display={props.display} />
				<Bar orientation="horizontal" display={props.displayTop} />
			</div>
			<div className="gridblock__bar-and-box">
				<Bar orientation="vertical" display={props.displayLeft} />
				<Box display={props.display} />
			</div>
		</div>
	); 
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
