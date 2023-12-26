import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Quiz = ({ quiz, onSubmitAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitAnswer(selectedAnswer);
  };

  return (
    <div className="quiz">
      <h2>{quiz.question}</h2>
      <form onSubmit={handleSubmit}>
        <div className="options">
          {quiz.options.map((option) => (
            <div key={option}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={handleAnswerChange}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

Quiz.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    correctAnswer: PropTypes.string,
    explanation: PropTypes.string,
  }).isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};

export default Quiz;

