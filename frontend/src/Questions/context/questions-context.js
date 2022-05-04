import { createContext, useState } from 'react';

const QuestionContext = createContext({
  questions: [],
  setQuestions: () => {},
  page: null,
  setPage: () => {},
});

function QuestionContextProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(null);

  return(
    <QuestionContext.Provider value={{
      questions, setQuestions, page, setPage,
    }}>
      {children}
    </QuestionContext.Provider>
  )
}

export {
  QuestionContext,
  QuestionContextProvider,
};
