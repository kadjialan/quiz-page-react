import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Answer from './Answers/Answer';
import Home from './Home/Home';
import Question from './Questions/Question';

function Pages() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/questions" element={<Question />} />
          <Route path="/answers" element={<Answer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Pages;
