import React from 'react';
import Square from './Square';
import '../styles/Board.css';

// PUBLIC_INTERFACE
const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
