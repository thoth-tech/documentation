# Getting started with Internal Sytems Repository

This document contains all the information to understand Internal Sytems repository and what you
need to know to start coding.

## Environment Setup

To get started with the project you need to setup your developer environment. Developer environment
simply means installing initial packages and software to be able to work with the software. What you
need here are:

- Node (v14.15 or newer)
- Gatsby Command Line Interface (CLI) (v3 or newer)
- Package manager for node (Yarn in our case)
- Code Editor

## Node

**Install node by following this instruction:**

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Node comes with npm package manager however in our project we are using yarn, so you’d need to
install yarn next by following this instruction page

https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

## Gatsby CLI

Follow the [instructional page](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli) to
install Gatsby CLI.

## Code Editor

We recommend VSCode or Sublime Text.

## Repository Structure

The repository currently is just a starter Gatsby project. Gatsby starter guide documents has some
videos that should get you started with Gatsby but the structure is as follows:

- **public** This folder contains the static HTML files that are used in case website is not loaded
  e.g 404 file
- **src** This is where all the code goes. The images folder contains all the `png` file that you
  need to for the whole website. The pages folder contains all the different pages that are used in
  gatsby site. The important file here is index.js. All the components or different pages you build
  should be called inside index file. Basically, Gatsby renders all the data from this file and then
  look for all the linked components and pages from this single file.
- **.gitignore** This just contains all the folders and file that GitHub should ignore when pushing
  code from your local computer. Normally we add node modules because all the node modules should
  only be installed locally.
- **gatsby-config.js** This just contains configuration for Gatsby.
- **package.json** This contains all the external packages that came with Gatsby or the user
  installed.
- **package-lock.json** The goal of **_package_**-lock.**_json_** file is to keep track of the exact
  version of every **_package_** that is installed so that a product is 100% reproducible in the
  same.
