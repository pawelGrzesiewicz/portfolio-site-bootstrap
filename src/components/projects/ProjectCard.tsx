'use client';

import React from 'react';
import { Card, CardText, CardTitle } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import CardAccordion from './ProjectAccordion';

type ProjectCardProps = {
    name: string;
    img: string;
    webLink: string;
    githubLink: string;
    stack: string[];
    descriptionKey: string;
};

export default function ProjectCard({
    name,
    img,
    webLink,
    githubLink,
    stack,
    descriptionKey,
}: ProjectCardProps) {

    return (
        <Card>
            <div className="img-wrapper position-relative">
                <Image
                    src={img}
                    alt={name}
                    width={500} height={350}
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    priority
                />
                <div className="accordion-wrapper position-absolute">
                    <CardAccordion descriptionKey={descriptionKey} />
                </div>
            </div>

            <Card.Body className="gap-2">
                <CardText>{name}</CardText>
                <div className='card-icons'>
                    <div className="d-flex gap-2 tech-icon">
                        {stack.map((icon, index) => (
                            <Image
                                key={index}
                                src={icon}
                                alt="Technology Icon"
                                width={20}
                                height={20}
                            />
                        ))}
                    </div>
                    <div className="d-flex gap-4">
                        <Link href={webLink} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-window fs-5 social-icon"></i>
                        </Link>
                        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github fs-5 social-icon"></i>
                        </Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
