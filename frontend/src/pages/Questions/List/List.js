import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Stack  from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { QuestionsList } from "../../../Questions/components";
import { QuestionsService } from "../../../shared/services";

const questionsService = new QuestionsService();

export default function QuestionsListPage() {
  const navigate = useNavigate();

  useEffect(() => {
    questionsService.fetchAll().then((resp) => {
      console.log('v', resp);
    });
  }, []);

  return (
    <Container>
      <Stack direction="horizontal" gap={2}>
        <Col>
          <h1>Questions list</h1>
        </Col>
        <Col style={{ textAlign: 'right' }}>
          <Button variant="primary" onClick={() => navigate('/questions/new')}>
            Create new question
          </Button>
        </Col>
      </Stack>
      <Row>
        <QuestionsList />
      </Row>
    </Container>
  );
}
