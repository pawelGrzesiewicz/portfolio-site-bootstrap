'use client';

import Link from 'next/link'
import React from 'react'
import { useTranslations } from "next-intl";
import SwitchDarkMode from './SwitchDarkMode'
import SwitchLanguageMode from './SwitchLanguageMode'

type NavBarProps = {
  locale: string;
};

export default function NavBar ({ locale }: NavBarProps) {
  const t = useTranslations("navLinks");

  return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link href={`/${locale}/`}>
      <button className="navbar-brand btn" aria-label="Go to Home">pawełGrzesiewicz</button>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
       <Link href="/">
         <button className="nav-link" aria-label="Go to Home">{t('home')}</button>
       </Link>
       <Link href={`/${locale}/about`}>
         <button className="nav-link" aria-label="Go to About">{t("about")}</button>
       </Link>
       <Link href={`/${locale}/projects`}>
         <button className="nav-link" aria-label="Go to Projects">{t("projects")}</button>
       </Link>
       <Link href={`/${locale}/contact`}>
         <button className="nav-link" aria-label="Go to Contact">{t("contact")}</button>
       </Link>
       <Link href={`/${locale}/blog`}>
         <button className="nav-link disabled" aria-label="Blog (currently unavailable)">{t("blog")}</button>
       </Link>
      </ul>
      <SwitchDarkMode/>
      <SwitchLanguageMode locale={locale}/>
    </div>
  </div>
</nav>
  )
}
