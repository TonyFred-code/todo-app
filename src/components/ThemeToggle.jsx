import { func, string } from "prop-types";
import useTheme from "../hooks/useTheme.jsx";
import { THEMES } from "../constants/theme.js";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  let pressed = theme === THEMES.LIGHT; // PRESSED: LIGHT, NOT-PRESSED: DARK;

  function toggleTheme() {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer items-center justify-center size-10 md:size-12"
    >
      {pressed ? (
        <>
          <img src="/images/icon-sun.svg" alt="" />
          <span className="sr-only">Switch to dark mode</span>
        </>
      ) : (
        <>
          <img src="/images/icon-moon.svg" alt="" />
          <span className="sr-only">Switch to light mode</span>
        </>
      )}
    </button>
  );
}

ThemeToggle.propTypes = {
  theme: string,
  setTheme: func,
};
