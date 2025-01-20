'use client';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function SwitchLanguageMode() {
  const [locale, setLocale] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('PORTFOLIOSIDE_LOCALE='))
      ?.split('=')[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `PORTFOLIOSIDE_LOCALE=${browserLocale}`;
      router.reload();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `PORTFOLIOSIDE_LOCALE=${newLocale}`;
    router.reload();
  };

  return (
    <div id="modeSwitchContainer" className="btn-group btn-group-sm mx-4" role="group" aria-label="Toggle Mode">
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="englishMode"
        checked={locale === 'en'}
        onChange={() => changeLocale('en')}
      />
      <label
        className={`btn ${locale === 'en' ? 'btn-primary' : 'btn-outline-secondary'}`}
        htmlFor="englishMode"
      >
        EN
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="polishMode"
        checked={locale === 'pl'}
        onChange={() => changeLocale('pl')}
      />
      <label
        className={`btn ${locale === 'pl' ? 'btn-primary' : 'btn-outline-secondary'}`}
        htmlFor="polishMode"
      >
        PL
      </label>
    </div>
  );
}
