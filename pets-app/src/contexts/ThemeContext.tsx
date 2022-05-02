import React, {useContext, useState} from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ThemeContext = React.createContext({theme: '', updateTheme: () => {}}); // на пустой объект ругается

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState('light');

  function updateTheme() {
    return setTheme(theme === 'light' ? 'dark' : 'light');
  }
  const themeValue: { theme: string, updateTheme: () => void } = {
    theme,
    updateTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
}
