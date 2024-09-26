import { createContext } from 'react';
import useTheme from './useTheme';

const ThemeContext = createContext();

function ThemeProvider() {
  // custom useTheme hook
  const [isFakeDark, setIsFakeDark] = useTheme('fake-dark-mode');
  return (
    <ThemeContext.Provider
      value={{ isFakeDark, setIsFakeDark }}
    ></ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
