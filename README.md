# COMPASS Corporate Website

This application is built using Nunjucks, a powerful templating engine for JavaScript. It utilizes Tailwind CSS for styling and includes some custom JavaScript functionality.

## Features

- Nunjucks templating for easy HTML generation and code reuse
- Tailwind CSS for modern and responsive styles
- Custom JavaScript for additional interactivity and functionality
- Broken link checker script to ensure the integrity of internal and external links

## Prerequisites

- Node.js (version 12 or higher recommended)
- npm (version 6 or higher recommended)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/nunjucks-app.git
   ```

2. Navigate to the project directory:

   ```
   cd nunjucks-app
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

## Usage

1. To build the project, run:

   ```
   npm run build
   ```

   This command will generate the necessary files in the `dist` directory.

2. To watch for changes in the Nunjucks templates and rebuild the HTML files automatically, run:

   ```
   npm run watch:html
   ```

3. To check for broken links, run:

   ```
   npm run check-links
   ```

   Make sure your site is running on `http://127.0.0.1:8080` before executing this command.

## Customization

To customize the application, you can modify the following files and directories:

- `src/templates`: Contains Nunjucks template files (`.njk`)
- `src/css`: Contains CSS files, including the main `tailwind.css` file
- `src/js`: Contains JavaScript files, including the custom functionality
- `tailwind.config.js`: Configuration for Tailwind CSS

Remember to run `npm run build` after making changes to rebuild the project.

## License

This project is licensed under the ISC License.
