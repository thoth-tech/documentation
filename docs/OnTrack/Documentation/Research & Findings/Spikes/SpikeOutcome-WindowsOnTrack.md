# \*\*Spike Outcomes

==================

**Spike:** 2

**Title:** Spike for Installing and Deploying OnTrack on local Windows machines

**Author:** Cao Quoc Vi, qvcao@deakin.edu.au

## Goals / Deliverables

- Test out how can we install WSL2 on Windows as well as Ubuntu.
- Gather all the requirements for running OnTrack.
- Structure a step-by-step guide to deploy OnTrack.

## Technologies, Tools, and Resources used

List of information needed by someone trying to reproduce this work\

- Internet Browser; Google Chrome, Firefox, Safari, Microsoft Edge.
- Programming Languages: Ruby
- Supporting Applications: Docker, VMWare.
- Text-based format: Json
- Code Editor: VsCode
- Terminals: zsh, bash.
- Repository storage: GitHub.

## Tasks undertaken
- Installed WSL2 and Ubuntu on a local Windows machines and test out serveral basic command lines. This is better to watch this video: [Installing WSL2 and Ubuntu on Windows.](https://www.youtube.com/watch?v=_fntjriRe48&t=730s)
- Found a good resource for freshman to practice some of the Linux and GitHub command: [GitHub](https://www.youtube.com/watch?v=PSJ63LULKHA),  [Linux](https://www.youtube.com/watch?v=gd7BXuUQ91w&t=261s)
- Set up Docker example video:  [Docker](https://www.youtube.com/watch?v=rOTqprHv1YE)
- Run Dev Container on Visual Studio Code.
- Successfully deployed OnTrack but there were few errors relating to mysql server.
## What we found out

- Installing WSL2 is pretty easy to most student if the Windows machines meet the basic specifications included in this video [Installing WSL2 and Ubuntu on Windows.](https://www.youtube.com/watch?v=_fntjriRe48&t=730s)
- Using [CONTRIBUTING](https://github.com/caoquocvinq/doubtfire-deploy/blob/development/CONTRIBUTING.md) with the GitHub commands to clone the repositories required for deploying OnTrack. We only stop at cloning the required repositories since we are running the Dev Container to Deploy OnTrack.
- Following the example of the product lead to set up Docker and run the Dev container visually: [OnTrack Deploying steps using Dev Container.](https://video.deakin.edu.au/media/t/1_6degiyrj)
- One critical error from mysql server that the mysql server is somehow not running on the sockets.

## Open issues/risks

- Can't connect to local MySQL server through socket '/run/mysqld/mysqld.sock' (2) is the current error.
This error is caused by Ubuntu cannot find mysql server running: ![Screenshot](/docs/OnTrack/Documentation/Research%20&%20Findings/Spikes/pictures/socket.png)\
- The webpages are successfully deployed but mysql server is not running on Sockets so that it cannot retrieve the resources from MariaDB and the result looks like this: ![Screenshot](/docs/OnTrack/Documentation/Research%20&%20Findings/Spikes/pictures/OnTrack%20webpage.png)
