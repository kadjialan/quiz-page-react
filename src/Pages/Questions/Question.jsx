import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import './Questions.css';

function Question() {
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
    </div>
  );
}

export default Question;
