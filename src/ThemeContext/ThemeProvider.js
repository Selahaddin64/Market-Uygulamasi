/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = props => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const setThemeMode = mode => setTheme(mode);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, setThemeMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useThemeHook = () => {
  const { theme } = useContext(ThemeContext);
  return [theme];
};

export { ThemeProvider, ThemeContext, useThemeHook };
