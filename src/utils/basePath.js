// Resolves a root-relative path (e.g. "/assets/me.png", "/#about") against
// Vite's configured `base` (see vite.config.js). Locally that base is "/",
// so this is a no-op. On the GitHub Pages project site it's
// "/Joelle-Portfolio/", so plain "/assets/..." strings would 404 without
// this — every hardcoded path in the app should be wrapped with it.
export const withBase = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;
