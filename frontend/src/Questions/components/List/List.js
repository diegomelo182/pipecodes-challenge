import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

import { QuestionContext } from '../../context'
import { QuestionsService } from "../../../shared/services";

const questionsService = new QuestionsService();

export default function List() {
  const { questions, page, setPage, setQuestions } = useContext(QuestionContext);

  const pagination = async (action) => {
    let newPage;
    if (action === 'next') {
      newPage = page ? (page + 1) : 2;
      setPage(newPage)
    } else {
      newPage = page ? (page - 1) : 1;
      setPage(newPage)
    }

    if (page !== newPage && newPage > 0) {
      const { data } = await questionsService.fetchAll({ page: newPage });
      setQuestions(data);
    }
  }

  return(
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Observations</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(question => (
            <tr key={question._id}>
              <td>{question.name}</td>
              <td>{question.email}</td>
              <td>{question.date}</td>
              <td>{question.observations}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev
          onClick={() => pagination('prev')}
          disabled={!page || (page && page < 2 && questions.length <= 20)}
        />
        <Pagination.Item active>{page || 1}</Pagination.Item>
        <Pagination.Next
          onClick={() => pagination('next')}
          disabled={questions.length < 20}
        />
      </Pagination>
    </>
  );
};
