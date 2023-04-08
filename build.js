const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const moment = require('moment');

const srcPath = path.resolve(__dirname, 'src/templates');
const blogsSrcPath = path.resolve(__dirname, 'src/templates/blogs');
const distPath = path.resolve(__dirname, 'dist');
const blogsDistPath = path.resolve(__dirname, 'dist/blogs');

// Create the blogsDistPath if it doesn't exist
if (!fs.existsSync(blogsDistPath)) {
  fs.mkdirSync(blogsDistPath, { recursive: true });
}

// Configure Nunjucks
const env = nunjucks.configure(srcPath, { autoescape: true });

// Add custom date filter
env.addFilter('date', (value, format) => {
  return moment(value).format(format);
});

// A list of pages to render
const pages = [
  { template: 'homepage.njk', outputFile: 'index.html' },
  // Add other pages here as you create them
];

// Render the blog posts
pages.forEach((page) => {
   const output = nunjucks.render(path.join(srcPath, page.template), {
     currentTimestamp: new Date().toISOString(),
   });
   fs.writeFileSync(path.join(distPath, page.outputFile), output);
});
// render the blog posts
fs.readdir(blogsSrcPath, (err, files) => {
  if (err) {
    console.error(`Error reading the blogs directory: ${err}`);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.njk')) {
      const output = nunjucks.render(path.join(blogsSrcPath, file), {
        currentTimestamp: new Date().toISOString(),
      });
      fs.writeFileSync(path.join(blogsDistPath, file.replace('.njk', '.html')), output);
      console.log(`Rendered blogs/${file} -> blogs/${file.replace('.njk', '.html')}`);
    }
  });
});
