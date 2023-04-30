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
- AWS CLI (configured with your AWS credentials)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/dwarford/compass.bespokemetrics.com.git 
   ```

2. Navigate to the project directory:

   ```
   cd nunjucks-app
   ```

3. Install the required dependencies:

   ```
   npm install
   ```
4. Create a `.env` file in the project root directory with the following content:

   ```
   CLOUDFRONT_DISTRIBUTION_ID=your_distribution_id
   S3_BUCKET_NAME=your_bucket_name
   ```

   Replace `your_distribution_id` with your CloudFront distribution ID and `your_bucket_name` with your S3 bucket name.

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

4. Deploy the application to the S3 bucket and invalidate the CloudFront cache:

   ```
   npm run deploy
   ```

## Customization

To customize the application, you can modify the following files and directories:

- `src/templates`: Contains Nunjucks template files (`.njk`)
- `src/css`: Contains CSS files, including the main `tailwind.css` file
- `src/js`: Contains JavaScript files, including the custom functionality
- `tailwind.config.js`: Configuration for Tailwind CSS

Remember to run `npm run build` after making changes to rebuild the project.

## License

## License

This repository contains the source code for the the public-facing website for the COMPASS Prequalification Tool, a comprehensive platform designed to streamline and simplify the prequalification process for contractors and suppliers. This website provides essential information about the tool, its features, and how to get started with the platform. It aims to serve as a valuable resource for potential users and helps to promote the benefits of the COMPASS Prequalification Tool.. This project is developed and maintained by Bespoke Metrics and is intended for private use only.

**Important**: This project and its contents are the property of Bespoke Metrics and are not intended for distribution or usage outside of Bespoke Metrics. Unauthorized copying, modification, distribution, or any form of usage of this project or its contents, whether in part or in whole, is strictly prohibited without the prior written consent of Bespoke Metrics.

