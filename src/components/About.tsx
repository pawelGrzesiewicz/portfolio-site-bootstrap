'use client';

import { useTranslations } from 'next-intl';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import GetCv from './GetCv';

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <Container fluid="xxl">
      <Row>
        <Col xs={12} md={8} xl={6} className="text-start px-3 px-md-5">
          <h1>{t('text-1')}</h1>
          <h3>{t('text-2')}</h3>
          <h4 className='text-gradient'>{t('text-3')}</h4>
          <p>{t('description')}</p>
          <GetCv />
        </Col>
      </Row>
    </Container>
  )
}
