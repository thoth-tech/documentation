Table of Contents:

Doubtifre Local Setup

Voice Verification Setup – need to do

Ruby and Rails Tutorial Link

Install Docker Desktop

https://www.docker.com/products/docker-desktop/

Install Git

https://git-scm.com/download/win

This is Window 10 Doubtifire-deploy Setup, you need to turn on Hyper V (Windows 10 Enterprise, Pro, or Education only). If any issues you can easy to Google it and Window 10 home need to upgrade!

--------------------------------------------------------------------------------------------------------------------------

Docker Setup Tutorial (Window 10,11) – Nelson: https://deakin365.sharepoint.com/:v:/r/sites/ThothTech2/Shared%20Documents/OnTrack/Docker/Docker%20Setup%20Tutorial%20(Windows%2010_11).mp4?csf=1&web=1&e=t85YcB&isSPOFile=1.

Guide For Deploy Ontrack with Linux and some Trouble Shooting for Linux, Mac, Window: https://drive.google.com/file/d/12XMPGyLu4fZJF3Mn2aPWDarcMDLkGcKc/view

--------------------------------------------------------------------------------------------------------------------------

Doubtfire-Deploy Setting Up

Fork doubtfire-deploy (it is included doubtfire-api, doubtfire-overseer and doubtfire-web)



Clone your doubtfire-deploy. Make sure to fetch submodules to get the subprojects.

“git clone --recurse-submodules https://github.com/doubtfire-lms/doubtfire-deploy”

Open a Terminal that supports sh scripts (on Windows, you will need WSL, Msys2, or Cygwin). Run the following command to set your fork as the remote.

./change_remotes.sh

Change into the development directory and use Docker Compose to setup the database.

cd development

docker compose run --rm doubtfire-api bash

# now in the container run... (if any error run command: “install bundle”. Then continue from here)

bundle exec rails db:environment:set RAILS_ENV=development

bundle exec rake db:populate

exit

Change into the development directory and use Docker Compose to setup the database.

# Run in the development folder

docker compose up or docker compose up -d

Now, you can see your container in docker desktop and click on 2 smalls buttons to open API and Web browser, or negative to http://localhost:4200/ for Web and http://localhost:3000/ for API.





Note:

If you have problems with updating the submodules and simply want to reset all of them (this will erase all your local changes in the submodules), do “git submodule foreach --recursive git reset –hard”

Don't forget to run “git submodule update” after you switch to a new branch

Page Break


Ruby and Ruby on Rails tutorial Link:

https://www.codecademy.com/learn/learn-ruby (Free)

https://www.codecademy.com/learn/learn-rails (with Rails you can use trail for 7 days to learn the basic of rails for upskilling)

