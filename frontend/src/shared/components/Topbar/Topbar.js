import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Topbar() {
  let navigate = useNavigate();

  return(
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => { navigate('/') }}>Pipecodes Challenge</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={() => { navigate('questions') }}>Questions</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
