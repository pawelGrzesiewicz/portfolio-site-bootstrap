'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import CardAccordion from './CardAccordion';

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
            <div className="img-wrapper">
                <Image
                    src={img}
                    alt={name}
                    width={500} height={300} 
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    className="card-img-top"
                    priority
                />
            </div>

            <Card.Body className="d-flex gap-3">
                <div className="d-flex gap-3 tech-icon">
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
                        <i className="bi bi-window fs-4 social-icon"></i>
                    </Link>
                    <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github fs-4 social-icon"></i>
                    </Link>
                </div>
                <div className="accordion-wrapper">
                    <CardAccordion descriptionKey={descriptionKey} />
                </div>
            </Card.Body>
        </Card>
    );
}
