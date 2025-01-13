# Deployment Strategies

**Title:** Comparison of Deployment Strategies

**Author:** Ayan Masood, <amasood@deakin.edu.au>

## Goals / Deliverables

- Identify the strengths and weakness of various deployment platforms
- Shortlist the best posible technique/s to deploy the proposed application
- Compare different resources available to company goals and requirements

## Resources

- AWS Documentation:
- Auto Scaling:
  [https://www.youtube.com/watch?v=4EOaAkY4pNE](https://www.youtube.com/watch?v=4EOaAkY4pNE)
- Lambda: [https://www.youtube.com/watch?v=7wLg4IR07so](https://www.youtube.com/watch?v=7wLg4IR07so)
- Availability Zones:
  <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html>
- GCP Documentation:
- Pricing:[https://cloud.google.com/pricing](https://cloud.google.com/pricing)
- Scalability Differences:
  [https://davidmytton.blog/aws-vs-google-cloud-flexibility-vs-operational-simplicity/](https://davidmytton.blog/aws-vs-google-cloud-flexibility-vs-operational-simplicity/)
- Security Functionality:
  [https://kinsta.com/blog/google-cloud-vs-aws/](https://kinsta.com/blog/google-cloud-vs-aws/)
- GitHub Pages Documentation:
- Overview: <https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages>
- Limitations:
  [https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github#file-and-repository-size-limitations](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github#file-and-repository-size-limitations)

## What we found out

Amazon Web Services (AWS):

- Feasibility: Widely adopted with extensive documentation and resources available for
  implementation and problem solving.
- Cost: depends upon traffic and features used. Pay-as-you-go options for different functionality
  requirements.
- Ease of Use: AWS provides a wide range of services and features, which can make it overwhelming
  for beginners. While some services offer user-friendly interfaces and easy setup, others might
  require advanced knowledge of console commands and configurations. The level of ease of use can
  vary on user knowledge and familiarity of cloud technologies.
- Scalability: Excellent scalability options with Auto Scaling, Elastic Load Balancing, and AWS
  Lambda. Auto Scaling is a service which helps the user to monitor applications and has the ability
  to automatically adjust the capacity of the infrastructure in order to maintain efficient,
  predictable performance. This is used in conjunction with the Load Balancer which transfers
  traffic between different instances to distribute the workload helping to easily scale the
  infrastructure up or down, depending on user requirement. AWS Lambda scales user code to the
  number of requests, removing the need to manually manage service resources and is also capable of
  creating additional instances to handle increased load on the system.
- Availability: High level of availability through multiple Availability Zones and Local Zones. The
  cloud computing resources of AWS are hosted in numerous locations worldwide. Local Zones allow
  resources to be placed in multiple regions and thus, closer to the targeted users.
- Security: Robust security measures with encryption, access controls, and network security built-in
  removing the need to work with third-party software for security purposes, helping to have a
  single environment for management and deployment.

Google Cloud Platform (GCP):

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

GitHub Pages:

- Feasibility: It is more suited to hosting static websites; contains pre-built data only capable of
  altering data manually, which the Art Gallery would not fall into as a database has to be used to
  alter contents dynamically. There are also certain usage limits on large files which may also
  negatively impact the feasibility.
- Cost: It is the cheapest of the three and is free for public repositories. For private there are
  some limitations and additional cost but it is still the more cost-effective option.
- Ease of Use: Extremely easy to use especially if user has previous GitHub knowledge. It is as
  simple as pushing data into a repository or enabling GitHub Pages in the repository settings.
- Scalability: In comparison to GCP and AWS scalability is poor as it is primarily designed to be
  used for small to medium-sized static websites, which can handle moderate traffic to the platform.
- Availability: Cannot manually select regions; auto allocated to nearest position. Less
  multiregional support and
- Security: Basic security measure provided such as HTTPS and Rate Limiting but, more customizable
  encryptions and advanced DDOS protection is not available.

## Recommendations

1. For the current project GitHub Pages is not suitable. It offers very low flexibility in terms of
   features available and the lack of support for dynamic websites makes it unsuitable for this
   particular project.

2. AWS and GCP have very limited differences between them in all the 6 categories discussed in each
   platform. Selection should depend on development team knowledge and familiarity between the two
   resources.

3. If the team were to use primarily Google based software/resources GCP would be more suitable for
   linking and management of that particular type of data, making it the better choice in that
   scenario.
