import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from '../../Context';
import './Answer.css';

export default function Answer() {
  const { questions, answer } = useContext(QuestionContext);
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
          <h3 className="final-score">score: {answer - 1}/10</h3>
          <ol>
            {questions.map((user) => (
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
