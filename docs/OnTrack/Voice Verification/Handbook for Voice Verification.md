# Voice Verification Handbook

## Table of Contents:

---

- OnTrack Local Setup

- Voice Verification Setup – ToDo

- Ruby and Rails Tutorial Link

- [Install Docker Desktop](https://www.docker.com/products/docker-desktop/)

- [Install Git](https://git-scm.com/downloads)

  - For Windows 10, turn on Hyper V (Windows 10 Enterprise, Pro, or Education only).

---

**TODO: `FIX THESE LINKS`**

Docker Setup Tutorial (Window 10,11) – Nelson:
https://deakin365.sharepoint.com/:v:/r/sites/ThothTech2/Shared%20Documents/OnTrack/Docker/Docker%20Setup%20Tutorial%20(Windows%2010_11).mp4?csf=1&web=1&e=t85YcB&isSPOFile=1.

Guide For Deploy OnTrack with Linux and some Trouble Shooting for Linux, Mac, Window:
https://drive.google.com/file/d/12XMPGyLu4fZJF3Mn2aPWDarcMDLkGcKc/view

## Doubtfire-Deploy Setting Up

---

1. Fork doubtfire-deploy (it is included doubtfire-api, doubtfire-overseer and doubtfire-web)

2. Clone your doubtfire-deploy. Make sure to fetch submodules to get the sub-projects. This can be
   done using the following command:

   `git clone --recurse-submodules https://github.com/doubtfire-lms/doubtfire-deploy`

3. Open a Terminal that supports sh scripts (on Windows, some examples are WSL, Msys2, or Cygwin).
   Run the following command to set your fork as the remote.

   `./change_remotes.sh`

4. Change into the development directory and use Docker Compose to setup the database.

   `cd development`

   `docker compose run --rm doubtfire-api bash`

5. In the container run... (if any error run command: `install bundle`. Then continue from here)

   `bundle exec rails db:environment:set RAILS_ENV=development`

   `bundle exec rake db:populate`

   `exit`

   if encountering errors, use `bundle install` and then use the above commands.

6. Change into the development directory and use Docker Compose to setup the database.

   `cd development`

   `docker compose up -d`

7. From here, the API and Web components should be running. These can be reached using the following
   web addresses:
   - API: http://localhost:3000
   - Web: http://localhost:4200

#### Note:

If encountering errors with updating submodules, reset all submodules with the following commands:

`git submodule foreach --recursive git reset –hard`

`git submodule update –init –recursive`

### Ruby and Ruby on Rails tutorial Link:

- [CodeAcademy learn Ruby](https://www.codecademy.com/learn/learn-ruby)

- [CodeAcademy learn Rails](https://www.codecademy.com/learn/learn-rails) (requires a membership
  after 7 days)
