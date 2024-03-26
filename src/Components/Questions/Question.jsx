import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { QuestionContext } from '../../Context';
import './Questions.css';

function Question() {
  const { question } = useParams();
  const validParam = parseInt(question, 10);
  const { questions, answer, setAnswer } = useContext(QuestionContext);

  const navigate = useNavigate();
  const getAnswer = (e) => {
    const val = e.target.value;
    if (val === questions[validParam - 1].correct_answer) {
      setAnswer(answer + 1);
      // eslint-disable-next-line
      console.log(answer);
    } else {
      // eslint-disable-next-line
      console.log(val);
    }
    navigate(validParam >= 10 ? '/answers' : `/question/${validParam + 1}`);
  };

  return (
    <div className="questins_holder">
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
                onClick={(e) => getAnswer(e, 'val')}
              >
                True
              </button>
              <button
                className="questions__btn__false"
                type="button"
                value="False"
                onClick={(e) => getAnswer(e, 'val')}
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
