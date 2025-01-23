'use client';

import { ThemeContext } from '@/context/ThemeContextProvider';
import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

export default function SwitchDarkMode() {
  const { toggleTheme } = useContext(ThemeContext);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Pobierz zapisany temat z localStorage lub ustaw "light" jako domyślny
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(savedTheme === 'dark');
    toggleTheme(savedTheme as "dark" | "light"); // Ustaw temat przy załadowaniu
  }, [toggleTheme]);

  function handleThemeChange(newTheme: "dark" | "light") {
    localStorage.setItem('theme', newTheme);
    toggleTheme(newTheme);
    setIsDark(newTheme === "dark");
  }

  return (
    <ButtonGroup size="sm" aria-label="Toggle dark mode">
      <Button
        variant="outline-secondary"
        className={`${isDark === true ? 'bg-secondary' : ''}`}
        onClick={() => handleThemeChange("dark")}
      >
        <i className={`bi bi-moon ${isDark === true ? 'text-warning' : ''}`}></i>
      </Button>
      <Button
        variant="outline-secondary"
        className={`${isDark === false ? 'bg-secondary' : ''}`}
        onClick={() => handleThemeChange("light")}
      >
        <i className={`bi bi-brightness-high ${isDark === false ? 'text-warning' : ''}`}></i>
      </Button>
    </ButtonGroup>
  )
}
