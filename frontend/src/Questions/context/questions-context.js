import { createContext, useState } from 'react';

const QuestionContext = createContext({
  questions: [],
  setQuestions: () => {},
  toast: { show: false, title: '', message: '', type: 'success' },
  showToast: () => {},
  hideToast: () => {},
});

function QuestionContextProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [toast, setToast] = useState({
    show: false, title: '', message: '', type: 'success',
  });

  const showToast = (message, title = null, type = 'success') => {
    setToast({ ...toast, message, type, title, show: true });

    setTimeout(() => {
      setToast({ ...toast, show: false });
    }, 5000);
  }

  const hideToast = () => {
    setToast({ ...toast, show: false });
  }

  return(
    <QuestionContext.Provider value={{
      questions, setQuestions, toast, showToast, hideToast,
    }}>
      {children}
    </QuestionContext.Provider>
  )
}

export {
  QuestionContext,
  QuestionContextProvider,
};
