'use client';

import { ThemeContext } from '@/context/ThemeContextProvider';
import React, { useContext, useEffect, useState } from 'react'

export default function SwitchDarkMode() {
  const { toggleTheme } = useContext(ThemeContext);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkStorage = localStorage.getItem('theme') === 'dark';
    setIsDark(isDarkStorage);
  }, [isDark]);

  function toggle(newTheme: 'dark' | 'light') {
    toggleTheme(newTheme);
    setIsDark(newTheme === 'dark');
  }

  return (
    <div id="modeSwitchContainer" className="btn-group btn-group-sm mx-4" role="group" aria-label="Toggle Mode">
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="darkMode"
        checked={isDark}
        onChange={() => toggle('dark')}
      />
      <label         
        className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-dark'}`}
        htmlFor="darkMode"
      >
        <i className="bi bi-moon"></i>
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="lightMode"
        checked={!isDark}
        onChange={() => toggle('light')}
      />
      <label 
        className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-dark'}`}
        htmlFor="lightMode"
      >
        <i className="bi bi-brightness-high"></i>
      </label>
    </div>
  )
}
 