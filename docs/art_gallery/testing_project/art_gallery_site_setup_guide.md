# Running the Art Gallery site – Windows

## Programs required:

**Nodejs**

[https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi](https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi)

**Microsoft Visual Studio – Community Edition**

[https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false)

**Postgres**

[https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)

_Install notes:_

On install of Postgres set the postgres user password to PostgresSQL – to match the backend
credentials

**Github:** [Thoth Tech (github.com)](https://github.com/thoth-tech)

Set up your own fork of the Gallery project, both art-gallery-frontend and art-gallery-backend.

## VS Studio Backend setup

From VS Studio – File -\> clone repository do this for both front and backend.

Open the art-gallery-backend project take note of the path to the art-gallery-database folder.

from the back-end-gallery repo under the art-gallery-database folder copy the
art-gallery-sampledata.sql file into the C:\Program Files\PostgresSQL\15\bin folder

## Database Setup

Open PSQL prompt – and run the following

CREATE DATABASE art_gallery_db;

Open windows command prompt as Administrator

Navigate to C:\Program Files\PostgresSQL\15\bin and run the following:

pg_restore -v -Fc -h localhost -U postgres -p 5432 -d art_gallery_db art-gallery-db-sampledata.sql

This will populate the database with the sample data.

On VS Studio from the gallery-backend project, run the art-gallery-backend.sln file

Run the debugger and this will open the backend site.

## VS Studio Frontend

In VS studio open a terminal window and navigate to the art-galley-frontend\art-gallery folder

run the following to load the frontend of the website.

Npm run serve

Open a browser and go to [http://localhost:8080/](http://localhost:8080/)

The site should now be all running.
