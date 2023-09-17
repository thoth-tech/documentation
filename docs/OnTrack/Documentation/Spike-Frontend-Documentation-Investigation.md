# Spike Outcomes

**Spike:** 1

**Title:** Frontend Documentation Investigation

**Author:** Devanshi Patel, <pateldev@deakin.edu.au>

## Goal / Deliverables

- The goal is to create a document which outlines desire tools and format of document that can be

  used to document angular component and service, which can be used for improving developer

  efficiency.

- Add any documentation tasks in the Frontend Documentation Backlog.

## Technologies, Tools, and Resources used

- Internet Browser; Google Chrome, Firefox, Safari

- Programming Language: TypeScript, Ruby

- Code Editor: VsCode

- Supporting Application: Docker

- Technologies: JSDoc Comments, Compodoc

## Tasks undertaken

- Have basic knowledge of Angular and what its main elements are and how they interact with other

  applications within the system.

- Learn how to use JSDoc comment in angular application. Know that JSDoc comment is a standard way

  to document code in TypeScript.

- Install Compodoc into VsCode application. Installation guide can be found on google.

## What we found out

- We found many ways that angular can be documented to improve developer experience and efficiency.

  However, we ended up picking only two applications that can help us document the whole system.

- JSDoc Comments can be used into TypeScript code to provide better understanding to developers on

  how to use components that are already in place or even how to extend them. If we want to create

  JSDoc comment we can use ‘/\*\*’ and press entry, which indicated the opening delimiter for the

  comment. ‘\*’ indicates that the comment is part of the documentation. The actual documentation

  happens by using some of the common JSDoc tags like '@returns', '@private' and many more.

  Lastly, we will close and mark the end of comment by using ‘\*’ symbol.

1. Download compodoc in your system by running this command: npm install -g @compodoc/compodoc into

   VsCode terminal.

1. Configure compodoc by making tsconfig.docs.json file into the root directory.

1. In order to generate a document, we are going to use ‘compodoc -p tsconfig.docs.json -s’ command.

1. After the installation is done, it would generate a URL where we can access the documentation.

1. After we are doing with installing the application, we can view the documentation by visiting

   <http://localhost:8080> or what the URL was generated in the terminal.

- If we were to implement compodoc into our project, it would help us to generate documentation for

  modules, component, routes, any directives, pips, interface and many more.

- So, the main idea behind is that we would first write JSDoc comment in our TypeScript code and

  later create a document using compodoc which can be shared very easily among teams and developers.
