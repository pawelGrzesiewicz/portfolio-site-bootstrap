import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl';
import { Col, Container, Row } from 'react-bootstrap'
import { socialMedia } from '@/constants/constants'

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <Container fluid="xxl" className="py-3">
            <Row className="align-items-center">
                <Col className="text-center text-md-start text-body-secondary">
                    <p className="mb-0 d-none d-sm-flex">
                        &copy; 2025 pawelGrzesiewicz.&nbsp;
                        <span className='d-none d-md-flex'>{t('text')}</span>
                    </p>
                </Col>
                <Col className="text-end mx-1">
                    {socialMedia.map((social) => (
                        <Link
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-2 "
                        >
                            {social.name === 'github' && <i className="bi bi-github fs-3 social-icon"></i>}
                            {social.name === 'codewars' && <i className="bi bi-flower1 fs-3 social-icon"></i>}
                            {social.name === 'linkedin' && <i className="bi bi-linkedin fs-3 social-icon"></i>}
                        </Link>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}
