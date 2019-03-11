import React from 'react';
import './styles/NewGameButton.css';

const startNewGame = (e) => {
    e.preventDefault();
    return window.location.reload()
}

const NewGameButton = () => {
  return (
    <button className="newgamebutton" onClick={e => startNewGame(e)}>
      New Game
    </button>
  )
}

export default NewGameButton
