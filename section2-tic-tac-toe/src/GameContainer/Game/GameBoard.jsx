import { useState } from 'react';
import './gameBoard.css';

function Message({ text, onRestart }) {
  return (
    <div className="message-box">
      <span>{text}</span>
      <button className="msg-btn" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function checkWinner(board) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return board[i][0];
    }
    if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i];
    }
  }

  if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0];
  }

  if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2];
  }

  return null;
}

function isBoardFull(board) {
  return board.every(row => row.every(cell => cell !== null));
}

export default function GameBoard({ onSelect, playerSymbol, players }) {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);

  function handleClick(rowIndex, colIndex) {
    if (winner || tie) return;

    setBoard(prev => {
      if (prev[rowIndex][colIndex]) return prev;

      const updated = prev.map(row => [...row]);
      updated[rowIndex][colIndex] = playerSymbol;

      const win = checkWinner(updated);
      if (win) setWinner(win);
      else if (isBoardFull(updated)) setTie(true);

      return updated;
    });

    onSelect();
  }

  function handleRestart() {
    setBoard(INITIAL_BOARD);
    setWinner(null);
    setTie(false);
  }

  const winnerName = winner ? players[winner] : '';

  return (
    <>
      {winner && (
        <Message text={`${winnerName} Wins! 🎉`} onRestart={handleRestart} />
      )}

      {tie && (
        <Message text="Match Tied!" onRestart={handleRestart} />
      )}

      <ol className="list-symbol">
        {board.map((row, r) => (
          <li key={r}>
            <ol className="inner-list">
              {row.map((cell, c) => (
                <li key={c}>
                  <button
                    id="btn-cell"
                    onClick={() => handleClick(r, c)}
                    disabled={cell || winner || tie}
                  >
                    {cell && <span id="symbol">{cell}</span>}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
