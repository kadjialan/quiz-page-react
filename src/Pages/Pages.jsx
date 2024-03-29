import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Answer from './Answers/Answer';
import Home from './Home/Home';
import Question from '../Components/Questions/Question';
import { QuestionProvider } from '../Context';
import useFetch from '../Hooks/useFetch';

function Pages() {
  const [questions] = useFetch();
  const [answer, setAnswer] = useState(1);

  return (
    <div>
      <BrowserRouter>
        <QuestionProvider value={{ questions, answer, setAnswer }}>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="question/:question" element={<Question />} />
            <Route path="/answers" element={<Answer />} />
          </Routes>
        </QuestionProvider>
      </BrowserRouter>
    </div>
  );
}

export default Pages;
