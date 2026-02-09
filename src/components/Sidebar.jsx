import React from 'react';

const Sidebar = ({ nextPiece }) => {
    return (
        <div className="game-sidebar">
            <div className="sidebar-section">
                <p className="side-label">NEXT</p>
                <div className="next-piece-preview">
                    {nextPiece && nextPiece.shape.map((row, y) => (
                        <div key={y} className="preview-row">
                            {row.map((cell, x) => (
                                <div
                                    key={x}
                                    className={`preview-cell ${cell ? 'filled' : ''}`}
                                    style={cell ? { backgroundImage: `url(${nextPiece.photo})` } : {}}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="image-only-section">
                <img
                    src={process.env.PUBLIC_URL + '/photos/salsa.png'}
                    alt="Sidebar Decoration"
                    className="sidebar-image-scaled"
                    onError={(e) => e.target.style.display = 'none'}
                />
            </div>
        </div>
    );
};

export default Sidebar;
