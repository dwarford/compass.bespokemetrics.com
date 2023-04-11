const { SiteChecker } = require('broken-link-checker');

const siteChecker = new SiteChecker(
  {
    excludeInternalLinks: false,
    excludeExternalLinks: false,
    filterLevel: 0,
  },
  {
    error: (error) => console.error(`Error: ${error}`),
    link: (result) => {
      if (result.broken) {
        console.error(`Broken link: ${result.url.resolved} (${result.brokenReason})`);
      }
    },
    end: () => console.log('Finished checking for broken links.'),
  },
);

siteChecker.enqueue('http://127.0.0.1:8080');

