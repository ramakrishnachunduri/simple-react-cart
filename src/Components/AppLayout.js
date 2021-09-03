import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppLayout = (props) => (
  <Container fluid style={{ padding: 0 }}>
    {props.children}
  </Container>
)