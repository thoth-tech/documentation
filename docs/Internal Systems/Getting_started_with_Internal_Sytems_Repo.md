# Getting started with Internal Sytems Repo

This document contains all the information to understand Internal Sytems repostiory and what you
need to know to start coding.

# Environment Setup

To get started with the project you need to setup your developer environment. Developer environment
simply means installing initial packages and software to be able to work with the software. What
you’ll need here is:

- Node (v14.15 or newer)
- Gatsby Cli (v3 or newer)
- Package manager for node (Yarn in our case)
- Code Editor

## Node

**Install node by following this instruction:**

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Node comes with npm package manager however in our project we are using yarn, so you’d need to
install yarn next by following this instruction page

https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

## Gatsby Cli

Follow this instructional page to install gatsby cli

https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli

## Code Editor

This is upto your choice but Vscode or Sublime Text are good options.

# Repo Structure

The repo currently is just a starter gatsby project. Gatsby starter guide documents has some vidoes
that should get you started with gatsby but the stucture is as follows:

**Public** This folder contains the static html files that are used in case website is not loaded
e.g 404 file

**Src** This is where all the code goes. The images folder contains all the png file that you need
to for the whole website. The pages folder contains all the different pages that are used in gatsby
site. The important file here is index.js. All the components or different pages you build should be
called inside index file. Basically, gatsby renders all the data from this file and then look for
all the linked components and pages from this single file.

**.gitignore** This just contains all the folders and file that github should ignore when pushing
code from your local computer. Normally we add node modules because all the node modules should only
be insatalled locally.

**gatsby-config.js** This just contains configuration for gatsby.

**package.json**

This contains all the external packages that came with gatbsy or the user installed.

**package-lock.json** The goal of **_package_**-lock.**_json_** file is to keep track of the exact
version of every **_package_** that is installed so that a product is 100% reproducible in the same.
