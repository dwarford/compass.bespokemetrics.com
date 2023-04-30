const { SiteChecker } = require('broken-link-checker');
/**
* Creates a new SiteChecker instance to check for broken links on a website.
* @param {Object} options - Configuration options for the SiteChecker instance.
* @param {boolean} options.excludeInternalLinks - Whether to exclude internal links from the check.
* @param {boolean} options.excludeExternalLinks - Whether to exclude external links from the check.
* @param {number} options.filterLevel - Determines the depth of the check (0 for HTML only, 1 for HTML and linked resources, 2 for all resources and their dependencies).
* @param {Object} eventHandlers - Event handlers for the SiteChecker instance.
* @param {Function} eventHandlers.error - Handles errors encountered during the check.
* @param {Function} eventHandlers.link - Handles the results of individual link checks.
* @param {Function} eventHandlers.end - Handles the end of the broken link check.
*/
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

// Enqueue the specified URL for broken link checking
siteChecker.enqueue('http://127.0.0.1:8080');

