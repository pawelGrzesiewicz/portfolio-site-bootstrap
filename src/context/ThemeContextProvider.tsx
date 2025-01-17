'use client';

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  function changeTheme(value: Theme) {
    const root = document.querySelector('html');
    if (root) {
        root.setAttribute('data-bs-theme', value);
    }
    setTheme(value);
  }

  useEffect(() => {
    const themeStorage: Theme = localStorage.getItem('theme') as Theme;
  }, []);

  function toggleTheme(mode: Theme) {
    changeTheme(mode);
    localStorage.setItem('theme', mode);
  }

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;