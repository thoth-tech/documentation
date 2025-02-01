# Google Cloud - Research Documentation

[Introduction](#introduction)

[Aims](#aims)

[Findings](#findings)

- [Google Cloud](#google-cloud)
- [CI/CD Deployments](#cicd-deployments)
- [Docker containers](#docker-containers)
- [Artifact Registry](#artifact-registry)
- [OnTrack/Doubtfire deployment and components](#ontrackdoubtfire-deployment-and-components)

[Learnings](#learnings)

[Outcomes](#outcomes)

[References](#references)

[Links](#links)

---

## Introduction

The Deployment project aim is to create an employee-run deployment of OnTrack separated from the
existing Deakin version and hosted on Google Cloud.

## Aims

1. Understanding of Google Cloud services, Deployments;
2. Understanding of Docker containers;
3. Understanding of the overall OnTrack deployment and components;

## Findings

### Google Cloud

**Google Cloud Platform (GCP)** is a cloud service platform that allows you to build cloud resources
and platforms, leveraging cloud native services and features.

Google Compute Engine (GCE) is the Infrastructure as a Service (IaaS) component of Google CLoud
Platform (GCP) [1]. It is the service that provides virtual machines (VMs) as server resources in
the cloud.

Cloud Build and Cloud Run are services offered by Google Cloud to achieve part of the CI/CD
deployment. Cloud Build is designed to help you execute your builds on Google Cloud from your source
code in your git repositories. Cloud Run is designed to run containers as a serverless, compute
platform.

Once your Google Cloud account and project is setup, there are IAM users & roles which will need to
be setup to access Google Cloud services. The account administrator would also need to enable the
desired Google Cloud services, such as Cloud Build and Cloud Run, as they are not enabled by
default. IAM users & roles will then need to be assigned to the enabled services.

### CI/CD Deployments

Once you are setup with a Google Cloud account and project, you can setup a CI/CD pipeline to
perform the steps of build, test, and deploy to Google Cloud. The source code will need to be in a
git repository and Google Cloud will need access to monitor the actions of the git repository. For
example, you can setup either commits or pull requests to be monitored which will trigger a build
within Cloud Build.

### Docker containers

**Docker** allows you to package and run an application in a loosely isolated environment [2]
referred to as a container. The container is a portable and lightweight image that contains
everything needed to run an application without any reliance of installed apps or components on the
host server.

Docker compose is the tool to define and run Docker applications. A `Dockerfile` defines the app's
environment. A `docker-compose.yaml` file defines the services that make up your app in YAML. And
`docker compose up` starts and runs your entire app [3].

### Artifact Registry

Initially, we reviewed the use of Google Container Registry (GCR) service in Google Cloud as a
repository for container images. However upon reading Google Cloud's documentation, it highlighted
that Artifact Registry is the recommended service for managing container images [4] artifacts for
Google Cloud projects. Private images can be pushed to a GCR repository and pulled for use within
GCP.

### OnTrack/Doubtfire deployment and components

The **Doubtfire** (commonly known as **OnTrack**) deployment guide we referred to outlines that
Doubtfire is deployed using Docker containers described in a docker compose [5]. The application
involves the following components:

> - a proxy, based on nginx, that handles HTTPS and routes traffic to the webserver or apiserver
>   containers.
> - a webserver, based on nginx, that serves the static html/css/javascript/etc files.
> - an apiserver, based on rails, that serves the restful API used by the application.
> - an application server (pdfgen), based on rails, that uses cron jobs to periodically generate
>   PDFs from student submissions, and send status emails.
> - a database server, based on Maria DB or MySql used by the api and application servers to persist
>   data
> - file storage connected to the apiserver and application server for storing student work
> - an external mail server to send emails
> - an external authentication server to authenticate users.

> (Source:
> [doubtfire-deploy GitHub repo](https://github.com/thoth-tech/doubtfire-deploy/blob/main/DEPLOYING.md))

There are quite a few steps that will need to be performed to configure the above components. The
team will require a high-level understanding of the components, services, and frameworks used for
the setup and changes required.

### Learnings

- After a couple of discussions with the Pipelines team and Andrew Cain, it was determined that
  Cloud Build and Cloud Run had some limitations and may not be ideal to be able to cater for the
  wider team at Thoth-Tech. As a result, the Google Cloud and Pipelines teams have moved on to
  consider other options that would be more viable and aligned to the goals of the project.
- In order to use Artifact Registry, the service will need to be enabled in your Google Cloud
  Platform (GCP) project.
- In order to push or pull a container image, Docker will need to be installed and configured.
- The team will need a high-level understanding of components such as nginx, rails, pdfgen, database
  servers (MariaDB or MySql), Action Mailer, Dockerfile, and `docker-compose.yaml`.

## Outcomes

Following the team's research of Google Cloud and its services, deployments, and Docker containers,
the team have determined the following outcomes:

1. Provide a high-level design and document architecture overview of how Google Cloud Platform (GCP)
   will be used to support overall deployment and CI/CD pipelines to run resources for this project;
2. Organise the team's access to GCP and GCP project;
3. Create user stories / Trello cards for configuration of components required for the Doubtfire
   deployment;
4. Plan to build the platform requirements to deploy an instance of Doubtfire within GCP;

## References

[1] Wikipedia (n.d.). Google Compute Engine [Webpage]. Available:
https://en.wikipedia.org/wiki/Google_Compute_Engine

[2] Docker (n.d.). Docker overview [Webpage]. Available:
https://docs.docker.com/get-started/overview/

[3] Docker (n.d.). Overview of Docker Compose [Webpage]. Available: https://docs.docker.com/compose/

[4] Google Cloud (n.d.). Container Registry [Webpage]. Available:
https://cloud.google.com/container-registry/docs

[5] Thoth-Tech (n.d.). Doubtfire-deploy [Webpage]. Available:
https://github.com/thoth-tech/doubtfire-deploy/blob/main/DEPLOYING.md

## Links

- [GitHub repo for Thoth-Tech/Doubtfire-deploy](https://github.com/thoth-tech/doubtfire-deploy)
- [GitHub repo for Thoth-Tech/Doubtfire-deploy/DEPLOYING.md](https://github.com/thoth-tech/doubtfire-deploy/blob/main/DEPLOYING.md)
- [Trello board for Deployment - Google Cloud epic](https://trello.com/b/dI1yx9A1/deployment)
