import { THEME_STORAGE_KEY, THEMES } from "../constants/theme.js";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT;
}

function getDefaultTheme() {
  return (
    localStorage.getItem(THEME_STORAGE_KEY) || getSystemTheme() || THEMES.LIGHT
  );
}

export { getDefaultTheme, getSystemTheme };
