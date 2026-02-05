import { useState } from 'react';

export default function Player({ player, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player);

  function handleEditToggle() {
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
    setIsEditing(prev => !prev);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className="player-container" id={isActive ? 'active' : undefined}>
      {isEditing ? (
        <input type="text" value={playerName} onChange={handleChange} />
      ) : (
        <span>{playerName}</span>
      )}

      <span className="symbol">{symbol}</span>
      <button className="span-btn" onClick={handleEditToggle}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
