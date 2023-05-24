#### Technical notes for the backend testing

#### Information and Dependencies

Programming Language and Framework: programming language and framework used in the backend project
or by me as well is C# language and Microsoft .Net framework. APIs and External Services: external
services or APIs integrated into the project. These include image hosting services, or any other
third-party services used by the backend. Authentication and Authorisation: Authentication and
authorisation mechanisms implemented in the project. This involve technologies like OAuth, JSON Web
Tokens (JWT), or session-based authentication. Dependencies: external libraries, frameworks, or
packages used in the project such as : Frameworks :Microsoft. AspNetCore. App 6.0.15 & Microsoft.
NETCore. App 6.0.15 Packages : NuGet Packages such as –

- BCrypt. Net-Next
- DateOnlyTimeOnly. AspNet
- DateOnlyTimeOnly. AspNet. Swashbuckle
- FastMember
- Microsoft. AspNetCore. Authentication. JwtBearer
- Microsoft. AspNetCore. Mvc. Testing
- System. IdentityModel. Tokens. Jwt
- Xunit
- xunit.abstractions
- xunit.analyzers
- xunit.assert
- xunit.assert.source
- xunit.core
- xunit.extensibility.execution
- xunit.runner.msbuild
- xunit.runner.visualstudio And many other packages used in this project for backend testing. All
  these packages and frameworks can be download in Microsoft visual studio from solution explorer
  --> dependencies and right click on it you will see option called as manage NuGet packages. Search
  these packages and all other required for backend testing and install them.

#### How to run the tests

To document the codebase and provide instructions for building, testing, and deploying the project,
follow these steps: README: Read project's README file which provides comprehensive instructions on
how to set up the development environment, install dependencies, and run the application locally.
Code Documentation: If the project contains inline code comments or a separate documentation folder,
encourage the new team members to review and update the documentation as needed. Build Instructions:

- First download GitHub desktop and install it.
- Download Microsoft visual studio and install it.
- Open GitHub desktop and clone this repository into local system :
  <https://github.com/thoth-tech/art-gallery-backend.git>
- Open Microsoft visual studio and then load the repository and open solution explorer.
- Add dependencies from solution explorer and you will see manage NuGet packages then download all
  the required packages from there for backend xunit-testing.
- When done with successfully tested code open GitHub desktop and commit the code file from there to
  online GitHub repositories.
- Before committing to online repositories first create fork with the main online repository.
- And you will see create a new pull request from there create new pull request of the committed
  file and done !! Testing Instructions: I used Xunit testing suite and Microsoft studio’s framework
  and libraries.

#### Additional Notes

Around 20% of the tests currently fail.
