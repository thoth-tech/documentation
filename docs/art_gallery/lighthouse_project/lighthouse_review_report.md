# Report on task: Review Research from T1 and create backlog

I have reviewed two reports on the Lighthouse scores and identified the issues that needed to be
rectified. One report was a review on the desktop app and the other was a review on the mobile app.
Both had many errors so, I had to analyse both reports and did some research on finding
recommendations and solutions for the issue identified.

## Desktop App

For the desktop app, here are the problems/recommendations I have identified from the report:

- Properly size images (add explicit width & height for images)
- Work on reducing network payloads
- Serve static assets with efficient cache policy
- Optimise the Largest Contentful Paint (make it faster):
  - Eliminate resource load delay
  - Eliminate element render delay
  - Reduce resource load time
  - Reduce time to first byte
- Reduce the impact of third-party code (identify slow third-party JavaScript)
- Reduce JavaScript execution time:
  - Remove unused code
  - Minify and compress code
  - Implement code splitting
  - Cache code with PRPL pattern
- Minimise main thread work:
  - Evaluate the script (debounce input handlers, use web workers)
  - Check style layout (reduce complexity of style calculations, avoid large, complex layouts).
  - Rendering (manage layer count, simplify paint complexity, and reduce paint areas)
  - Parse HTML and CSS (extract critical CSS, minify CSS, defer non-critical CSS)
- Reduce resource counts and transfer sizes (CSS & JavaScript, Images, Fonts, Documents, Media)
- Minify JavaScript
- Improve page loading speed:
  - Using Preconnect to required origins
  - Preload key requests
- Minimise critical request depth:
  - Minimise number of critical resources (eliminate them, defer their download, etc)
  - Optimize the number of critical bytes and reduce the download time
  - Optimize the order for the remaining resources to be loaded (download all critical assets early
    to shorten critical path length)

## Mobile App

For the mobile app, here are the problems/recommendations I have identified from the report:

- Properly size images (add explicit width & height for images)
- Work on reducing network payloads
- Serve static assets with efficient cache policy
- Optimise the Largest Contentful Paint (make it faster):
  - Eliminate resource load delay
  - Eliminate element render delay
  - Reduce resource load time
  - Reduce time to first byte
- Improve mobile friendliness (appropriately size tap targets)
- Reduce the impact of third-party code (identify slow third-party JavaScript)
- Reduce JavaScript execution time:
  - Remove unused code
  - Minify and compress code
  - Implement code splitting
  - Cache code with PRPL pattern
- Minimise main thread work:
  - Evaluate the script (debounce input handlers, use web workers)
  - Check style layout (reduce complexity of style calculations, avoid large, complex layouts).
  - Rendering (manage layer count, simplify paint complexity, and reduce paint areas)
  - Parse HTML and CSS (extract critical CSS, minify CSS, defer non-critical CSS)
- Reduce resource counts and transfer sizes (CSS & JavaScript, Images, Fonts, Documents, Media)
- Minify JavaScript
- Improve page loading speed:
  - Using Preconnect to required origins
  - Preload key requests
- Minimise critical request depth:
  - Minimise number of critical resources (eliminate them, defer their download, etc)
  - Optimize the number of critical bytes and reduce the download time
  - Optimize the order for the remaining resources to be loaded (download all critical assets early
    to shorten critical path length)
- Shorten main-thread tasks
- Check and use discernible name for links
- Add meta description to document

I have added cards and allocated story points for each of these problems and recommendations into
the Trello board under the ‘Lighthouse Project Implementation’ section.
