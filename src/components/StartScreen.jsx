import React from 'react';

const StartScreen = ({ startGame }) => {
    return (
        <div className="start-screen">
            <p className="subtitle">A little game made just for you</p>
            <button className="start-button" onClick={startGame}>
                START GAME
            </button>
            <div className="instructions">
                <p><strong>Mobile:</strong> Swipe left/right to move, swipe down for hard drop, tap to rotate</p>
                <p><strong>Desktop:</strong> Arrow keys to move, Space for hard drop</p>
            </div>
        </div>
    );
};

export default StartScreen;
