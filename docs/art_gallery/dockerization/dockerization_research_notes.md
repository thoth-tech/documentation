# Dockerization: Preliminary Research

## Chloe Hulme

### Preamble

The goal of this research is to better understand how to fully dockerize a .NET minimal web api,
with a Vue based front end. The research will include an in-depth look into how we can begin to
complete this, as well as projected timelines and useful tutorials.

### General

- create dockerfile in root of project (Dockerfile -> no ext)
- Whenever a change is made to code, container needs to be rebuilt

### Backend (.NET minimal web api) (weeks 4-7)

- use multi-stage build (build stage and serve stage in Dockerfile)
- Splitting base images makes build and run more efficient
- Initial base image uses .NET sdk -> this builds binaries
- In Dockerfile:

  - `FROM [mcr.microsoft.com/dotnet/sdk:6-0-focal](http://mcr.microsoft.com/dotnet/sdk:6-0-focal) as BUILD`
  - Set working directory (`WORKDIR /source`)
  - Copy everything from current working directory into that new /source (`COPY . .`)
  - Restore project dependencies (`RUN dotnet restore "\*.csproj" --disable-parallel`)
  - Publish artefacts to output directory
    (`RUN dotnet publish "\*.csproj" -c release -o /app --no-restore`)

- Second base image uses .NET runtime

- In Dockerfile:
  - `FROM [mcr.microsoft.com/dotnet/aspnet:6-0-focal](http://mcr.microsoft.com/dotnet/sdk:6-0-focal)`
  - Create new working directory (`WORKDIR /app`)
  - Copy output from build into current working directory (`COPY --from=build /app ./`)
  - Expose port (`EXPOSE 5000`)
  - Define entrypoint (`ENTRYPOINT ["dotnet", "ProjName.dll"]`)

**To build container:**

`docker build - -rm -t productive-dev/proj-name:latest .` ^^ must be run inside root directory of
project

`docker image ls -> lists built images (use to check if built)`

**To run container:**

```plaintext
docker run - -rm -p 5000:5000 -p 5001:5001 -e ASPNETCORE_HTTP_PORT=<https://+:5001> -e
ASPNETCORE_URLS=<https://+:5000> productive-dev/proj-name
```

**To stop container:**

`docker container stop <first 3 digits from container id>`

**Docker-compose.yml file will be required to run database and backend at the same time**
<https://www.youtube.com/watch?v=9ZEbJT36-Uk>

- `docker-compose up` and `docker-compose up --build` to run containers from .yml file
- Link containers using bridge network
- Specify each service: postgreSQL image and image build from Dockerfile
- Automatically dump .sql file into db on first build by mounting .sql scrip to
  `docker-entrypoint-initdb.d`
- change db connection string in api to match docker-compose, Server=host.docker.local

### Frontend (Vue) (weeks 7-10)

- In Dockerfile:
  - Choose base image for your Vue application. In this case, we'll use node:14.18.0-alpine3.14,
    which is a lightweight version of Node.js (`FROM node:14.18.0-alpine3.14`)
  - Set the working directory to /app (`WORKDIR /app`)
  - Install dependencies: Install the @vue/cli globally using the RUN command
    (`RUN npm install -g @vue/cli`)
  - Copy the package.json and package-lock.json files: Copy the package.json and package-lock.json
    files to the working directory using the COPY command (`COPY package*.json ./`)
  - Run npm install to install the dependencies for our application. We need to use
    --legacy-peer-deps flag to work around any potential issues with peer dependencies
    (`RUN npm install --legacy-peer-deps`)
  - Copy the rest of the source code to the working directory (`COPY . ./`)
  - Run npm run build to build the application (`RUN npm run build`)
  - Expose port 80 (HTTP) (`EXPOSE 80`)
  - Use CMD command to start the application by running npm run serve
    (`CMD ["npm", "run", "serve"]`)

**Integrating with backend:**

- Create dockr-compose.yml in root directory and add frontend service
- Ensure `context` to locate Dockerfile in nested directories for backend/frontend
- `docker-compose up --build` to build and tun containers
- Repos will need to be re-structured as follows:

