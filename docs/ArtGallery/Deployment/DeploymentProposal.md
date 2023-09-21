##Deployment Proposal

**Author:** Ayan Masood, [amasood@deakin.edu.au](mailto:amasood@deakin.edu.au)

**Introduction**

This document outlines all requirements needed to effectively deploy the Art Gallery application
with details on why and how certain resources are to be used while also incorporating continuous
integration and development (CI & CD) in the processes of the organization.

**Google Cloud Platform (GCP)**

- Feasibility: Strong contender with diverse services and language/framework support. It offers a
  more simplified interface which can aid to provide a better experience.
- Cost: Pay-as-you-go model; cost estimation and control are crucial. Pricing depends upon number of
  instances and resources allocated. Offers discounts on continued use decreasing of service.
- Ease of Use: Built-in integration with google services, simplified user interface and layout. If
  working with google applications they are easier to link. Not much different to AWS in regards of
  functionality.
- Scalability: Excellent scalability with managed instance groups and automatic scaling. Similar
  features to discussed AWS such as; Load Balancing, AWS Lambda, which the counterpart for google is
  Cloud Functions. In contrast to the more flexible AWS, GCP appeals more towards simplicity to be
  more scalable; fixed pricing plans, easy to use interface, etc.
- Availability: High level availability with multi-region deployments however less cloud network
  locations offered than AWS.
- Security: Robust security features with IAM roles, encryption, and DDoS protection. Identical
  functionality to AWS.

GCP was selected for deploying and CI/CD integration due to its ease of use and competitive pricing,
in comparison to features provided in similar online platforms. The matching of features of Amazon
Web Services (AWS) coupled with the utilities of easy linking of other Google applications made it
the ideal platform for deployment.

**GCP Security Policy**

An access system is needed for ensuring the security of the application and code. This is to remove
any issues relating to the vulnerability of the platform itself and to keep an efficient system to
avoid any mistakes in relation to management of access for different users.

- **Setting Up User Credentials**

Service accounts will need to be created for every person working on the application on GCP. These
accounts have the ability for the admin to assign roles to them which limits access and certain
capabilities to the admin’s choosing. For example, only making certain parts of the project viewable
only, allowing the user to edit the application itself, etc.

- **Account Key**

Each service account will require an account key. This key allows access to the account thus,
keeping it secure is extremely important. The account key and its details are inside a JSON file
which the account holder has to present in order to gain access to their predefined roles and make
changes. These keys will have to be rotated after a particular period; this step involves deleting
the previous key and generating a new one for every account to ensure it is not being misused or
another person has gained access to the previous credentials.

Service accounts and keys provide a secure and controlled approach for access of GCP resources
without sharing/storing of personal credentials. This approach is best suited for the management of
access and control of limitation on users working on the development component of the application

**Deploying with GCP**

- **Containerized Application**

The first step is to containerize the application which will allow the programming team to access
the app and perform changes to it without having to manually installing all dependencies required on
each device. A Dockerfile containing all required dependencies will be created and made accessible
to all members working on the Art Gallery development process.

- **Creating a Kubernetes Cluster**

After containerizing the application, the Kubernetes API in GCP will need to be enabled, then a new
cluster created; which acts as a basis of deployment and operation of containerized applications.
Google Kubernetes Engine (GKE) creates and manages VM instances on the user’s behalf so, no manual
setup is required.

- **Kubernetes Nodes and Pods**

These are responsible for running containerized applications. It provides a highly scalable
environment for the application. Every node can host multiple pods, which are the smallest
deployable units in Kubernetes. Nodes essentially provide the necessary resources for running the
application; networking, memory, CPU, etc. Each pod represents an instance of the application or a
microservice.

- **Deploying to GKE**

To deploy the Art Gallery application to the GKE cluster Kubernetes deployment manifests have to be
defined using the GKE console. These manifests are kubectl commands which define the configuration
of deployment as well as pods and services. For example, when creating a deployment, one typically
needs to provide the following details through the console:

- Name and labels for the deployment
- Container image and tags to use
- Resource requirement outline for containers (CPU and memory)
- Number of replicas (instances) of the application
- Networking settings

These act as a foundation for deploying the application.

- **Kubernetes Service- LoadBalancer and Ingress**

After the process of deploying the cluster a service will need to be created which will allow other
pods to access the application. For external traffic (targeted users of the application) a
LoadBalancer will need to be setup in order to expose the application to the internet and those
external networks. An Ingress resource can also be used if more advanced traffic management is
needed such as path-based routing and SSL termination.

**CI/CD Pipeline**

Integrate CI/CD pipelines to automate testing and deployment. Enable resources which allow for
automatic deployment on code changes by programming team to allow for CI/CD approach and a better
collaboration platform.

- **CI Tests**

Tests will need to be included in the **art-gallery/.github/workflows/ci.yml** file. To add tests
the defined environments have to be added under the “steps” line in the yml file.

