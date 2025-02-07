'use client';

import React from 'react'
import { Accordion } from 'react-bootstrap';
import { useTranslations } from 'next-intl';


type CardAccordionProps = {
    descriptionKey: string;
};

export default function CardAccordion({ descriptionKey }: CardAccordionProps) {
    const t = useTranslations("ProjectsPage");

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{t('project-details')}</Accordion.Header>
                <Accordion.Body>
                    {t(descriptionKey)}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
