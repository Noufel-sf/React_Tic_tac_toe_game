import { useState } from 'react';
import Xo_btn from './Xo_btn';
import './App.css';

function App() {
  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [winningCells, setWinningCells] = useState([]);  // the winning cells


  const handle_game = (index) => {
    if (board[index] !== '' || isGameOver) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    checkWinner(newBoard); // Call after board is updated

    // Change turn
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const checkWinner = (board) => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(`${board[a]} is the winner`);
        setIsGameOver(true);
        setWinningCells([a, b, c]); 
        setTimeout(() => resetGame(), 2000);
        return;
      }
    }

    // Draw check
    if (board.every(cell => cell !== '')) {
      setWinner('It\'s a draw!');
      setIsGameOver(true);

      setTimeout(() => resetGame(), 2000);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setTurn('X');
    setWinner('');
    setWinningCells([]); // 🔁 Reset winning cells
    setIsGameOver(false);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 gap-6">
      <h1 className='text-3xl font-bold text-white'>Turn: {turn}</h1>
      {winner && <h2 className='text-2xl font-bold text-yellow-400'>{winner}</h2>}
      <div className="grid grid-cols-3 gap-5">
        {board.map((value, index) => (
          <Xo_btn
            key={index}
            xo={value}
            isWining={winningCells.includes(index)} 
            handle_onclick={() => handle_game(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
