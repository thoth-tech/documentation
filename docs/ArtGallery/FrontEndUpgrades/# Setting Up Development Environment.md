# Setting Up Development Environment and GitHub Workflow

## Setting up Prettier Extension

### On Windows

- Open command prompt
- Run `wsl --install`
- Linux will set up in the Windows prompt. Then run `sudo apt-get install curl`
- Run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
- To check if nvm is installed, run `source ~/.bashrc`
- Run `nvm install node`
- Run `nvm use`
- Install Prettier: `npm install -g prettier`

### On Mac

- Install Homebrew from the official website
- Run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
- To check if nvm is installed, run `source ~/.bashrc`
- Run `nvm install node`
- Run `nvm use`
- Install Prettier: `npm install -g prettier`

## Setting up the Front-end Environment and Docker in the Local System

### Forking

- Open Thothtech GitHub in your browser
- Navigate to Repositories as the second option in the navigation bar. Click it.
- Scroll down until you see the art-gallery folder/repository. (Note: Only click art-gallery; there
  are other misleading folders like art-gallery-frontend.)
- When the art-gallery repository opens up, you'll see an option named Fork at the top of the page.
  Click it.
- It will open a new window and prompt you to type according to the instructions. Follow it.
- The fork is done.
- You can see an option at the top named Code. Copy the code you get from it.

### Cloning

- In the forked page, you can see an option named Code. Click it, and you will get a code. Copy it.
- Open a command prompt
- Run `wsl --update` (only once on a computer)
- Change your directory to the directory where you wish to clone the git folder.
- Run `git clone <Code you get from the forked page>` (e.g.,
  `git clone https://github.com/thoth-tech/art-gallery.git`)

## Pull Requests

For every work you do, whether it is documentation or coding, you need to push it to GitHub. The
steps and procedures for it are given below. To upload any code changes or front-end enhancements,
fork and clone the repository art-gallery. To upload documents to GitHub, you need to fork and clone
the documentation repository (thothtech -> documentation repository) following the same steps as
given in the fork and clone section (only change is the repository). You can only upload a markdown
document to GitHub. You can make this by writing your content in a notepad file and saving it with
the extension .md. After cloning the repository:

- Move into the directory you cloned on your host machine using `cd` (e.g., `cd art-gallery`)
- Create a new branch: `git checkout -b yourbranchname` (naming conventions are given in the
  Thothtech GitHub, e.g., `git checkout -b update/UCD_Principles`)
- Open your folder manually and make your changes (if you wish to change any code or create any new
  documents, etc.) and save the changes. For adding documents, you can open
  `documentation -> docs -> Art-Gallery` and make a folder here named `FrontEndUpgrades` (if it is
  not here). Add any documents inside this folder.
- Return to the command prompt and enter `git add .`
- Commit the changes: `git commit -m "Short explanation of the change"` (e.g.,
  `git commit -m "feature: modified the code"`)
- Push it to GitHub: `git push origin yourbranchname`
- Now you should open your forked repository on GitHub (e.g., Forked repository means
  `yourusername -> repository`, not `thothtech -> repository`).
- You should see a yellow box appearing on that page saying "Compare and Pull request." Click it.
- A new window appears. You need to write a small description of what changes you have made. You can
  see Pull request description writing formats in the Thothtech GitHub.
- Click "Create Pull Request."

## Before Uploading

Before uploading any document or code to GitHub, you need to check and test the document or code you
are going to commit. Here I will show you how to check or rectify Prettier errors using VS Code.
First, download VS Code and install the extension Prettier-Code Formatter. Open a command prompt and
change into the directory where you wish to set up the Prettier extension. This can be the folder in
which you are going to make changes.

- Run `npm install prettier --save-dev`
- Next, you can `echo {} > .prettierrc`
- Now you can see a file named `.prettierrc` in the directory. You can define the Prettier workload
  format in that file and save it. A screenshot of the `.prettierrc` will be uploaded with this file
  in an image document.
- Now the setup is done. So whenever you do any codes or documents in this folder in VS Code, after
  making changes, press Shift+Alt+F to format it according to the Prettier extension.
