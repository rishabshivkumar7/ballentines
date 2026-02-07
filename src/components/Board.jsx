import React from 'react';

const Board = ({ displayBoard, handleTouchStart, handleTouchEnd }) => {
    return (
        <div
            className="board"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {displayBoard.map((row, y) => (
                <div key={y} className="row">
                    {row.map((cell, x) => (
                        <div
                            key={`${y}-${x}`}
                            className={`cell ${cell ? 'filled' : ''}`}
                            style={{
                                backgroundImage: cell ? `url(${cell})` : 'none',
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
