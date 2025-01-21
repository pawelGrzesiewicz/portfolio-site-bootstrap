'use client';

import React, { useEffect, useState } from 'react';


type SwitchLanguageModeProps = {
  locale: string;
};

export default function SwitchLanguageMode({ locale }: SwitchLanguageModeProps) {

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
