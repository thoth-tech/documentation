## CI/CD Mock Pipeline

**Author:** Ayan Masood, [amasood@deakin.edu.au](mailto:amasood@deakin.edu.au)

**Introduction**

This document contains a step-by-step guide on CI/CD Pipeline integration within the processes of
the online Art Gallery application. It will go over steps to setup tests for both CI and CD in order
to ensure all commits to the GitHub repository and changes to Google Cloud Platform (GCP) meet
requirements set.

**CI Tests**

Tests will need to be included in the **art-gallery/.github/workflows/ci.yml** file. To add tests
the defined environments have to be added under the “steps” line in the yml file.

`name: CI`

`on:`

`pull_request:`

`push:`

`branches: [development]`

`jobs:`

`build:`

`runs-on: ubuntu-latest`

`steps:`

`- uses: actions/checkout@v2`

`- name: Linelint`

`uses: fernandrone/linelint@master`

`- name: Set up Node`

`uses: actions/setup-node@v1`

`with:`

`node-version: 16.14.2`

`- name: Install dependencies`

`run: npm install`

`- name: Prettier`

`run: npm run format:check`

`- name: Vale`

`run: |`

`sudo apt update`

`sudo apt install snapd`

`sudo snap install vale --edge`

`npm run prose:check `

The current file contains checks on formatting mostly with a Linter being setup for whitespace
identification and Prettier support for formatting style of all commits. These tests are performed
on both pull and push requests in the repository. It also sets up Node.js and, Vale for prose
checks.

**Additional Tests**

Testing and building a Docker image and tagging with timestamp and date for traceability:

`- name: Build the Docker image`

`run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)`

Security and code formatting issues with ESLint for JavaScript applications:

`- name: Install ESLint`

`run: `

`npm install eslint@8.10.0`

`npm install @microsoft/eslint-formatter-sarif@2.1.7`

`- name: Run ESLint`

`run: npx eslint .`

`--config .eslintrc.js`

`--ext .js,.jsx,.ts,.tsx`

`--format @microsoft/eslint-formatter-sarif`

`--output-file eslint-results.sarif`

`continue-on-error: true`

`- name: Upload analysis results to GitHub`

`uses: github/codeql-action/upload-sarif@v2`

`with:`

`sarif_file: eslint-results.sarif`

`wait-for-processing: true`

**CD Tests**

A new cd YAML file can be created in the workflows path with all information related to deploying
code on commits which affect the running of the application. An extremely helpful video on editing
and setting up this file can be found at this link:
[https://www.youtube.com/watch?v=DMCi7WWTtX0](https://www.youtube.com/watch?v=DMCi7WWTtX0)

The file itself can be found as a template within GitHub on the actions page:

`name: Build and Deploy to Cloud Run`

`on:`

`push:`

`branches:`

`- master`

`env:`

`PROJECT_ID: YOUR_PROJECT_ID  //Update with your Google Cloud project ID`

`GAR_LOCATION: YOUR_GAR_LOCATION  //Update with your Artifact Registry location`

`SERVICE: YOUR_SERVICE_NAME  //Update with your Cloud Run service name`

`REGION: YOUR_SERVICE_REGION  //Update with your Cloud Run service region`

`jobs:`

`deploy:`

`permissions:`

`contents: 'read'`

`id-token: 'write'`

`runs-on: ubuntu-latest`

`steps:`

`- name: Checkout`

`uses: actions/checkout@v2`

`- name: Google Auth`

`id: auth`

`uses: google-github-actions/auth@v0`

`with:`

`token_format: 'access_token'`

`workload_identity_provider: '${{ secrets.WIF_PROVIDER }}'`

`// Workload Identity Federation provider`

`service_account: '${{ secrets.WIF_SERVICE_ACCOUNT }}'`

`// Service account for WIF`

`// Uncomment the following section to use authentication via credentials JSON`

`// - name: Google Auth`

`// id: auth`

`// uses: google-github-actions/auth@v0`

`// with:`

`// credentials_json: '${{ secrets.GCP_CREDENTIALS }}'`

`// BEGIN - Docker auth and build (NOTE: If you already have a container image, these Docker steps can be omitted)`

`// Authenticate Docker to Google Cloud Artifact Registry`

`- name: Docker Auth`

`id: docker-auth`

`uses: docker/login-action@v1`

`with:`

`username: 'oauth2accesstoken'`

`password: '${{ steps.auth.outputs.access_token }}'`

`registry: '${{ env.GAR_LOCATION }}-docker.pkg.dev'`

`- name: Build and Push Container`

`run: `

`docker build -t "${{ env.GAR_LOCATION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.SERVICE }}:${{ github.sha }}" ./`

`docker push "${{ env.GAR_LOCATION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.SERVICE }}:${{ github.sha }}"`

`// END - Docker auth and build`

`- name: Deploy to Cloud Run`

`id: deploy`

`uses: google-github-actions/deploy-cloudrun@v0`

`with:`

`service: ${{ env.SERVICE }}`

`region: ${{ env.REGION }}`

`image: ${{ env.GAR_LOCATION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.SERVICE }}:${{ github.sha }}`

`- name: Show Output`

`run: echo ${{ steps.deploy.outputs.url }}`

This code can be edited for both use of credentials and authentication thus, can be adjusted for
preferred use.
