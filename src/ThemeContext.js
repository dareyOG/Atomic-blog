import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isFakeDark, setIsFakeDark] = useState(false);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).

  return (
    <ThemeContext.Provider value={{ isFakeDark, setIsFakeDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme(class_name) {
  const { isFakeDark, setIsFakeDark } = useContext(ThemeContext);
  useEffect(
    function () {
      document.documentElement.classList.toggle(class_name);
    },
    [isFakeDark, class_name]
  );
  return { isFakeDark, setIsFakeDark };
}

export { ThemeProvider, useTheme };
