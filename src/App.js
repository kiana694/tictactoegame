import React, { useState } from "react";
import "./index.css";

const TicTacToe = () => {

  const [board, setBoard] = useState(Array(9).fill(null)); // to keep track of the game board. And initially the board is empty (NULL)  
  const [player, setPlayer] = useState("X"); // to keep track of the the current player, and the player will start will be having "X"
  // whenever a cell on the board is clicked, function is called.
  // The board state is updated to reflect the player's move if the cell is empty, then we go on to the next player
  const clickedcell = (position) => {
    if (board[position] === null) {
      const newBoard = [...board];
      newBoard[position] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  const cell = (position) => {
    return (
      <button className="cell" onClick={() => clickedcell(position)}>
        {board[position]}
      </button>
    );
  };

  const Board = () => {
    return (
      <div className="board">
        <div className="row">
          {cell(0)}
          {cell(1)}
          {cell(2)}
        </div>
        <div className="row">
          {cell(3)}
          {cell(4)}
          {cell(5)}
        </div>
        <div className="row">
          {cell(6)}
          {cell(7)}
          {cell(8)}
        </div>
      </div>
    );
  };

  const calculateWinner = () => {
    const matrix = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < matrix.length; i++) {
      const [a, b, c] = matrix[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = calculateWinner();

  return (
    <div className="tic-tac-toe">
      {Board()}
      {winner && <div className="winner">{winner} wins!</div>}
    </div>
  );
};

export default TicTacToe;
