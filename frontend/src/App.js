import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { HomePage, QuestionsFormPage, QuestionsListPage } from './pages';
import { Topbar } from "./shared/components";
import { QuestionContextProvider } from "./Questions/context";

function App() {
  return (
    <QuestionContextProvider>
      <BrowserRouter>
        <Topbar />

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<QuestionsListPage />} />
          <Route path="/questions" element={<QuestionsFormPage />} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </QuestionContextProvider>
  );
}

export default App;
