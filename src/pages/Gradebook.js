import React from 'react';
import PropTypes from 'prop-types';

const Gradebook = ({ quiz, users }) => {
  return (
    <div className="gradebook">
      <h2>Gradebook for Quiz: {quiz.question}</h2>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.grades[quiz.id]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Gradebook.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    correctAnswer: PropTypes.string,
    explanation: PropTypes.string,
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      password: PropTypes.string,
      userType: PropTypes.string,
      grades: PropTypes.objectOf(PropTypes.string),
    })
  ).isRequired,
};

export default Gradebook;