```plaintext
  ├── art-gallery-backend
  │   ├── .vs
  │   ├── art-gallery-backend
  │   │   ├── Authentication
  │   │   ├── bin
  │   │   ├── db_dump
  │   │   ├── Middleware
  │   │   ├── Models
  │   │   ├── obj
  │   │   ├── Persistence
  │   │   ├── Properties
  │   │   ├── wwwroot
  │   │   ├── .gitignore
  │   │   ├── appsettings.Development.json
  │   │   ├── appsettings.json
  │   │   ├── art-gallery-backend.csproj
  │   │   ├── art-gallery-backend.csproj.user
  │   │   ├── Program.cs
  │   │   ├── Dockerfile
  ├── art-gallery-frontend
  │   ├── docs
  │   ├── node_modules
  │   ├── public
  │   ├── src
  │   ├── .gitignore
  │   ├── babel.config.js
  │   ├── jsconfig.json
  │   ├── package-lock.json
  │   ├── package.json
  │   ├── README.md
  │   ├── vue.config.js
  │   ├── Dockerfile
  └── docker-compose.yml
```

- There will also be additional docker-copmose.yml files to run each side of the application in
  isolation, ie. running just the backend containers or just the frontend container. This will help
  development teams quickly test their individual contributions. The updated directory tree is as
  follows:

```plaintext
  ├── art-gallery-backend
  │   ├── .vs
  │   ├── art-gallery-backend
  │   │   ├── Authentication
  │   │   ├── bin
  │   │   ├── db_dump
  │   │   ├── Middleware
  │   │   ├── Models
  │   │   ├── obj
  │   │   ├── Persistence
  │   │   ├── Properties
  │   │   ├── wwwroot
  │   │   ├── .gitignore
  │   │   ├── appsettings.Development.json
  │   │   ├── appsettings.json
  │   │   ├── art-gallery-backend.csproj
  │   │   ├── art-gallery-backend.csproj.user
  │   │   ├── Program.cs
  │   │   ├── Dockerfile
  │   │   ├── docker-compose.yml
  ├── art-gallery-frontend
  │   ├── docs
  │   ├── node_modules
  │   ├── public
  │   ├── src
  │   ├── .gitignore
  │   ├── babel.config.js
  │   ├── jsconfig.json
  │   ├── package-lock.json
  │   ├── package.json
  │   ├── README.md
  │   ├── vue.config.js
  │   ├── Dockerfile
  │   ├── docker-compose.yml
  └── docker-compose.yml
```

- The final production environment will contain production copies of each docker file, as shown
  here:

```plaintext
  ├── art-gallery-backend
  │   ├── .vs
  │   ├── art-gallery-backend
  │   │   ├── Authentication
  │   │   ├── bin
  │   │   ├── db_dump
  │   │   ├── Middleware
  │   │   ├── Models
  │   │   ├── obj
  │   │   ├── Persistence
  │   │   ├── Properties
  │   │   ├── wwwroot
  │   │   ├── .gitignore
  │   │   ├── appsettings.Development.json
  │   │   ├── appsettings.json
  │   │   ├── art-gallery-backend.csproj
  │   │   ├── art-gallery-backend.csproj.user
  │   │   ├── Program.cs
  │   │   ├── dev.Dockerfile
  │   │   ├── prod.Dockerfile
  │   │   ├── docker-compose-dev.yml
  ├── art-gallery-frontend
  │   ├── docs
  │   ├── node_modules
  │   ├── public
  │   ├── src
  │   ├── .gitignore
  │   ├── babel.config.js
  │   ├── jsconfig.json
  │   ├── package-lock.json
  │   ├── package.json
  │   ├── README.md
  │   ├── vue.config.js
  │   ├── dev.Dockerfile
  │   ├── prod.Dockerfile
  │   ├── docker-compose-dev.yml
  ├── docker-compose-dev.yml
  └── docker-compose-prod.yml
```

### Useful resources

- <https://www.youtube.com/watch?v=9ZEbJT36-Uk>
- <https://1kevinson.com/how-to-create-a-postgres-database-in-docker/>
- <https://www.baeldung.com/ops/postgresql-docker-setup>
- <https://medium.com/front-end-weekly/net-core-web-api-with-docker-compose-postgresql-and-ef-core-21f47351224f>
- <https://wkrzywiec.medium.com/how-to-run-database-backend-and-frontend-in-a-single-click-with-docker-compose-4bcda66f6de>
- <https://github.com/DanWahlin/AspNetCorePostgreSQLDockerApp/blob/master/AspNetCorePostgreSQLDockerApp/aspnetcore.prod.dockerfile>
- <https://mherman.org/blog/dockerizing-a-vue-app/>
- <https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html>
- <https://docs.docker.com/samples/vuejs/>
- <https://www.youtube.com/watch?v=qEHYCizwAKA>
- <https://www.youtube.com/watch?v=N-DM9ibBXVg>

### Documentation (weeks 10+)

Documentation detailing how users can install docker and run containers will be packaged inside the
Art Gallery repo. This documentation will specify build and run commands as well as how each
container can interact with each other. As well as what each command actually does.
