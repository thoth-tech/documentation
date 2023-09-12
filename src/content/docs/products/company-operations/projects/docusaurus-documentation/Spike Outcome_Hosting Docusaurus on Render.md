---
title: Spike Outcome_Hosting Docusaurus on Render
---

==================

**Spike:** 1

**Title:** Docusaurus Hosting

**Author:** Onyedikachi Okorie

## Goals / Deliverables

The goal of this report is to determine if Docusaurus website can be hosted on a free hosting
platform called **Render**.

## Technologies, Tools, and Resources used

- Project Repository: GitHub
- Hosting Platform: Render
- Text Editor: VsCode

## Tasks undertaken for Test 1

The following steps were used to test the publishing of docusaurus website on render.

1. Navigate to [https://render.com/](https://render.com/), you would be presented with a page to
   sign up or sign in. You can sign in using Google.
2. It takes you to a dashboard, select New at the top right corner and choose Web Service.
   ![New button](/render-tut-2.png)
3. On the next page, input the GitHub repository. The repository used for this test was,
   [https://github.com/thoth-tech/Company-Operations/tree/main/Projects/docusaurus-website](https://github.com/thoth-tech/Company-Operations/tree/main/Projects/docusaurus-website)
4. Input the link and click continue. ![Input link](/render-tut-1.png)
5. Input the following values to configure the web service.
   - Name: Docusaurus Hosting
   - Branch: main
   - Runtime: Node
   - Build Command: npm install
   - Start Command: npm start
   - Click Create Service

## Tasks undertaken for Test 2

1. Sign into renders dashboard.
2. On the top right corner, select New and choose Static Website.
3. On the next page, input the GitHub repository. The repository used for this test was,
   [https://github.com/thoth-tech/Company-Operations](https://github.com/thoth-tech/Company-Operations)
4. Input the following details to configure the service
   - Name: Docusaurus Hosting1
   - Branch: main
   - Root Directory: [Projects/docusaurus-website](Projects/docusaurus-website)
   - Build command: yarn install; yarn build
   - Publish directory: ./build

## What we found out

The test was unsuccessful for both Test 1 and 2. In Test 1, the build executed successfully but on
the run command it fails.

- Successful build ![Input link](/render-tut-3.png)
- Failed run ![Input link](/render-tut-4.png)

For Test 2, the deployment server was successfully started but the build failed. Failed run
![Input link](/render-tut-5.png)

After testing with a different GitHub repository that contained the docusaurus website
configuration, the build was successful and Render logs showcased the Site as being live. However,
on going to the provided URL, it shows the message "Not found." ![Input link](/render-tut-6.png)

The failure could be because Render has not been given permission to our repository.

## Open issues

- Render does not have required permission to our repository.
- On navigating to the link provided by Render for the Live site which deployed successfully, it
  gives a "Not found" error message. ![Input link](/render-tut-7.png)

## Recommendations

- Grant Render **write** permission to our repository.
- Explore and test other free hosting platforms.
- Do more research on hosting docusaurus on Render.