`name: CI `

`on: `

`pull_request: `

`push: `

`branches: [development] `

`jobs: `

`build: `

`runs-on: ubuntu-latest `

`steps: `

`- uses: actions/checkout@v2 `

`- name: Linelint `

`uses: fernandrone/linelint@master `

`- name: Set up Node `

`uses: actions/setup-node@v1 `

`with: `

`node-version: 16.14.2 `

`- name: Install dependencies `

`run: npm install `

`- name: Prettier `

`run: npm run format:check `

`- name: Vale `

`run: | `

`sudo apt update `

`sudo apt install snapd `

`sudo snap install vale --edge `

`npm run prose:check `

The current file contains checks on formatting mostly with a Linter being setup for whitespace
identification and Prettier support for formatting style of all commits. These tests are performed
on both pull and push requests in the repository. It also sets up Node.js and, Vale for prose
checks.

- **Additional Tests**

Testing and building a Docker image and tagging with timestamp and date for traceability:

`- name: Build the Docker image `

`run: docker build . --file Dockerfile --tag my-image-name:$(date +%s) `

Security and code formatting issues with ESLint for JavaScript applications:

`- name: Install ESLint `

`run: |`

`npm install eslint@8.10.0 `

`npm install @microsoft/eslint-formatter-sarif@2.1.7 `

`- name: Run ESLint `

`run: npx eslint . `

`--config .eslintrc.js `

`--ext .js,.jsx,.ts,.tsx `

`--format @microsoft/eslint-formatter-sarif `

`--output-file eslint-results.sarif `

`continue-on-error: true `

`- name: Upload analysis results to GitHub `

`uses: github/codeql-action/upload-sarif@v2 `

`with: `

`sarif_file: eslint-results.sarif `

`wait-for-processing: true `

- **CD Tests**

A new cd.yaml file can be created in the workflows path with all information related to deploying
code on commits which affect the running of the application.

The file itself can be found as a template within GitHub on the actions page:

`name: Build and Deploy to Cloud Run `

`on: `

`push: `

`branches:`

`- master `

`env: `

`PROJECT_ID: YOUR_PROJECT_ID  //Update with your Google Cloud project ID `

`GAR_LOCATION: YOUR_GAR_LOCATION  //Update with your Artifact Registry location `

`SERVICE: YOUR_SERVICE_NAME  //Update with your Cloud Run service name `

`REGION: YOUR_SERVICE_REGION  //Update with your Cloud Run service region `

`jobs:`

`deploy: `

`permissions: `

`contents: 'read' `

`id-token: 'write' `

`runs-on: ubuntu-latest `

`steps: `

`- name: Checkout `

`uses: actions/checkout@v2 `

`- name: Google Auth `

`id: auth `

`uses: google-github-actions/auth@v0 `

`with: `

`token_format: 'access_token' `

`workload_identity_provider: '${{ secrets.WIF_PROVIDER }}' `

`// Workload Identity Federation provider `

`service_account: '${{ secrets.WIF_SERVICE_ACCOUNT }}' `

`// Service account for WIF `

`// Uncomment the following section to use authentication via credentials JSON `

`// - name: Google Auth `

`// id: auth `

`// uses: google-github-actions/auth@v0 `

`// with: `

`// credentials_json: '${{ secrets.GCP_CREDENTIALS }}' `

`// BEGIN - Docker auth and build (NOTE: If you already have a container image,

these Docker steps can be omitted) `

`// Authenticate Docker to Google Cloud Artifact Registry `

`- name: Docker Auth `

`id: docker-auth `

`uses: docker/login-action@v1 `

`with: `

`username: 'oauth2accesstoken' `

`password: '${{ steps.auth.outputs.access_token }}' `

`registry: '${{ env.GAR_LOCATION }}-docker.pkg.dev' `

`- name: Build and Push Container `

`run: | `

`docker build -t "${{ env.GAR_LOCATION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.SERVICE }}:${{ github.sha }}" ./ `

`docker push "${{ env.GAR_LOCATION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.SERVICE }}:${{ github.sha }}" `

`// END - Docker auth and build `

`- name: Deploy to Cloud Run `

`id: deploy `

`uses: google-github-actions/deploy-cloudrun@v0 `

`with: `

`service: ${{ env.SERVICE }} `

`region: ${{ env.REGION }} `

`image: ${{ env.GAR_LOCATION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.SERVICE }}:${{ github.sha }} `

`- name: Show Output `

`run: echo ${{ steps.deploy.outputs.url }} `

This code can be edited for both use of credentials and authentication thus, can be adjusted for
preferred use.

**Conclusion**

By using GCP the deployment process will be streamlined, scalable and reliable due to the services
and technologies provided. The containerized environment ensure developers can manage resources
efficiently and integrate CI/CD pipelines in order to test and manage the application effectively.
