'use client';

import { Col, Container, Row } from 'react-bootstrap';
import TypedHeader from './TypedHeader';
import TechnologyIcons from './TechnologyIcons';

export default function HomePage() {
  return (
    <Container fluid="xxl">
      <Row className="min-vh-100 align-items-center">
        <Col xs={12} md={8} xl={6} className="text-start">
          <TypedHeader/>
          <TechnologyIcons />
          <Col className="d-md-none">
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
