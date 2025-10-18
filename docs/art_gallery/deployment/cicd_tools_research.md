# CI/CD Technologies

Author: Chloe Hulme

Research discussing popular CI/CD tools, and which is best suited to automating the Art Gallery's
deployment.

## Jenkins

**Pros:**

- Completely free
- Plugins available, very customisable (can integrate Docker)
- Widely used in industry, lots of information/resources available
- Integrates with GitHub
- Branch-specific deployment possible

**Cons:**

- Time consuming/confusing setup
- Less intuitive than other tools
- Requires more maintenance than other tools
- Does not natively support Docker
- On-premise service, infrastructure management required

## CircleCI

**Pros:**

- Integrates with GitHub
- Free tier
- Easy setup, particularly if project hosted on GitHub
- Straightforward and modern interface
- Supports Docker
- Cloud-hosted service
- Branch-specific deployment possible

**Cons:**

- Free tier can be limited (resource constraints)
- Less extensive plugin support compared to Jenkins
- Can be costly for resource intensive builds

## GitLab

**Pros:**

- Integrates with GitHub
- Free tier
- Setup and configuration straightforward
- Easily defined pipelines using ‘.gitlab-ci.yml’
- Supports Docker
- Cloud hosted or on-premise service
- Branch-specific deployment possible

**Cons:**

- Requires higher-tier plan (expensive) for more advanced features
- Not as popular as other CI/CD tools

## GitHub Actions

**Pros:**

- Native integration with GitHub repositories (easy setup and configuration)
- Generous free tier for public repositories
- Offers a variety of pre-built actions
- We already have a working CI pipeline here that can be extended
- Supports Docker
- Cloud-hosted service
- Branch-specific deployment possible

**Cons:**

- Can become costly for resource intensive workflows
- Not as established as other CI/CD tools (less documentation/resources?)

## TeamCity

**Pros:**

- Well-established tool, lots of resources available
- Easy to setup and configure, highly intuitive interface
- Good support for version control systems such as GitHub
- Plugins available (can integrate Docker)
- Free tier
- Branch-specific deployment possible

**Cons:**

- Licence required for commercial use (does that include us?)
- Free tier is limited
- On-premise service, infrastructure management required

┌----------------------------------┼---Jenkins---CircleCI-----GitLab----GitHub Actions---TeamCity-┐
|Completely free-------------------┼---- ✓ ----┼---- ✗ ----┼---- ✗ ----┼----- ✗ ------┼---- ✗ ----|
|Free-tier available---------------┼---- ✓ ----┼---- ✓ ----┼---- ✓ ----┼----- ✓ ------┼---- ✓ ----|
|Cloud hosted----------------------┼---- ✗ ----┼---- ✓ ----┼---- ✗ ----┼----- ✓ ------┼---- ✗ ----|
|Branch-specific deployment--------┼---- ✓ ----┼---- ✓ ----┼---- ✓ ----┼----- ✓ ------┼---- ✓ ----|
|Natively integration with GitHub--┼---- ✓ ----┼---- ✓ ----┼---- ✓ ----┼----- ✓ ------┼---- ✓ ----|
|Native support for Docker---------┼---- ✗ ----┼---- ✓ ----┼---- ✓ ----┼----- ✓ ------┼---- ✗ ----|
|Ease of setup/config--------------┼---- ✗ ----┼---- ✓ ----┼---- ✓ ----┼----- ✓ ------┼---- ✓ ----|
|Well-established tool-------------┼---- ✓ ----┼---- ✓ ----┼---- ✗ ----┼----- ✗ ------┼---- ✓ ----|
└──-----------------------------------------------------------------------------------------------┘

**Recommendation:** GitHub Actions is the best choice as a CI/CD pipeline tool in this project. The
team is already familiar with this tool given the currently utilised CI pipeline. Additionally, the
generous free tier makes this an attractive choice. Finally, centralising our work will allow us to
streamline future changes/fixes to our pipeline as the team inevitably hands the project over to
future cohorts.

UPDATE (27/7): After discussion with the client, it is confirmed that GitHub Actions will be our
CI/CD tool of choice.
