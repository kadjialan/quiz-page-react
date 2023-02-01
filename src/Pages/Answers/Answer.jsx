import { useContext } from 'react';
import { QuestionContext } from '../../Context';
import './Answer.css';

export default function Answer() {
  const correction = useContext(QuestionContext);
  return (
    <div>
      <div className="questions">
        <h1>Correction</h1>
        <ol>
          {correction.map((user) => (
            <li>
              {user.question.replace(/[^a-zA-Z ]/g, '')} ={user.correct_answer}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
