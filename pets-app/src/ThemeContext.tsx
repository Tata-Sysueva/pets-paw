import React, {useContext, useState} from 'react';

const ThemeContext = React.createContext(false);
// eslint-disable-next-line @typescript-eslint/no-empty-function
const ThemeUpdateContext = React.createContext(()=>{});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate () {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: any) {
  const [lightTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={lightTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
