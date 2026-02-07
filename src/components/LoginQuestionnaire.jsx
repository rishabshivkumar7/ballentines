import React, { useState } from 'react';

const LoginQuestionnaire = ({ questions, onSuccess }) => {
    const [randomQuestion] = useState(() => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    });
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        if (e) e.preventDefault();

        const isCorrect = randomQuestion.correctAnswers.some(
            answer => answer.toLowerCase().trim() === inputValue.toLowerCase().trim()
        );

        if (isCorrect) {
            onSuccess();
        } else {
            setError(true);
        }
    };

    return (
        <div className="login-questionnaire">
            <div className="question-counter">
                VERIFY IDENTITY
            </div>
            <h2 className="question-text">{randomQuestion.question}</h2>

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
                    ENTER
                </button>
            </form>
        </div>
    );
};

export default LoginQuestionnaire;
