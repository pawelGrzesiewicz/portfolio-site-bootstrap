'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTranslations } from "next-intl";
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import SwitchDarkMode from './SwitchDarkMode';
import SwitchLanguageMode from './SwitchLanguageMode';
import Logo from '../Logo';

type NavBarProps = {
  locale: string;
};

export default function NavBar({ locale }: NavBarProps) {
  const t = useTranslations("NavbarLinks");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <Navbar expand="lg" fixed="top" className={`mb-3 ${isScrolled ? 'scroll-bg' : ''}`}>
      <Container fluid="xxl">
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
          <Logo />
        </Offcanvas.Title>

        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          show={isNavOpen}
          onHide={() => setIsNavOpen(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              <Logo />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 nav-collaps">
              <Link
                href={`/${locale}/`}
                className="nav-link"
                aria-label="Go to Home"
                onClick={handleNavClose}
              >
                {t('home')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="nav-link"
                aria-label="Go to About"
                onClick={handleNavClose}
              >
                {t("about")}
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="nav-link"
                aria-label="Go to Projects"
                onClick={handleNavClose}
              >
                {t("projects")}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="nav-link"
                aria-label="Go to Contact"
                onClick={handleNavClose}
              >
                {t("contact")}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="nav-link disabled"
                aria-label="Blog (currently unavailable)"
                onClick={handleNavClose}
              >
                {t("blog")}
              </Link>
            </Nav>
            <div className="ms-auto d-flex align-items-center gap-3">
              <SwitchDarkMode />
              <SwitchLanguageMode locale={locale} />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
