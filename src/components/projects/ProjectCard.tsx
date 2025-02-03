'use client';

import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
    name: string;
    img: string;
    webLink: string;
    githubLink: string;
    stack: string[];
    description: string;
};

export default function ProjectCard({
    name,
    img,
    webLink,
    githubLink,
    stack,
    description,
}: ProjectCardProps) {
    return (
        <Card>
            <div className="img-wrapper">
                <Image
                    src={img}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="card-img-top"
                />
            </div>

            <Card.Body className="d-flex gap-3">
                <div className="d-flex gap-2">
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
                <div>
                    <Link href={webLink} target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="bi bi-window fs-4 social-icon"></i>
                    </Link>
                    <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="bi bi-github fs-4 social-icon"></i>
                    </Link>
                </div>
                <div className="accordion-wrapper d-none d-md-block">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Show Project Details</Accordion.Header>
                            <Accordion.Body>
                                {description}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Card.Body>
        </Card>
    );
}
