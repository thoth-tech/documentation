# Guide For Environment setting of Doubtfire

## 1. Before setting up Doubtfire

You need to set up a Kali Linux virtual machine and clone the Doubtfire. Any management tool(Virtual
box, VM ware and so on) to manage these virtual machines will work.

Here is a nice YouTube tutorial: <https://www.youtube.com/watch?v=pwYH0NNWWzU>

> \*Note: Set the Network mode to **NAT\***

## 2. Clone DoubtFire

Here is the GitHub link to the project that we going to exploit:
<https://github.com/doubtfire-lms/doubtfire-deploy>

What you guys need to do is

1. read this: <https://github.com/doubtfire-lms/doubtfire-deploy/blob/main/CONTRIBUTING.md>
2. And watch this video of MANJIANG YU: <https://www.youtube.com/watch?v=2WEmibSkF9w>
3. Install docker-compose. Command: sudo apt install docker-compose Success deploy:

// photo

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
