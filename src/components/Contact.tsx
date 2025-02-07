import React from 'react'
import { useTranslations } from 'next-intl';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

export default function Contact() {
  const t = useTranslations("ContactPage");

  return (
    <Container fluid="xxl">
      <Row>
        <Col xs={12} md={8} xl={6} className="text-start px-3 px-md-5 d-flex flex-column gap-2">
          <div>
            <h2 className='display-6'>
              {t('text-1')}
            </h2>
            <h1 className="display-1 fw-bold mb-3">{t('text-2')}</h1>
          </div>
          <div className="d-flex flex-column gap-1">
            <div className='hover:text-warning'>
              <Link
                href="mailto:p.grzesiewicz@gmail.com"
                className="d-flex gap-3 align-items-center text-decoration-none text-reset"
              >
                <i className="bi bi-envelope-fill"></i>
                <span>p.grzesiewicz@gmail.com</span>
              </Link>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <i className="bi bi-telephone-fill"></i>
              <span>(+48) 508 256 309</span>
            </div>
          </div>
          <div className='d-flex flex-column gap-1 mt-4'>
            <span className="text-gradient">
              {t('text-3')}
            </span>
            <span className="text-gradient">
              {t('text-4')}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
