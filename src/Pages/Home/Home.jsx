import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Button from '../../Components/Button/Button';

function Home() {
  return (
    <section className="home">
      <div className="home_content">
        <h1>WELCOME TO YOUR TEST QUIZ</h1>
        <p>Move to the next stage by clicking on the button below</p>
        <Button
          text={
            <Link to="question/1" className="home__link">
              Get Started
            </Link>
          }
        />
      </div>
    </section>
  );
}

export default Home;
