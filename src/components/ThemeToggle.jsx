import { func, string } from "prop-types";
import useTheme from "../hooks/useTheme.jsx";
import { THEMES } from "../constants/theme.js";
import { AnimatePresence, motion } from "motion/react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  let pressed = theme === THEMES.LIGHT; // PRESSED: LIGHT, NOT-PRESSED: DARK;

  function toggleTheme() {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer flex outline-none focus-visible:bg-gray-50/10 rounded-full p-1 hover:bg-gray-50/10 items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {pressed ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="inline-flex size-10 md:size-12 items-center justify-center"
          >
            <img src="/images/icon-sun.svg" alt="" />
            <span className="sr-only">Switch to dark mode</span>
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="inline-flex size-10 md:size-12 items-center justify-center"
          >
            <img src="/images/icon-moon.svg" alt="" />
            <span className="sr-only">Switch to light mode</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

ThemeToggle.propTypes = {
  theme: string,
  setTheme: func,
};
