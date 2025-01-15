# Identify other front end testing tools - SEO

## Adrienne Gelbhauer

## SEO Considerations, Testing and Analysis Tools

Search Engine Optimisation (SEO) involves optimising a website to improve its accuracy, visibility
and ranking in search engine results, leading to increased traffic to the site.

In order to improve SEO there are several steps and considerations in how we implement the websites
code and content, as well as testing and analysis tools we can use during development and ongoingly
to monitor website performance, traffic, and trends.

Search engines can differ in their methods for crawling and indexing websites for search results,
these can also update and change over time. I’ll focus on current considerations for Google’s search
engine as it dominates market share.

Art Gallery website is built on the Vue.js framework, it will be important to identify the unique
challenge SEO for JavaScript frameworks present.

## SEO for JavaScript

When Google’s crawler searches the web for content it does so in two stages: in its first stage it
indexes content and links that it sees and detects, it does this quickly by not executing JavaScript
as this requires more resources; it separates rendering into its second stage which happens at a
later time.

This can present delays indexing content for client-side frameworks that are not enhanced for SEO.

Google Search Central contains documentation on improving SEO as well as specific considerations for
JavaScript. Google Search Central YouTube includes a playlist called JavaScript SEO that has short
videos including one specific to Vue.js web apps.

## Areas to identify / test

### Navigation and Internal Links

Identify if sites navigation structure is compatible with Googles crawler.

Router is set up with specific paths/ URLs for pages; need to identify if we may need to add html a
and href tags in the router links.

### Meta Tags

Vue meta plugin can be used to add meta tags to pages and content including title, description and
keyword tags, effective implementation of tags will enhance how information is indexed and improve
visibility in search engine results.

### Mobile Optimisation

Check optimisation for mobile devices, Google prioritises mobile-friendly websites in search engine
results.

Websites optimised for mobile use less resources, Google prioritises indexing these.

## Testing and Analysis Tools

To test locally we could consider using a tunnelling solution such as ngrok.

### Google Mobile-Friendly Test

Mobile-Friendly Test will allow us to test how mobile-friendly our website is. It analyses
responsiveness and provides recommendations for improvement. Mobile-friendly websites are
prioritised in search engine rankings.

### Google Search Console

Google Search Console can monitor site performance and provide insights on traffic and any technical
issues impacting visibility in search results. In testing this can be used to identify areas of
improvement and ways to optimise our site.

### Google Analytics

Google Analytics may be more useful once the site is live. It provides insights into traffic to the
website, page popularity and how users interact with the site, we can use this data to improve and
target SEO.

### Google Lighthouse

Lighthouse testing looks to improve site performance, relevant to SEO as speed and performance
influence ranking in search results.
