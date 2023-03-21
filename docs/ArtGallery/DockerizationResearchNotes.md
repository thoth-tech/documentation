#Dockerization: Preliminary Research# ##Chloe Hulme##

_Preamble_

The goal of this research is to better understand how to fully dockerize a .NET minimal web api,
with a Vue based front end. The research will include an in-depth look into how we can begin to
complete this, as well as projected timelines and useful tutorials.

_General_

- create dockerfile in root of project (Dockerfile -> no ext)
- Whenever a change is made to code, container needs to be rebuilt

_Backend (.NET minimal web api) (weeks 4-7)_

- use multi-stage build (build stage and serve stage in Dockerfile)
- Splitting base images makes build and run more efficient
- Initial base image uses .NET sdk -> this builds binaries
- In Dockerfile
  - `FROM [mcr.microsoft.com/dotnet/sdk:6-0-focal](http://mcr.microsoft.com/dotnet/sdk:6-0-focal) as BUILD`
  - Set working directory (`WORKDIR /source`)
  - Copy everything from current working directory into that new /source (`COPY . .`)
  - Restore project dependencies (`RUN dotnet restore "\*.csproj" - -disable-parallel`)
  - Publish artefacts to output directory
    (`RUN dotnet publish "\*.csproj" -c release -o /app - -no-restore`)

- Second base image uses .NET runtime

- In Dockerfile
  - `FROM [mcr.microsoft.com/dotnet/aspnet:6-0-focal](http://mcr.microsoft.com/dotnet/sdk:6-0-focal)`
  - Create new working directory (`WORKDIR /app`)
  - Copy output from build into current working directory (`COPY - -from=build /app ./`)
  - Expose port (`EXPOSE 5000`)
  - Define entrypoint (`ENTRYPOINT ["dotnet", "ProjName.dll"`]

**To build container:**

```
docker build - -rm -t productive-dev/proj-name:latest .
```

^^ must be run inside root directory of project

```
docker image ls -> lists built images (use to check if built)
```

**To run container:**

```
docker run - -rm -p 5000:5000 -p 5001:5001 -e ASPNETCORE_HTTP_PORT=<https://+:5001> -e
ASPNETCORE_URLS=<https://+:5000> productive-dev/proj-name
```

**To stop container:**

`docker container stop <first 3 digits from container id>`

**Add a health check for container:**

Before `var app = builder.Build()` add `builder.Services.AddHealthChecks()`, then after var app
line, map to end point: `app.MapHealthChecks("/health")`

Then test end point in browser as per normal

**Docker-compose.yml file will be required to run database and backend at the same time**
<https://www.youtube.com/watch?v=9ZEbJT36-Uk>

_Frontend (Vue) (weeks 7-10)_

_Tbc after backend build is successful_

_Documentation (weeks 10+)_

Documentation detailing how users can install docker and run containers will be packaged inside the
Art Gallery repo. This documentation will specify build and run commands as well as how each
container can interact with each other. As well as what each command actually does.
