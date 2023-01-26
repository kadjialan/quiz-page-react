import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import QuizPic from '../../Images/quiz.jpg';
import Button from '../../Components/Button/Button';

function Home() {
  return (
    <div className="home">
      <h1>WELCOME TO YOUR TEST QUIZ</h1>
      <p>Move to the next stage by clicking on the button below</p>
      <img src={QuizPic} alt="quiz" className="home__picture" />
      <Button
        text={
          <Link to="/question1" className="home__link">
            Get Started
          </Link>
        }
      />
    </div>
  );
}

export default Home;
