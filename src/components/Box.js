import React from 'react';
import PropTypes from 'prop-types';
import './styles/Box.css'

const Box = (props) => {
  const boxStyle = {
    display: props.display,
    backgroundColor: props.fillBlock ? props.fillBlock : "#fff"
  }
  return (
    <div className="box" style={boxStyle}>
    </div>
  )
}

Box.propTypes = {
  display: PropTypes.string
};

Box.defaultProps = {	
  display: 'block'
};

export default Box

