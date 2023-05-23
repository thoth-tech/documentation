# Running the Art Gallery site – Windows

## Cypress has been added to the project develpoment and requires no addtional dependancies.

[Cypress](https://www.cypress.io/)

- npm install cypress -D

## Running the tests

Follow the instructions in the Art Gallery setup guide or refer to new docker setup to run the
project.

NB You must have the project running in order to run the tests.

In the terminal run

- npx cypress open

This will open the intro winodw to cypress

Select E2E testing and choose the browser that you wish to use to run the tests.

Select the test you want to run from the list in the Spec directory.

## Adding or creating new tests

All tests are stored in the project in the \art-gallery\cypress\e2e\ folder

File naming convention

- pagename.spec.cy.js

File name is based on the html page name e.g. exhibition.spec.cy.js

#### List of current tests

| Test ID | Test                                                 | Page            | Local URL                          | Test file                  | Expected Result |
| ------- | ---------------------------------------------------- | --------------- | ---------------------------------- | -------------------------- | --------------- |
| 1       | diplays the correct subheading - Artist              | art and culture | http://localhost:8080/culture      | artandculture.spec.cy.js   | Success         |
| 2       | displays the correct image - Artist                  | art and culture | http://localhost:8080/culture      | artandculture.spec.cy.js   | Success         |
| 3       | displays the correct details -Artist                 | art and culture | http://localhost:8080/culture      | artandculture.spec.cy.js   | Success         |
| 4       | diplays the correct subheading - Artwork             | art and culture | http://localhost:8080/culture      | artandculture.spec.cy.js   | Success         |
| 5       | displays the correct image - Artwork                 | art and culture | http://localhost:8080/culture      | artandculture.spec.cy.js   | Success         |
| 6       | displays the correct details -Artwork                | art and culture | http://localhost:8080/culture      | artandculture.spec.cy.js   | Success         |
| 7       | diplays the correct subheading - Artist              | artistoftheday  | http://localhost:8080/artistofday  | artistoftheday.spec.cy.js  | Success         |
| 8       | displays the correct image - Artist                  | artistoftheday  | http://localhost:8080/artistofday  | artistoftheday.spec.cy.js  | Success         |
| 9       | displays the correct details -Artist                 | artistoftheday  | http://localhost:8080/artistofday  | artistoftheday.spec.cy.js  | Success         |
| 10      | diplays the correct subheading - Artwork             | artworkoftheday | http://localhost:8080/artworkofday | artworkoftheday.spec.cy.js | Success         |
| 11      | displays the correct image - Artwork                 | artworkoftheday | http://localhost:8080/artworkofday | artworkoftheday.spec.cy.js | Success         |
| 12      | displays the correct details -Artwork                | artworkoftheday | http://localhost:8080/artworkofday | artworkoftheday.spec.cy.js | Success         |
| 13      | loads artworks                                       | artworks        | http://localhost:8080/artworks     | artworks.spec.cy.js        | Success         |
| 14      | searches and returns artwork if exists               | artworks        | http://localhost:8080/artworks     | artworks.spec.cy.js        | Success         |
| 15      | searches and returns no artwork if no artwork exists | artworks        | http://localhost:8080/artworks     | artworks.spec.cy.js        | Success         |
| 16      | displays the correct heading                         | exhibitions     | http://localhost:8080/exhibitions  | exhibitions.spec.cy.js     | Success         |
| 17      | displays mock data correctly in table                | exhibitions     | http://localhost:8080/exhibitions  | exhibitions.spec.cy.js     | Success         |
| 18      | displays login modal                                 | login           | http://localhost:8080/             | login.spec.cy.js           | Success         |
| 19      | allows user to log in                                | login           | http://localhost:8080/             | login.spec.cy.js           | Success         |
| 20      | displays correct heading                             | homepage        | http://localhost:8080/             | mainpage.spec.cy.js        | Success         |
| 21      | displays banner image                                | homepage        | http://localhost:8080/             | mainpage.spec.cy.js        | Success         |
| 22      | should display signup page                           | register        | http://localhost:8080/signup       | registeruser.spec.cy.js    | Success         |
| 23      | should allow user to sign up.                        | register        | http://localhost:8080/signup       | registeruser.spec.cy.js    | Success         |

#### Additional Notes

To run the user login test, you will need to run the signup test first.  
If you need to run the signup test again you will need to delete the user it creates from thebackend
database.
