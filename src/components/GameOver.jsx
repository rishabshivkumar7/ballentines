import React from 'react';

const GameOver = ({ score, lines, startGame }) => {
    return (
        <div className="game-over">
            <h2>Game Over</h2>
            <p>Don't worry, I still love you 😘</p>
            <p className="final-score">Final Score: {score}</p>
            <p className="final-lines">Lines Cleared: {lines}</p>
            <button className="restart-button" onClick={startGame}>
                Play Again
            </button>
        </div>
    );
};

export default GameOver;
