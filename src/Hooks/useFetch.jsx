import { useState, useEffect } from 'react';
import fetchQuestions from '../Api';

function useFetch() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetchQuestions().then((data) => setQuestions([...data.results]));
  }, []);
  return [questions, setQuestions];
}

export default useFetch;
