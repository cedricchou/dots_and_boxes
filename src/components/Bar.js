import React from 'react';
import PropTypes from 'prop-types';
import './styles/Bar.css';

const Bar = (props) => {
  const { orientation } = props;
  const barStyle = {
    display: props.display,
    backgroundColor: props.backgroundColor
  }
	
	const isVerticalBar = orientation === 'vertical';
	const className = isVerticalBar ? 'vertical-bar' : 'horizontal-bar';
	
  return (
    <div className={className} style={barStyle} onClick={props.playerTurnClick} />
  )
}

Bar.propTypes = {
  orientation: PropTypes.string,
  display: PropTypes.string,
  backgroundColor: PropTypes.string
};

Bar.defaultProps = {	
  orientation: 'horizontal',
  display: 'block'
};

export default Bar

