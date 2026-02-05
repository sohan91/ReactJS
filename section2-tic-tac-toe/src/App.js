import { useState } from 'react';
import './App.css';

import GameBoard from './GameContainer/Game/GameBoard';
import Player from './GameContainer/Player/Player';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const [players, setPlayers] = useState({
    X: 'PLAYER 1',
    O: 'PLAYER 2',
  });

  function handleSelectSquare() {
    setActivePlayer(prev => (prev === 'X' ? 'O' : 'X'));
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prev => ({
      ...prev,
      [symbol]: newName,
    }));
  }

  return (
    <main>
      <h1>TIC-TAC-TOE</h1>

      <div className="middle-container">
        <ol className="list-players">
          <Player
            player={players.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            player={players.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
      </div>

      <GameBoard
        onSelect={handleSelectSquare}
        playerSymbol={activePlayer}
        players={players}
      />
    </main>
  );
}

export default App;
