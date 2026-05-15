import { useEffect, useState } from "react";
import { getDefaultTheme } from "../lib/themeUtils.js";
import ThemeContext from "./ThemeContext.jsx";
import { node } from "prop-types";
import { THEME_STORAGE_KEY, THEMES } from "../constants/theme.js";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getDefaultTheme);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle(THEMES.DARK, theme === THEMES.DARK);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: node.isRequired,
};
