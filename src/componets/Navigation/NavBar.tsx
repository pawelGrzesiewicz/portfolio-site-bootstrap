'use client';

import Link from 'next/link'
import React from 'react'
import SwitchDarkMode from './SwitchDarkMode'
import SwitchLanguageMode from './SwitchLanguageMode'
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const { t } = useTranslation();

  return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link href="/">
      <button className="navbar-brand btn" aria-label="Go to Home">pawelGrzesiewicz</button>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
       <Link href="/">
         <button className="nav-link" aria-label="Go to Home">{t('home')}</button>
       </Link>
       <Link href="/about">
         <button className="nav-link" aria-label="Go to About">About</button>
       </Link>
       <Link href="/projects">
         <button className="nav-link" aria-label="Go to Projects">Projects</button>
       </Link>
       <Link href="/contact">
         <button className="nav-link" aria-label="Go to Contact">Contact</button>
       </Link>
       <Link href="/blog">
         <button className="nav-link disabled" aria-label="Blog (currently unavailable)">Blog</button>
       </Link>
      </ul>
      <SwitchDarkMode/>
      <SwitchLanguageMode/>
    </div>
  </div>
</nav>
  )
}
