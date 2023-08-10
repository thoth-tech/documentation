# Preliminary Proposal

**Author:** Ayan Masood, amasood@deakin.edu.au

**Introduction**

This proposal outlines the deployment strategy for an Art Gallery application through the
incorporation of Google Cloud Platform (GCP). It provides a brief overview of all technologies which
will be utilized and a step-by-step process on how to deploy the proposed application.

**Containerized Application**

The first step is to containerize the application which will allow the programming team to access
the app and perform changes to it without having to manually installing all dependencies required on
each device. A Dockerfile containing all required dependencies will be created and made accessible
to all members working on the Art Gallery development process.

**Creating a Kubernetes Cluster**

After containerizing the application, the Kubernetes API in GCP will need to be enabled, then a new
cluster created; which acts as a basis of deployment and operation of containerized applications.
Google Kubernetes Engine (GKE) creates and manages VM instances on the user's behalf so, no manual
setup is required.

**Kubernetes Nodes and Pods**

These are responsible for running containerized applications. It provides a highly scalable
environment for the application. Every node can host multiple pods, which are the smallest
deployable units in Kubernetes. Nodes essentially provide the necessary resources for running the
application; networking, memory, CPU, etc. Each pod represents an instance of the application or a
microservice.

**Deploying to GKE**

To deploy the Art Gallery application to the GKE cluster Kubernetes deployment manifests have to be
defined using the GKE console. These manifests are kubectl commands which define the configuration
of deployment as well as pods and services. For example, when creating a deployment, one typically
needs to provide the following details through the console:

- Name and labels for the deployment
- Container image and tags to use
- Resource requirement outline for containers (CPU and memory)
- Number of replicas (instances) of the application
- Networking settings

**Kubernetes Service- LoadBalancer and Ingress**

After the process of deploying the cluster a service will need to be created which will allow other
pods to access the application. For external traffic (targeted users of the application) a
LoadBalancer will need to be setup in order to expose the application to the internet and those
external networks. An Ingress resource can also be used if more advanced traffic management is
needed such as path-based routing and SSL termination.

**CI/CD Pipeline Integration**

Integrate CI/CD pipelines to automate testing and deployment. Enable resources which allow for
automatic deployment on code changes by programming team to allow for CI/CD approach and a better
collaboration platform.

**Conclusion**

By using GCP the deployment process will be streamlined, scalable and reliable due to the services
and technologies provided. The containerized environment ensure developers can manage resources
efficiently and integrate CI/CD pipelines in order to test and manage the application effectively.
