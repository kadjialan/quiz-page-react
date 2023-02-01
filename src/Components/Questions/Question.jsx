import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { QuestionConsumer, QuestionContext } from '../../Context';
import Button from '../Button/Button';
import './Questions.css';

function Question() {
  const { question } = useParams();
  const validParam = parseInt(question, 10);
  const questions = useContext(QuestionContext);
  // eslint-disable-next-line
  console.log(typeof validParam);

  return (
    <div>
      {questions.length > 0 && (
        <div className="questions">
          <h2>Question{validParam}</h2>
          <p>answer either by true or false</p>
          <div className="questions__numbers">
            <p>
              <b>Category:</b> {questions[validParam - 1].category}
            </p>
            <h3 key={questions.question}>
              {questions[validParam - 1].question.replace(/[^a-zA-Z ]/g, '')} ?
            </h3>
            <div className="questions__btn">
              <button className="questions__btn__true" type="button">
                True
              </button>
              <button className="questions__btn__false" type="button">
                false
              </button>
            </div>
          </div>
          <Button
            text={
              <Link to={`/question/${validParam + 1}`} className="home__link">
                Next question
              </Link>
            }
            blue="black"
          />
        </div>
      )}
    </div>
  );
}

export default Question;
