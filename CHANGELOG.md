# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
