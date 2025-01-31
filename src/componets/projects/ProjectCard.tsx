'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';



export default function ProjectCard() {
    return (
        <Card>
            <div className="img-wrapper">
                <Image
                    src=''
                    alt=''
                    objectPosition="top"
                    fill
                    className="card-img-top object-fit-cover"
                />
            </div>

            <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
            <div className="mb-3">
                        <Image
                            src=''
                            alt="Technology Icon"
                            width={20}
                            height={20}
                            className="mx-1"
                        />
                </div>
                <Card.Title>sfsfd</Card.Title>

                <div className="text-end">
                    <Link
                        href=''
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-3"
                    >
                        <i className="bi bi-window fs-4 social-icon"></i>
                    </Link>
                    <Link
                        href=''
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-3"
                    >
                        <i className="bi bi-github fs-4 social-icon"></i>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}
