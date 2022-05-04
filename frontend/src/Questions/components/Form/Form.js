import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';

import validate from './validation';
import { QuestionsService } from '../../../shared/services';

const questionsService = new QuestionsService();

export default function QuestionsFormPage() {
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      observations: '',
      date: null,
    },
    onSubmit: async (values) => {
      setErrors(null);

      try {
        await questionsService.create(values);
        toast.success('Item has been created successfully');
        navigate('/');
      } catch (error) {
        const { data = {} } = error?.response || {};
        if (data.errors) {
          let errorMsg = '';
          Object.keys(data.errors).forEach(key => {
            errorMsg += `${key}: ${data.errors[key]['message']} \n`
          });
          if(errorMsg) setErrors(errorMsg);
        }

        toast.error('Something went wrong');
      }
    },
    validate,
  });

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card style={{ marginTop: 15 }}>
            <Card.Header>Questions</Card.Header>
            <Card.Body>
              {errors &&
              <Alert variant="danger">
                <Alert.Heading>Form errors:</Alert.Heading>
                <p>{errors}</p>
              </Alert>}
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="observations">
                  <Form.Label>Observations</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter observations"
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.observations}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.observations}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter date"
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.date}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.date}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
