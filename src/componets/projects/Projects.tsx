'use client';

import React from 'react';
import { Row, Col, Container, Carousel } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

export default function Projects() {

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <ProjectCard />
            </Carousel.Item>
            <Carousel.Item>
              <ProjectCard />
            </Carousel.Item>
            <Carousel.Item>
              <ProjectCard />
            </Carousel.Item>
          </Carousel>
          </Col>
      </Row>
    </Container>
  );
}