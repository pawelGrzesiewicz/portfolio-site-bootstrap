'use client';

import { useTranslations } from 'next-intl';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import GetCv from './GetCv';

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} xl={6} className="text-start">
          <h2>{t('text-1')}</h2>
          <p>{t('text-2')}</p>
          <p className='text-gradient'>{t('text-3')}</p>
          <p>{t('description')}</p>
          <GetCv />
        </Col>
      </Row>
    </Container>
  )
}
