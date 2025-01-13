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
