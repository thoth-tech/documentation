# Indigenous Art Gallery

## Dockerization feasibility check

**Capstone SIT374 - Chloe Hulme**

_Preamble_

The aim of this study is to check the feasibility of Dockerizing the Indigenous Art Gallery Project.

_Research Information_

The biggest hurdle within this project will be understanding the Docker platform and gaining some
familiarity with it as I have no prior experience using Docker. I have identified the following
resources to cross check the feasibility of this task.

<https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html>

<https://www.makeuseof.com/docker-image-dot-net-web-api/>

<https://learn.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=windows>

<https://dev.to/berviantoleo/web-api-in-net-6-docker-41d5>

<https://docs.docker.com/get-started/02_our_app/>

<https://milanwittpohl.com/projects/tutorials/Full-Stack-Web-App/dockerizing-our-front-and-backend>

<https://www.youtube.com/watch?v=3s-RfwvijpY>

_Outcome_

After some preliminary research, it was determined that a Docker image must first be created. This
is done by including a Dockerfile in the root directory of the project. Once the requisite details
are included in the Dockerfile, it is a matter of building a container image and running the
container.

This process will ned to be completed for both the front and back ends as they should be kept in
seperate containers as best practice.

_Plan_

From this week I will begin more serious up-skilling on Docker. Once I am equipped with a better
understanding of the platform, I will begin preparing the Dockerfiles for the front and back ends
and building the container images. By week 6 I want to have at least one of the containers up and
running - I will most likely begin with the backend as I am more familiar with this part of the
project given I contributed to building it.
