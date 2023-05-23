#### Requirements for running the front end unit tests

#### vitest has been added to the project with dependencies listed below

We have chosen Vitest to run the testing for the Art-Gallery site due to it's integration and
current testing requirements.

Since the official setup created by create-vue is based on Vite, we recommend using a unit testing
framework that can leverage the same configuration and transform pipeline directly from Vite. Vitest
is a unit testing framework designed specifically for this purpose, created and maintained by Vue /
Vite team members. It integrates with Vite-based projects with minimal effort, and is blazing fast.

This has been setup in the package.json file under the devdependencies section

- Installing Vue test utilities npm install --save-dev @vue/test-utils@next

From <https://www.vuemastery.com/blog/getting-started-with-vitest/>

- Installing Jsdom npm I -D jsdom development install.

-Installing Vue CLI npm install -g @vue/clinpm

-Vue Testing Library npm install --save-dev @testing-library/dom

#### Running the tests in VScode

Follow the instructions in the Art Gallery setup guide or refer to new docker setup to run the
project.

The tests are all contained in the

- art-gallery\src\tests\unit\ Path

Run the tests from the terminal in VScode

- npm run test:unit

To run the tests in the browser with a graphic interface

- npm run testui

#### List of Current Unit Tests

| Test ID | Test                                                              | Component               | Test file                   | Expected Result |
| ------- | ----------------------------------------------------------------- | ----------------------- | --------------------------- | --------------- |
| 1       | renders heading correctly                                         | CardComponent.vue       | CardComponent.spec.js       | Success         |
| 2       | renders the image url                                             | CardComponent.vue       | CardComponent.spec.js       | Success         |
| 3       | renders the subheading                                            | CardComponent.vue       | CardComponent.spec.js       | Success         |
| 4       | renders details correctly                                         | CardComponent.vue       | CardComponent.spec.js       | Success         |
| 5       | renders correclty                                                 | ColapsibleMenuAntD.vue  | ColapsibleMenuAntD.spec.js  | Success         |
| 6       | renders menu with sub menus                                       | ColapsibleMenuAntD.vue  | ColapsibleMenuAntD.spec.js  | Success         |
| 7       | renders login and signup menu items                               | ColapsibleMenuAntD.vue  | ColapsibleMenuAntD.spec.js  | Success         |
| 8       | renders correct sub menu titles                                   | ColapsibleMenuAntD.vue  | ColapsibleMenuAntD.spec.js  | Success         |
| 9       | renders correct number of items                                   | ColapsibleMenuAntD.vue  | ColapsibleMenuAntD.spec.js  | Success         |
| 10      | renders correclty                                                 | DropdownMenuAntD.vue    | DropdownMenuAntD.sepc.js    | Success         |
| 11      | renders Artworks sub menu                                         | DropdownMenuAntD.vue    | DropdownMenuAntD.sepc.js    | Success         |
| 12      | renders Art & Culture sub menu                                    | DropdownMenuAntD.vue    | DropdownMenuAntD.sepc.js    | Success         |
| 13      | renders exhibitions sub menu                                      | DropdownMenuAntD.vue    | DropdownMenuAntD.sepc.js    | Success         |
| 14      | renders the swagger sub menu If user role is admin                | DropdownMenuAntD.vue    | DropdownMenuAntD.sepc.js    | Success         |
| 15      | does not render the swagger menu if user role is not admin        | DropdownMenuAntD.vue    | DropdownMenuAntD.sepc.js    | Success         |
| 16      | renders corretly                                                  | FeaturedArtist.vue      | FeaturedArtist.spec.js      | Success         |
| 17      | renders the card componenet                                       | FeaturedArtist.vue      | FeaturedArtist.spec.js      | Success         |
| 18      | passes the correct props to Card Component                        | FeaturedArtist.vue      | FeaturedArtist.spec.js      | Success         |
| 19      | renders the card componenet                                       | FeatuedArtwork.vue      | FeaturedArtwork.spec.js     | Success         |
| 20      | pass the correct props to the Card Componenent                    | FeatuedArtwork.vue      | FeaturedArtwork.spec.js     | Success         |
| 21      | renders correctly                                                 | FooterComponenet.vue    | FooterComponenet.spec.js    | Success         |
| 22      | renders Socials Component                                         | FooterComponenet.vue    | FooterComponenet.spec.js    | Success         |
| 23      | renders footer navigation links                                   | FooterComponenet.vue    | FooterComponenet.spec.js    | Success         |
| 24      | renders correctly                                                 | HeaderComponenet.vue    | HeaderComponenet.spec.js    | Success         |
| 25      | renders the logo                                                  | HeaderComponenet.vue    | HeaderComponenet.spec.js    | Success         |
| 26      | renders the Socials Componenet                                    | HeaderComponenet.vue    | HeaderComponenet.spec.js    | Success         |
| 27      | render the logo with correct aria-label                           | HeaderComponenet.vue    | HeaderComponenet.spec.js    | Success         |
| 28      | renders correclty                                                 | LoginComponenet.vue     | LoginComponent.spec.js      | Success         |
| 29      | shows an error if the email field is empty                        | LoginComponenet.vue     | LoginComponent.spec.js      | Success         |
| 30      | shows an error if the password field is empty                     | LoginComponenet.vue     | LoginComponent.spec.js      | Success         |
| 31      | calls the handelLogin method on form submission                   | LoginComponenet.vue     | LoginComponent.spec.js      | Success         |
| 32      | displays the correct details                                      | NavigationComponent.vue | NavigationComponent.spec.js | Success         |
| 33      | displays the correct detail description                           | NavigationComponent.vue | NavigationComponent.spec.js | Success         |
| 34      | renders correctly                                                 | SignupComponent.vue     | SignupComponent.spec.js     | Success         |
| 35      | calls the handelSubmit method on form submission                  | SignupComponent.vue     | SignupComponent.spec.js     | Success         |
| 36      | calls register action when handleSubmit method is called          | SignupComponent.vue     | SignupComponent.spec.js     | Success         |
| 37      | navigates back to the home page when the cancel button is clicked | SignupComponent.vue     | SignupComponent.spec.js     | Success         |
| 39      | check update data event on addExhibition call                     | TableArtDesign.vue      | TableArtDesign.spec.js      | Success         |

#### Creating additonal test files

Test naming convention "componentname.spec.js"
