import { useContext } from 'react';
import { QuestionContext } from '../../Context';
import './Answer.css';

export default function Answer() {
  const correction = useContext(QuestionContext);
  return (
    <div>
      <div className="questions">
        <div className="correction">
          <h1>Correction</h1>
          <ol>
            {correction.map((user) => (
              <li key={user.question}>
                <p>{user.question.replace(/[^a-zA-Z ]/g, '')} </p>
                <p className="correction__answer">{user.correct_answer}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
