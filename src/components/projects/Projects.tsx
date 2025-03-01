'use client';

import { useTranslations } from 'next-intl';
import { projects } from '@/constants/constants';
import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProjectCard from './ProjectCard';

export default function Projects() {
  const t = useTranslations("ProjectsPage");

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      setSlidesPerView(width < 768 ? 1 : 2);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <Container fluid="xxl" className="pt-5 pt-md-0">
      <Row className="text-center">
        <Col sm={8} md={10} lg={8}>
          <h1 className="display-4 fw-bold mb-3">{t('heading')}</h1>
          <div className="d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-left-square fs-2 swiper-prev cursor-pointer d-none d-md-flex social-icon"></i>
            <h2 className="mx-3 mx-md-5  display-6 text-gradient">{t('sub-heading')}</h2>
            <i className="bi bi-hand-index-thumb-fill text-gradient animated-arrow d-block d-md-none"></i>
            <i className="bi bi-arrow-right-square fs-2 swiper-next cursor-pointer d-none d-md-flex social-icon"></i>
          </div>
        </Col>
      </Row>

      <Row className='d-flex justify-content-start p-sm-3'>
        <Col sm={8} md={10} lg={8}>
          <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView}
            loop={true}
            navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
            modules={[Navigation, Pagination]}
            className='m-3 m-md-5'
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  name={project.name}
                  img={project.img}
                  webLink={project.webLink}
                  githubLink={project.githubLink}
                  stack={project.stack}
                  descriptionKey={project.descriptionKey}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container >
  );
}
