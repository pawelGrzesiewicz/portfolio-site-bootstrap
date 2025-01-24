'use client';

import Link from 'next/link'
import React from 'react'
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

  return (
    <Navbar expand="lg" fixed="top" className="mb-3">
      <Container fluid="xxl">
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
          <Logo/>
        </Offcanvas.Title>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              <Logo/>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href={`/${locale}/`} className="nav-link" aria-label="Go to Home">
                {t('home')}
              </Link>
              <Link
                href={`/${locale}/about`} className="nav-link" aria-label="Go to About">
                {t("about")}
              </Link>
              <Link href={`/${locale}/projects`} className="nav-link" aria-label="Go to Projects">
                {t("projects")}
              </Link>
              <Link href={`/${locale}/contact`} className="nav-link" aria-label="Go to Contact">
                {t("contact")}
              </Link>
              <Link href={`/${locale}/blog`} className="nav-link disabled" aria-label="Blog (currently unavailable)">
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
