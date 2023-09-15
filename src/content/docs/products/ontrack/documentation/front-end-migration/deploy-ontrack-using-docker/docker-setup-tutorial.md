---
title: Docker Setup Tutorial
---

## Install Git (Windows)

<https://git-scm.com/download/win>

---

## Install Docker Desktop

<https://www.docker.com/products/docker-desktop/>

1. Fork **doubtfire-deploy:development**, **doubtfire-api:development**, and
   **doubtfire-web:development** from <https://github.com/doubtfire-lms>
2. Clone your doubtfire-deploy. Make sure to fetch submodules to get the subprojects.

   ```console
   git clone -b development --recurse-submodules https://github.com/[your_github_username]/doubtfire-deploy
   ```

3. Change directory to doubtfire-deploy by using: cd doubtfire-deploy. Open a Terminal that supports
   sh scripts (on Windows, you will need WSL, Msys2, or Cygwin). Run the following command to set
   your fork as the remote.

   ```console
   bash ./change_remotes.sh
   ```

4. Change into the development directory and use Docker Compose to setup the database.

   ```console
   cd development
   docker compose up -d
   docker compose run --rm doubtfire-api bash -c "bundle exec rails db:environment:set RAILS_ENV=development && bundle exec rake db:populate"
   ```

5. Change into the development directory and use Docker Compose to setup the database. Run in the
   development folder

   ```console
   docker compose up -d
   ```

6. Open a web browser and navigate to: <http://localhost:4200>
