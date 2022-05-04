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
          <Route path="/" element={<HomePage />} />
          <Route path="/questions" element={<QuestionsListPage />} />
          <Route path="/questions/new" element={<QuestionsFormPage />} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </QuestionContextProvider>
  );
}

export default App;
