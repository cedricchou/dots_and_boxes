import React from 'react';
import './styles/NewGameButton.css';

const NewGameButton = (props) => {
  return (
    <button 
      className="newgamebutton" 
      type="submit"
      onClick={props.restart}
    >
      New Game
    </button>
  )
}

export default NewGameButton
