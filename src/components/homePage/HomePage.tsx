'use client';

import { Col, Container, Row } from 'react-bootstrap';
import TypedHeader from './TypedHeader';
import TechnologyIcons from './TechnologyIcons';

export default function HomePage() {
  return (
    <Container fluid="xxl">
      <Row>
        <Col xs={12} md={8} xl={6} className="text-start px-3 px-md-5">
          <TypedHeader/>
          <TechnologyIcons />
        </Col>
      </Row>
    </Container>
  );
}
