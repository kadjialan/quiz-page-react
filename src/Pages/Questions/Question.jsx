import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import './Questions.css';

function Question() {
  const [questions, setQuestions] = useState([]);
  const fetchPost = async () => {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );
    const data = await response.json();
    setQuestions([data]);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="questions">
      <h2>welcome to your quiz experience</h2>
      <p>answer the following questions and click on summit when done</p>
      <div className="questions__numbers">questions</div>
      <Button
        text={
          <Link to="/answers" className="home__link">
            summit
          </Link>
        }
      />
      <ul>
        {questions.map((user) => (
          <li>{user.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
