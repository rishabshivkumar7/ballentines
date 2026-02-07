import React from 'react';

const Stats = ({ score, lines }) => {
    return (
        <div className="stats">
            <div className="stat">
                <div className="stat-label">Score</div>
                <div className="stat-value">{score}</div>
            </div>
            <div className="stat">
                <div className="stat-label">Lines</div>
                <div className="stat-value">{lines}</div>
            </div>
        </div>
    );
};

export default Stats;
