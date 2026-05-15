# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-05-15

### Added

- Added gradient-type borders for mark as done label element in `TodoItem`
- Added missing dark/light mode theme color tokens
- Included gate to prevent animations for users that enabled reduced motion option
- Included project actual live README.md documentation
- Added project final v1 build screenshots

### Changed

- Updated the comment on `THEME_STORAGE_KEY` to ensure case consistency

### Removed

- Removed template README documentation file

---

## [0.3.0] - 2026-05-15

### Added

- Added reordering logic for list only when filter is in `all` mode
- Added scaling and opacity change animation for theme toggle icons
- Added slide in/out animation for deletion/addition of todo items
- Included comment about keeping `THEME_STORAGE_KEY` in sync where duplicated

### Changed

- Expanded on delete button visibility for larger screen making it stay
  fully visible on smaller devices and devices without hover capabilities but
  being visible only on hover on larger devices with hover capabilities
- Passed default task initializer function (`getDefaultTodoItems`) as an initializer
  for useReducer used by useTasks hook
- Switched from `element.isRequired` to `node.isRequired` for `ThemeProvider` component
  propTypes children prop type value

### Removed

- Removed unused propTypes declaration for `ThemeToggle` component
- Removed theme default value fallback dead code in the `getDefaultTheme`
  helper function

---

## [0.2.0] - 2026-05-13

### Added

- Added local storage data persistence for todo items
- Added a theme flash-screen prevention script to `index.html`
- Added dark theme toggling utilities (context, context provider and hooks)
- Applied dark theme styling using created theme tokens

### Changed

- Switched to using label+input:checkbox for toggling todo done state
- Ensured todo delete button visible on hover state is applied only on devices that
  support `:hover` using @media query
- Included accessible names for delete button and todo item form input
- Expanded default todo items list and extracted it into a separate file
- Updated markdown linter script in `package.json` to double quotes instead of
  single quotes
- Moved `prop-types` package to dependencies from devDependencies

### Fixed

- Updated `toggleTodoDone` to `handleToggleTodoDone` to ensure naming consistency

---

## [0.1.0] - 2026-05-05

### Added

- Added boilerplate content to `App` component
- Installed and configured eslint and prettier for code linting and formatting
- Installed and configured husky and lint-staged for precommit hooks
- Installed and configured tailwindCSS for project styling
- Included custom colors and font-family according to style-guide

### Removed

- Removed template file
