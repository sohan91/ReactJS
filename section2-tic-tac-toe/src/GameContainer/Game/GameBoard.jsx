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

// 🔹 WIN CHECK (for-loop based)
function checkWinner(board) {

  // Horizontal
  for (let row = 0; row < 3; row++) {
    if (
      board[row][0] &&
      board[row][0] === board[row][1] &&
      board[row][1] === board[row][2]
    ) {
      return board[row][0];
    }
  }
  for (let col = 0; col < 3; col++) {
    if (
      board[0][col] &&
      board[0][col] === board[1][col] &&
      board[1][col] === board[2][col]
    ) {
      return board[0][col];
    }
  }
  if (
    board[0][0] &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return board[0][0];
  }
  if (
    board[0][2] &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return board[0][2];
  }

  return null;
}
function isBoardFull(board) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) {
        return false;
      }
    }
  }
  return true;
}

export default function GameBoard({ onSelect, playerSymbol, players }) {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);

  function handleClick(rowIndex, colIndex) {
    if (winner || tie) return;

    setBoard(prevBoard => {
      if (prevBoard[rowIndex][colIndex]) {
        return prevBoard;
      }

      const updatedBoard = prevBoard.map(row => [...row]);
      updatedBoard[rowIndex][colIndex] = playerSymbol;

      const win = checkWinner(updatedBoard);
      if (win) {
        setWinner(win);
      } else if (isBoardFull(updatedBoard)) {
        setTie(true);
      }

      return updatedBoard;
    });

    onSelect();
  }

  function handleRestart() {
    setBoard(INITIAL_BOARD);
    setWinner(null);
    setTie(false);
  }

  return (
    <>
      {winner && (
        <Message
          text={`${players[winner]} Wins!`}
          onRestart={handleRestart}
        />
      )}

      {tie && (
        <Message
          text="Match Tied!"
          onRestart={handleRestart}
        />
      )}

      <ol className="list-symbol">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="inner-list">
              {row.map((cell, colIndex) => (
                <li key={colIndex}>
                  <button
                    id="btn-cell"
                    onClick={() => handleClick(rowIndex, colIndex)}
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
