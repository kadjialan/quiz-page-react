import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Answer from './Answers/Answer';
import Home from './Home/Home';
import Question from '../Components/Questions/Question';

function Pages() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/question1"
            element={<Question numb={1} path="/question2" />}
          />
          <Route
            path="/question2"
            element={<Question numb={2} path="/question3" />}
          />
          <Route
            path="/question3"
            element={<Question numb={3} path="/question4" />}
          />
          <Route
            path="/question4"
            element={<Question numb={4} path="/question5" />}
          />
          <Route
            path="/question5"
            element={<Question numb={5} path="/question6" />}
          />
          <Route
            path="/question6"
            element={<Question numb={6} path="/question7" />}
          />
          <Route
            path="/question7"
            element={<Question numb={7} path="/question8" />}
          />
          <Route
            path="/question8"
            element={<Question numb={8} path="/question9" />}
          />
          <Route
            path="/question9"
            element={<Question numb={9} path="/question10" />}
          />
          <Route
            path="/question10"
            element={<Question numb={10} path="/question11" />}
          />
          <Route path="/answers" element={<Answer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Pages;
