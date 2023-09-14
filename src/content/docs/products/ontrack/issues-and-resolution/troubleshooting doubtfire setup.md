---
title: Troubleshooting Doubtfire Setup
---

## 3. Trouble shooting

1. docker: 'compose' is not a docker command. See 'docker --help'

   > You need to change “docker compose” of file run-full.sh in doubtfire-deploy/development

2. doubtfire-web doesn’t compile successfully:

   - Open terminal
   - Head to folder doubtfire-deploy/development by cd
   - Run this in 1 line:

   ```console
   doubtfire-web: docker-compose run -u 0 -p 4200:4200 doubtfire-web bash -c
   "npm install; npm start"
   ```

3. doubtfire-api don’t run and exit with code 0/1.

   - Open terminal
   - Head to folder doubtfire-deploy/development by cd
   - Run this in 1 line:

   ```console
   docker-compose run -p 3000:3000 doubtfire-api bash -c "bundle install;
   bundle exec rails db:environment:set RAILS_ENV=development;
   bundle exec rake db:populate;
   bundle exec rake db:migrate && bundle exec rails s -b 0.0.0.0"
   ```

## 4. Give Up

Still cannot deploy it? Maybe it’s time to give up, you can just use Burp Suite and pentest online
on my VPS: <http://208.87.135.57:4200/> **IMPORTANT**: don’t scan with BurpSuite you guys won’t find
anything anyway because of the anchor tag.
