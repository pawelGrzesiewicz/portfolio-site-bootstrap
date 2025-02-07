'use client';

import { ThemeContext } from '@/context/ThemeContextProvider';
import React, { useContext, useEffect } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

export default function SwitchDarkMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as "dark" | "light") || 'light';
    if (savedTheme !== theme) {
      toggleTheme(savedTheme);
    }
  }, [theme, toggleTheme]);

  function handleThemeChange(newTheme: "dark" | "light") {
    localStorage.setItem('theme', newTheme);
    toggleTheme(newTheme);
  }

  return (
    <ButtonGroup size="sm" aria-label="Toggle dark mode">
      <Button
        variant="outline-secondary"
        className={`btn-theme ${theme === 'dark' ? 'dark' : ''}`}
        onClick={() => handleThemeChange("dark")}
      >
        <i className="bi bi-moon"></i>
      </Button>
      <Button
        variant="outline-secondary"
        className={`btn-theme ${theme === 'light' ? 'light' : ''}`}
        onClick={() => handleThemeChange("light")}
      >
        <i className="bi bi-brightness-high"></i>
      </Button>
    </ButtonGroup>
  );
}
