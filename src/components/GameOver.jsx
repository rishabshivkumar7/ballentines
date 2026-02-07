import React from 'react';

const GameOver = ({ score, lines, startGame }) => {
    return (
        <div className="game-over">
            <h2>Game Over</h2>
            <p>You're still amazing though</p>
            <p className="final-score">Final Score: {score}</p>
            <p className="final-lines">Lines Cleared: {lines}</p>
            <button className="restart-button" onClick={startGame}>
                Play Again
            </button>
        </div>
    );
};

export default GameOver;
