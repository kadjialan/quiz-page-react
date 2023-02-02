import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from '../../Context';
import './Answer.css';

export default function Answer() {
  const correction = useContext(QuestionContext);
  const navigate = useNavigate();
  function reset() {
    navigate('/');
    window.location.reload(true);
  }
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
        <button type="button" className="restart" onClick={() => reset()}>
          Restart game
        </button>
      </div>
    </div>
  );
}
