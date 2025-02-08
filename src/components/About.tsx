'use client';

import { useTranslations } from 'next-intl';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import GetCv from './GetCv';

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <Container fluid="xxl">
      <Row className="pt-5 pt-md-0 pb-5 pb-md-0">
        <Col xs={12} md={8} xl={7} className="text-start px-3 px-md-5">
          <h2 className='display-6'>{t('text-1')}</h2>
          <h1 className="display-1 fw-bold mb-3">{t('text-2')}</h1>
          <h2 className='text-gradient display-6'>{t('text-3')}</h2>
          <p>{t('description')}</p>
          <GetCv />
        </Col>
      </Row>
    </Container>
  )
}
