import React, { useState } from "react";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line };
      }
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line || [];

  const status = winner
    ? `🎉 Winner: ${winner}`
    : squares.every(Boolean)
    ? "🤝 It's a Draw!"
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div
      className="flex justify-center items-center min-h-screen 
      bg-gradient-to-br from-gray-200 via-purple-200 to-gray-300 
      transition-colors duration-500 p-4"
    >
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md transition-all duration-500">
        {/* Header */}
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">
            🎮 Tic Tac Toe
          </h1>
        </div>

        {/* Game Status */}
        <div className="text-lg font-semibold text-center mb-6 text-gray-800">
          {status}
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-3">
          {squares.map((square, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-md 
              flex items-center justify-center transition-all duration-200 
              border border-gray-300
              ${
                winningLine.includes(i)
                  ? "bg-green-500 text-white scale-105 shadow-lg"
                  : "bg-white hover:scale-105 active:scale-95"
              }`}
            >
              {square === "X" && (
                <span className="text-4xl font-extrabold text-blue-500 drop-shadow-lg">
                  X
                </span>
              )}
              {square === "O" && (
                <span className="text-4xl font-extrabold text-red-500 drop-shadow-lg">
                  O
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Reset Button */}
        <button
          onClick={resetGame}
          className="mt-8 w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 
          text-white font-semibold rounded-2xl shadow-lg hover:opacity-90 transition"
        >
          🔄 Reset Game
        </button>
      </div>
    </div>
  );
}
