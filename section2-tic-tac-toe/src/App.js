import { useState } from 'react';
import './App.css';

import GameBoard from './GameContainer/Game/GameBoard';
import Player from './GameContainer/Player/Player';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare() {
    setActivePlayer(prev => (prev === 'X' ? 'O' : 'X'));
  }
  const players = {
    X: 'PLAYER 1',
    O: 'PLAYER 2',
  };
  return (
    <main>
      <h1>TIC-TAC-TOE</h1>

      <div className="middle-container">
        <ol className="list-players" id="active">
          <Player
         player="PLAYER 1"
        symbol="X"
        isActive={activePlayer === 'X'}
          />
          <Player
            player="PLAYER 2"
        symbol="O"
            isActive={activePlayer === 'O'}
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
