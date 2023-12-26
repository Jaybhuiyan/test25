import React, { useState } from 'react';
import { createQuiz } from './api';

function QuizForm({ setQuizzes }) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quiz = { question, options, answer, time };
    const result = await createQuiz(quiz);
    setQuizzes((prevQuizzes) => [...prevQuizzes, result]);
    setQuestion('');
    setOptions(['', '', '', '']);
    setAnswer('');
    setTime('');
  };

  const handleChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Option 1:
          <input
            type="text"
            value={options[0]}
            onChange={(e) => handleChange(e, 0)}
            required
          />
        </label>
        <br />
        <label>
          Option 2:
          <input
            type="text"
            value={options[1]}
            onChange={(e) => handleChange(e, 1)}
            required
          />
        </label>
        <br />
        <label>
          Option 3:
          <input
            type="text"
            value={options[2]}
            onChange={(e) => handleChange(e, 2)}
            required
          />
        </label>
        <br />
        <label>
          Option 4:
          <input
            type="text"
            value={options[3]}
            onChange={(e) => handleChange(e, 3)}
            required
          />
        </label>
        <br />
        <label>
          Answer:
          <select
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          >
            <option value="">--Please choose an option--</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Time limit (in minutes):
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuizForm;
