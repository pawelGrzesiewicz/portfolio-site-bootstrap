'use client';

import { ThemeContext } from '@/context/ThemeContextProvider';
import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

export default function SwitchDarkMode() {
  const { toggleTheme } = useContext(ThemeContext);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkStorage = localStorage.getItem('theme') === 'dark';
    setIsDark(isDarkStorage);
  }, [isDark]);

  function hanleThemeChange(newTheme: "dark" | "light") {
    toggleTheme(newTheme);
    setIsDark(newTheme === "dark");
  }

  return (
    <ButtonGroup size="sm" aria-label="Toggle dark mode">
      <Button
        variant="outline-secondary"
        className={`${isDark === true ? 'bg-secondary' : ''}`}
        onClick={() => hanleThemeChange("dark")}
      >
        <i className={`bi bi-moon ${isDark === true ? 'text-warning' : ''}`}></i>
      </Button>
      <Button
        variant="outline-secondary"
        className={`${isDark === false ? 'bg-secondary' : ''}`}
        onClick={() => hanleThemeChange("light")}
      >
        <i className={`bi bi-brightness-high ${isDark === false ? 'text-warning' : ''}`}></i>
      </Button>
    </ButtonGroup>
  )
}
