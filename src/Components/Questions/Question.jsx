import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { QuestionContext } from '../../Context';
import './Questions.css';

function Question() {
  const { question } = useParams();
  const validParam = parseInt(question, 10);
  const questions = useContext(QuestionContext);
  const [answer, setAnswer] = useState(1);
  const navigate = useNavigate();
  const getAnswer = (e) => {
    const value = e.target.value;
    if (value === questions[validParam - 1].correct_answer) {
      setAnswer(answer + 1);
      console.log(answer);
    } else {
      console.log(value);
    }
    setTimeout(() => {
      navigate(validParam >= 10 ? '/answers' : `/question/${validParam + 1}`);
    }, 2000);
  };

  return (
    <div>
      {questions.length > 0 && (
        <div className="questions">
          <h2>Question{validParam}</h2>
          <h3 className="score">score: {answer - 1}/10</h3>
          <p>answer either by true or false</p>
          <div className="questions__numbers">
            <p>
              <b>Category:</b> {questions[validParam - 1].category}
            </p>
            <h3 key={questions.question}>
              {questions[validParam - 1].question.replace(/[^a-zA-Z ]/g, '')} ?
            </h3>
            <div className="questions__btn">
              <button
                className="questions__btn__true"
                type="button"
                value="True"
                onClick={(e) => getAnswer(e, 'value')}
              >
                True
              </button>
              <button
                className="questions__btn__false"
                type="button"
                value="False"
                onClick={(e) => getAnswer(e, 'value')}
              >
                false
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
