---
title: Project feasability study document
---

**Daniel Maddern**.

**Capstone SIT374**.

**Ontrack**.

**Numbas feasibility check**.

**Preamble**.

The aim of this study is to check the feasibility of setting up or linking Numbas into Ontrack a
live production environment running on Rails/Angular.

**Research information**:

For this project I have been reviewing several links and pages of information to ensure we take the
correct direction. As well as to upskill to ensure I have the key skills required for this project.

[https://angular.io/guide/standalone-components](https://angular.io/guide/standalone-components)

[https://blog.logrocket.com/the-ultimate-guide-to-iframes/](https://blog.logrocket.com/the-ultimate-guide-to-iframes/)

[https://angular.io/guide/setup-local](https://angular.io/guide/setup-local)

[https://www.numbas.org.uk/](https://www.numbas.org.uk/)

[https://community.dataminer.services/information-security-research-unsafe-attribute-bindings-on-iframe-elements-in-angular/](https://community.dataminer.services/information-security-research-unsafe-attribute-bindings-on-iframe-elements-in-angular/)

**Outcome**.

So after some research the two main ways we can approach this task is to embed an iframe, then later
capture the test objecet and store it.

Or we can use the local NPM package and install Numbas as a package and configure and run the tests
natively.

The second option initially looks more secure and longer to setup, I was concerned about iFrame from
a security risk related to XSS, however it looks like in Angular 15 this was resolved.

**Plan**.

I will look at configuring both solutions and see which one performs best and gives us the best
features moving forward. Hopefully by week 6 a have a trial version of both and make the final
decision before tidying up the code to ensure it is production ready.
