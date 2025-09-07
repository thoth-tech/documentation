---
title: Introduction to Lighthouse and OnTrack Report
---

Lighthouse is an open-source, automated tool to help you improve the quality of web pages. You can run it on any web page, public or requiring authentication. It has audits for performance, accessibility, SEO, and more.

- **Performance:** How quickly and efficiently your page loads and functions for users.  
- **Accessibility:** How well your page can be used by people with disabilities.  
- **Best Practices:** Adherence to web standards and best coding practices for a secure and reliable site.  
- **SEO (Search Engine Optimization):** How well your page is structured and optimized for search engines to find and rank.  

In this report, I mainly focus on the **Performance** and **Accessibility** results for the **Development Environment** and **Production Environment** (ontrack.deakin.edu.au).

---

## Developmental Environment Report

The following report is conducted for the developmental environment of the OnTrack Project.

- **Performance:** 32/100 – needs significant improvement  
- **Accessibility:** 85/100 – good  
- **Best Practices:** 96/100 – very good  
- **SEO:** 100/100 – perfect  

### Performance
**Overall:** 32/100 score

| Metric | Value | Target |
|--------|-------|--------|
| First Contentful Paint (FCP) | 10.9s | <2s |
| Largest Contentful Paint (LCP) | 21.7s | <2.5s |
| Speed Index | 11.1s | <3s |
| Time to Interactive (TTI) | 21.7s | <5s |
| Total Blocking Time (TBT) | 580ms | <200ms |
| Cumulative Layout Shift (CLS) | 0 | Good |

**Main Issues:**
- Heavy JS & CSS: `scripts.js` (6.4MB) and `main.js` (4.8MB) are massive  
- Render-Blocking Resources: CSS like `styles.css` delays paint by 1.7s  
- Unminified / Uncompressed Assets: Stylesheet wastes ~100KB, no text compression adds 18MB extra payload  
- Image Optimisation: Some images not optimized/modern formats  
- Long Main-Thread Tasks: Heavy JS tasks block interaction (353ms + 328ms)

### Accessibility
**Score:** 85/100 – good

- Most elements have proper labels and are keyboard-accessible  
- Color contrast meets requirements for most text  
- Headings are structured logically, aiding screen reader navigation  

**Issues:**
- Some form elements missing explicit labels  
- A few ARIA attributes are misapplied or redundant  
- Minor contrast issues on secondary buttons and links  

---

## Production Environment Report

The following report is conducted for the production environment of the OnTrack Project.

- **Performance:** 55/100 – moderate, needs improvement  
- **Accessibility:** 85/100 – good  
- **Best Practices:** 96/100 – very good  
- **SEO:** 91/100 – strong but not perfect  

### Performance
**Overall:** 55/100 score

| Metric | Value | Target |
|--------|-------|--------|
| First Contentful Paint (FCP) | ~1.8s | <2s |
| Largest Contentful Paint (LCP) | 3.2s | <2.5s |
| Speed Index | 2.8s | <3s |
| Time to Interactive (TTI) | 3.4s | <5s |
| Total Blocking Time (TBT) | 340ms | <200ms |
| Cumulative Layout Shift (CLS) | 0.005 | Excellent |

**Main Points:**
- Pages are much faster than in development (down from 21s+ to ~3s)  
- JavaScript execution and blocking time still drag performance slightly  
- Caching could be stronger (some assets lack efficient cache policy)  
- Overall load experience is smooth and stable but not fully optimized  

**Main Issues:**
- Largest Contentful Paint (3.2s): slightly slower than recommended; improve with next-gen image formats, proper sizing, CDN  
- Total Blocking Time (340ms): above target; caused by JS execution  
- JavaScript Execution: heavy scripts delay responsiveness  
- Caching Policy: not all static assets cached efficiently  

### Accessibility
**Score:** 85/100 – good

- Labels, headings, and contrast mostly correct  
- Keyboard navigation works across core flows  
- Live site maintains accessible use  

**Issues:**
- Some inputs missing labels  
- Occasional low contrast in certain UI states (hover/focus)  
- ARIA role usage could be refined  

---

## Running Lighthouse

1. Download **Google Chrome** for Desktop  
2. Open Chrome, and go to the URL you want to audit (any URL)  
3. Open **Chrome DevTools**  
4. Click the **Lighthouse** tab  
5. Click **Analyze page load** – leave all audit categories enabled  
6. Click **Run audit** – after 30–60 seconds, Lighthouse generates a report  

More info: [Lighthouse Overview](https://developer.chrome.com/docs/lighthouse/overview)
