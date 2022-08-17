import React, {ReactNode, useContext, useState} from 'react';

interface ThemeContextProps {
  theme: string,
  updateTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeContext = React.createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');

  function updateTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useContext must be used within a ThemeProvider');
  }

  return context;
}
