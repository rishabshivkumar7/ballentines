import React, { useState } from 'react';

const LoginQuestionnaire = ({ questions, onSuccess }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const [showFinished, setShowFinished] = useState(false);

    const currentQuestion = questions[currentIndex];

    const handleSubmit = (e) => {
        if (e) e.preventDefault();

        const isCorrect = currentQuestion.correctAnswers.some(
            answer => answer.toLowerCase().trim() === inputValue.toLowerCase().trim()
        );

        if (isCorrect) {
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1);
                setInputValue('');
                setError(false);
            } else {
                // To unlock the game immediately, change the line below to: onSuccess(true) else setShowFinished(true);
                setShowFinished(true);
            }
        } else {
            setError(true);
        }
    };

    if (showFinished) {
        return (
            <div className="login-questionnaire finished">
                <h2 className="question-text">That's all for now!</h2>
                <img
                    src={process.env.PUBLIC_URL + '/photos/pinch.png'}
                    alt="Kiss"
                    className="kiss-image"
                />
                <p style={{ fontSize: '0.5rem', marginTop: '20px', opacity: 0.6 }}> Love ya! </p>
            </div>
        );
    }

    return (
        <div className="login-questionnaire">
            <div className="question-counter">
                Question {currentIndex + 1} of {questions.length}
            </div>
            <h2 className="question-text">{currentQuestion.question}</h2>

            <form onSubmit={handleSubmit} className="input-form">
                <input
                    type="text"
                    className="login-input"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        setError(false);
                    }}
                    placeholder="Type your answer..."
                    autoFocus
                />

                {error && <p className="error-message">WRONG ANSWER! TRY AGAIN</p>}

                <button
                    type="submit"
                    className="submit-button"
                    disabled={!inputValue.trim()}
                >
                    {currentIndex === questions.length - 1 ? 'FINISH' : 'NEXT'}
                </button>
            </form>
        </div>
    );
};

export default LoginQuestionnaire;
