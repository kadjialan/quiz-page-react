import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Questions.css';

function Question({ numb, path }) {
  const [questions, setQuestions] = useState([]);
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
          <h3 key={questions.question}>{questions[numb - 1].question}</h3>
          <div className="questions__btn">
            <Button text="True" />
            <Button text="False" blue="red" />
          </div>
        </div>
        <Button text={<Link to={path}>Next question</Link>} blue="black" />
      </div>
    )
  );
}

export default Question;
