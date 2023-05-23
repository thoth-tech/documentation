# Indigenous Art Gallery

## Documentation/Knowledge Bases: Research

### Preamble

The aim of this research is to better understand how BookStack can be used to produce a knowledge
base that would be most effective for the needs of this project, and to provide any future members
working on this project with direction to helpful and important information.

### Resources

- [BookStack Installation Page:](https://www.bookstackapp.com/docs/admin/installation/) Details for
  installing bookstack, which can be partially followed for installing a local instance for Windows.
- [Manual BookStack Installation on Windows 10:](https://www.youtube.com/watch?v=_v-4BhVz7OI)
  Installing BookStack for local testing purposes, works with Windows 11.
- [Installing BookStack on Ubuntu Server:](https://www.youtube.com/watch?v=wq78komr9rs) Basic
  overview of setting up a knowledge base online using an Ubuntu droplet with DigitalOcean.
- [Awesome Open Source Overview:](https://www.youtube.com/watch?v=2izkat9tzoY) Independently made
  guide that goes over some features and demonstrates the launching of a BookStack site using Ubuntu
  via DigitalOcean and Hover to manage the domain.
- [Noted Overview:](https://noted.lol/bookstack/) A review of features and a brief overview of
  installing BookStack with Docker Compose.
- [DigitalOcean Higher Education:](https://www.digitalocean.com/landing/do-for-higher-education)
  Opportunities available to educational institutions for using DigitalOcean.
- [Techdox Bookstack Docker Install:](https://www.youtube.com/watch?v=VQj5kg7orAM) A brief tutorial
  on self-hosting BookStack using Docker.
- [Vultr BookStack Hosting](https://serveravatar.com/deployments/host-bookstack-on-vultr-server)

### Practical Notes

- For the purposes of this project, BookStack has to be installed onto a live server with URL access
  and HTTPS.
- To export a local database, on localhost (when running Apache) go to phpMyAdmin, go to the
  bookstack database, select export at the top, and you’ll be able to export it in SQL format, which
  can be transferred into other MySQL and MariaDB databases.
  - This means that the knowledge base can be created locally and then transferred onto a live
    server for use.
- Hosting options (for Ubuntu) are needed to get the knowledge base online.
  - DigitalOcean, which offers a certain amount of free initial credits which would likely suffice
    for this project's use and appears to be commonly used for BookStack hosting.
    - There's also Hollie's Hub for Good, an part of DigitalOcean which gives out credits to
      non-profit, social enterprise organisations with applications resuming May 2023 (the current
      month as of writing).
  - Hosting through Deakin's Public Hosting Web Cluster could be a possible option depending on if
    it's open for this project and what the service can host.
  - Cloudron allows for hosting apps on your self-hosted server, including BookStack, so it's a
    setup that could work well with something like DigitalOcean. It also has a free tier that allows
    for two apps, so BookStack can be installed free onto a server.
  - Vultr is another possible option that can allow for low-cost pricing.
- Local installation on Windows requires Git, Composer, and XAMPP, which comes with PHP and MySQL.

### Features

- The editor used for contributing to the site can be WYSIWYG or MarkDown, suiting preference.
- In settings, "Public Access" can be enabled to allow users (through the "Guest" account) to access
  and view the content on the site. They aren't be able to make changes, but it's a good way for
  project members who only need to access the site for its information.
- Sites can allow for registration, which allows for users to sign up using their emails and will
  then be given a default role that can be altered in the settings.
- BookStack content can be exported as PDF, plain text or Markdown files for external use.
- Every page has its own privacy settings, limiting who can view it.
- The homepage of the site is generally a display of the most recent activity on the site, however
  the default homepage can be changed to display a list of shelves, books, or of a specific page.
- While the editor is less flamboyant when compared to Confluence, it is still completely
  serviceable and allows for plenty of customization, along with media in documents that can make
  the documents more animated.
- Every page includes a changelog full of revisions. You can customise your session changelog while
  you edit a page, and every revision can be previewed and its changes reviewed. A page can be
  reverted to a previous revision at any time.
  - The number of revisions kept (that is, when older revision are removed) is customizable
    depending on the system configuration.

### Concepts

- Users on the site have their own page that displays their recently activity on the site. Each user
  can have a display name, a profile picture, and a preferred language.
- Roles are allocated to users and effect the privileges of the user they are assigned to. There is
  a selection of default roles that can be utilised, and custom roles can be created for more
  specific purposes. Roles can restrict what users can view, what they can contribute, and how they
  can otherwise interact with the knowledge base.
- The overall hierarchy on BookStack is Shelves -> Books -> Chapters -> Pages.
  - Shelves are categories that contain Books.
  - Books are collections of Pages.
  - Chapters organise Pages within Books
  - Pages are the documents of the knowledge base that are written on.

## Legacy Research

### Confluence Resources

- [The Atlassian Guides:](https://www.atlassian.com/software/confluence/guides/) Useful for getting
  started with confluence and learning the basics. Begin with Part 1: Get started with Confluence to
  go through the guides in order to get more in-depth as you progress.
- [Software Testing Help Beginner’s Guide:](https://www.softwaretestinghelp.com/atlassian-confluence-tutorial/)
  A good starting point for confluence as it clearly defines key concepts. Makes notes of the
  advantages of working with the software, showing how it is best used. Works through creation on
  the platform, with clear instructions.
- [Confluence Documentation Tutorial 2023:](https://www.youtube.com/watch?v=emn3hoamV-M) Tutorial
  that goes through basic processes on the site, showing how to navigate and contribute to a space.
- [Simon Confluence Tutorial for Beginners:](https://www.youtube.com/watch?v=5p3QzaS33GA) Active and
  in-depth introduction to confluence concepts, as well as touring the platform to help with
  navigation.

These guides and resources cover similar content, but do so with different methods that will be more
to the benefit of various learning preferences.

### Confluence Considerations

- In the case of purchasing a plan, the choice between cloud, data centre and server hosting.
  - Given that cloud hosting is the simplest with the most details taken care of by the platform
    itself, it seems to be the best solution.
  - While a server would offer more robust admin controls, because the responsibilities and
    authority between delivery leads and project members is fairly even within the project, it
    doesn’t seem necessary to have very many restrictions in place.
- For use of confluence without purchasing a plan: the current free plan only allows for 10 members
  per site.

### Confluence Concepts

- Pages are live documents that make up the knowledge base, collaborative pieces that can be used
  for notes, guides or policies.
- Spaces are how pages are organized, with pages of similar content being in the same space.
  Depending on the amount of content you have to organise or how large each page is, you may only
  need a single space with each page acting as the central document for a particular topic or area
  of the project.
- A page tree organizes pages hierarchically under related spaces and other pages to allow for
  simple navigation. These sub-pages are as robust as the parent pages they are nested under and are
  utilized for the sake of order.
- Every space has a space overview, which is essentially the root page of the space which is always
  seen first when entering the space. This is a useful feature to give a brief overview of the
  space, navigation, and the content within.

### Confluence Features

- Pages and content within pages can be labelled in order to organise or contextualize a page, such
  as a page being currently worked on being labelled as “In Progress” or certain content being
  labelled as “Disputed” if there are disagreements surrounding it that need to be resolved.
- Content can be restricted (read-only) depending on the space settings, and certain members may
  have different permissions depending on their roles. These global settings can divide between
  contributing members and reading members. Individual pages can have restrictions placed upon them.
- Confluence makes use of a variety of templates for pages, streamlining the process of creating new
  pages for different purposes. Templates can be used as a basis for the project’s own personal
  templates within Confluence.
- In editing pages, changes made are automatically synced and available to other members in editing,
  however the changes are not made publicly available for viewing until the page is “published’, at
  which point the page is changed and the previous version is stored in the version history. Changes
  can be reverted to the last version during editing.
- There is integration for markdown code and MS Teams within Confluence, relevant to this project as
  important markdown snippets from GitHub can be more easily transferred to Confluence if needed,
  and MS Teams integration can allow for less divide between communication and learning channels for
  members of the project, given that Teams is a core communication channel.

## research notes dump

### Knowledge Base research

Knowledge Base

- online library of information about a product, service, department, or topic.
- The knowledge base may include FAQs, manuals, troubleshooting guides, runbooks, and other information your team may want or need to know.
- It simplifies everything from troubleshooting to training/onboarding and general how-to and support questions
- strong knowledge base will find your organization is more nimble and able to deliver faster service.

- A knowledge base is used by companies/businesses/teams to help with structuring information that can be used to help the team draw upon.
- It is an online library that holds information about a particular product/service/department/topic.
- A knowledge base holds a range of information – including:
  - FAQs
  - Manuals
  - Troubleshooting guides
  - Runbooks

Along with any other information the team may want/need to know.

- Implemented Knowledge bases simplify any new training/onboarding with the convenience of having all relevant information in one area.
- Having a strong and detailed knowledge base will allow the team to develop and deliver outcomes faster.

How to build a knowledge base

1. Determine that you need one
   - The Thoth Tech company has determined that with the implementation of a knowledge base, development and production for new members will become more efficient.
1. Determine what topics/information should be covered
   - Outline an initial list of topics that the knowledge base should cover. (ie. project outline, how to use Confluence, how to commit messages and commit pull requests on GitHub, etc.)
1. Customise pages. Stay consistent
   - Create a style guide, so that all of the information you pour into your knowledge base looks and sounds the same. This covers the entire visual presentation including font, type size, colors, and even images.  
1. Get your content together.
   - Collect FAQs (and answers) from any department that provides service. And we mean any department, like the guys who build trade shows, the people in IT, HR. Teams across the organization all can and should contribute to your knowledge base. And they should be part of the knowledge management process that maintains it.
1. Customize pages. Stay consistent.
   - Create a style guide, so that all of the information you pour into your knowledge base looks and sounds the same. This covers the entire visual presentation including font, type size, colors, and even images.  
1. Find your voice and stick with it.
   - Figure out how your company or organization talks.
1. Get the right tools to manage it.
   - Make sure you have the right tools for hosting and managing your knowledge base.
1. Make it easy. And keep it that way
   - Once it’s up and running, remember that your knowledge base is a self-serve operation. You’ll need to make sure your knowledge base is easy to navigate. And easy to use. Allow contributors to use speed-templates to upload data.
1. Keep it relevant. And up to date.
   - This is where the creation of your knowledge base flows into the ongoing task of knowledge management. Implement a system of analytics, so you understand how people are using your content. Allow users to leave feedback and ratings.

### CONFLUENCE RESEARCH

Confluence

- Confluence a digital brain for your organisation
- Stores standards and processes
- Write your apps changelog in confluence

Confluence terms

- Pages
  - Pages are where content lives
- Macros
  - Dynamic content on pages
- Spaces
  - Where the pages live
  - A way of organizing all the things we want to store

Space types

- Team space
  - Need to be created be an admin
  - Intended to be used be our whole organisation
- Personal space
  - Can be created by anyone
  - Are intended to be used individually

Both can contain the same type of content

creating a personal space

- Click user on top right
- Click add personal space
- Name space

Navigate personal space

- In the left column, overview, blog and space settings are located

Creating a page in personal space

- Navigate into space
- Click create in top row
- Enter a page title
- On the right column, choose what template to use, or Enter any content bellow title
- Enter content then click publish when finished

Delete a personal space

- Go to space settings
- Under manage space, press delete space

Creating and pages in a team space

- Creating a team space requires confluence admin permissions
- In spaces in the top row, press create a space
- Choose blank space, or choose template
- Give space name a name
- Space key requires a unique key as it is required in the URL
- Press create

- In the team space, press create
- Choose from template or start adding content

Page drafts and unpublished versions

- When creating a page, press close instead of publish
- Press recent, then into drafts
- OR go to homepage, and find the draft tab

Once the page is published for the first time, any new content added into page but not published can be seen by editing original page

On the top right 3 dots, click view changes to see what has been changed

Editing an existing page

- Once the page has been created with the template,  

### BOOKSTACK RESEARCH

- BookStack is an open-source documentation platform.
- It provides a user-friendly interface for creating and organizing documentation.
- It offers features for content structuring, version control, and collaboration.
- BookStack enables users to create pages, chapters, and books to organize their documentation.
- It supports rich text formatting, including headings, lists, tables, and images.
- BookStack includes a powerful search functionality for quick access to information.
- Users can collaborate and contribute to documentation through permissions and roles.
- It supports revision history and allows for the rollback of changes if needed.
- BookStack offers customization options through themes and plugins.
- It has an active community and ecosystem for support, updates, and third-party integrations.
- BookStack is designed to be self-hosted, giving users control over their documentation environment.
- It provides security measures to protect user data and ensure data integrity.
- BookStack is licensed under the MIT License, allowing for free use and modification.
- It offers both a cloud-hosted solution and a self-hosted option for deployment.
- BookStack has a growing user base and is continually improving through community contributions and updates.

Bookstack tools:

- Page Editor: BookStack provides a visual page editor where users can create and edit content using a rich text editor with formatting options.

- Content Organization: Users can structure their documentation using chapters, books, and pages, allowing for hierarchical organization and easy navigation.
- Version Control: BookStack supports version control, allowing users to track changes made to their documentation over time and revert to previous versions if needed.

- Collaboration Tools: BookStack offers collaboration features, such as user roles and permissions, enabling multiple users to contribute and collaborate on documentation.
- Search Functionality: BookStack includes a powerful search functionality that allows users to quickly search and find specific information within the documentation.
- Media Management: Users can upload and manage images, files, and other media within BookStack, making it convenient to include multimedia content in the documentation.
- Comments and Discussions: BookStack allows users to add comments and engage in discussions on specific pages or sections of the documentation, fostering collaboration and feedback.
- Notifications: BookStack provides notifications to keep users informed about updates, comments, and activities related to the documentation.
- Theme Customization: Users can customize the look and feel of their BookStack instance by choosing from available themes or creating their own custom themes.
- Plugin System: BookStack has a plugin system that allows users to extend the functionality of the platform by integrating additional features and integrations.
- Import and Export: BookStack supports importing and exporting content, making it easy to migrate existing documentation or backup data.
- Accessibility: BookStack aims to be accessible to all users, adhering to web accessibility standards and providing features that enhance accessibility.
- User Management: BookStack provides user management capabilities, allowing administrators to create and manage user accounts, roles, and permissions.
- API: BookStack offers an API that enables integration with external systems and the ability to automate tasks or interact with the platform programmatically.
- Mobile Responsiveness: BookStack is designed to be mobile responsive, ensuring that users can access and navigate documentation on various devices, including smartphones and tablets.

### KNOWLEDGE BASE STRUCTURE

- Testing
  - Manual testing
    - Test cases and scenarios
    - Testing processes and methodologies
  - Automated testing
    - Test automation tools and frameworks
    - Test automation best practices
  - Regression testing
    - Regression testing processes and methodologies
    - Regression testing tools and frameworks
- Front End Development
  - HTML
    - HTML tags and attributes
    - HTML best practices
  - CSS
    - CSS selectors and properties
    - CSS best practices
  - JavaScript
    - JavaScript syntax and structures
    - JavaScript libraries and frameworks
- Dockerisation/Deployment
  - Docker basics
  - Docker concepts and terminology
  - Docker installation and configuration
  - Docker orchestration
    - Docker Swarm
    - Kubernetes
  - Deployment tools
    - Continuous integration and deployment (CI/CD) tools
    - Deployment best practices
- Cyber Security
  - Network security
    - Firewall configurations and best practices
    - Network security protocols
  - Application security
    - Web application security best practices
    - Application security testing tools
  - Data security
    - Data encryption techniques
    - Data security protocols
- Documentation
  - Technical writing
    - Writing technical documents
    - Document formatting and templates
  - Knowledge management
    - Knowledge sharing tools and best practices
    - Collaboration and communication tools
