# 2023 T2 Handover - Art Gallery Project

Author: Chloe Hulme (Product Lead)

## What we have accomplished

- Preparation for deployment (including selecting GCP and GitHub Actions for CI/CD and deployment,
  preparaing cybersecutiy policies for deployment, documenting all deployment knowledge - please see
  deployment documentation)
- Migrating the API to .NET 8 (including migrating containers)
- Implementing asynchrony across the Repository Pattern of the API
- Creating collection with automated testing for API in Postman (see: README in documentation repo -
  there may be issues with numbers of accounts in the workspace, speak to staff to resolve)
- Research on IIIF (see documentation repo)
- Improving lighthouse scores after reviewing Lighthouse report
- Preliminary designs made in Figma to redo front end

## What we need to do next (in order of priority)

- Update contributing document to require screenshot of working code before merge (otherwise faulty
  code will break the application)
- Build additional functional components into the frontend (uploading artworks, artist profiles,
  differentiating between account privileges - Admin, User, Artist etc.)
- Finishing redesigns for website (with UCD in mind)
- Create VS Code Dev containers to streamline development (current containers need to be rebuilt
  with every change made to code)
- Integrating Postman tests into CI pipeline on GitHub Actions
- Build out full CI pipeline (with robust testing) to protect integrity of the code in repository
- Integrate CD pipeline in GitHub Actions
- Go through code and remove all secret information (connection strings, variables in docker-compose
  (db passwords + connection strings) and Dockerfiles, app-settings.json (backend), vue.config.js
  (frontend), any secrets in CI workflow)
- Deploy to GCP
- Continue improving Lighthouse scores
- Implement IIIF in API
- Optimise containers (they run really slow)
