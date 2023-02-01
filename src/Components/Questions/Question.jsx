import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Questions.css';

function Question({ numb }) {
  const params = useParams();
  const [questions, setQuestions] = useState([]);
  console.log(params);
  const fetchQuestions = async () => {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );

    const data = await response.json();
    setQuestions([...data.results]);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    questions.length > 0 && (
      <div className="questions">
        <h2>Question{numb}</h2>
        <p>answer either by true or false</p>
        <div className="questions__numbers">
          <p>
            <b>Category:</b> {questions[numb - 1].category}
          </p>
          <h3 key={questions.question}>
            {questions[numb - 1].question.replace(/[^a-zA-Z ]/g, '')} ?
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
            <Link to="/:question/" className="home__link">
              Next question
            </Link>
          }
          blue="black"
        />
      </div>
    )
  );
}

export default Question;

Question.propTypes = {
  numb: PropTypes.string.isRequired,
};
