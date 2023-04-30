// postcss.config.js

// This configuration file sets up PostCSS, a tool for transforming CSS with
// JavaScript, to work with the specified plugins. PostCSS is commonly used
// for tasks such as autoprefixing, minifying, and extending CSS with custom
// syntax (e.g., Tailwind CSS).

module.exports = {
  plugins: {
    'postcss-import': {}, // Enables importing of other CSS files using '@import' statements
    tailwindcss: {}, // Integrates Tailwind CSS, a utility-first CSS framework, for generating custom styles
    autoprefixer: {}, // Automatically adds vendor prefixes to CSS rules for better cross-browser compatibility
  },
}
