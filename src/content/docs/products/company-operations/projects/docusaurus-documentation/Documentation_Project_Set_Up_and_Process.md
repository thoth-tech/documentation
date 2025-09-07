---
title: Documentation Project Set Up and Process
---

## Goals

The goal is a create a simple tutorial on how to download and set up the documentation project, alogn with its dependencies.

## Prerequisites

- Basic knowledge of using the terminal/command line
- Git installed on **your** system
- Internet connection

## Step 1: Install Node.js

1. Go to the official [Node.js website](https://nodejs.org/).
2. Download the **LTS (Long Term Support)** version for your operating system.
3. Run the installer and follow the setup instructions.
4. Verify the installation by opening a terminal and running:
   ```bash
   node -v
   npm -v
   ```
   You should see the installed versions of Node.js and npm (Node Package Manager).

## Step 2: Clone the Project
1. Go to this repository: https://github.com/thoth-tech/documentation and click Fork to create your own copy.
2. Open a terminal/command prompt.
3. Navigate to the folder where you want the project to be saved.
4. Run the following command:
   ```bash
   git clone <repository-url>
   ```
5. Navigate into the project folder:
   ```bash
   cd documentation-project
   ```

## Step 3: Install Dependencies

1. Inside the project folder, run:
   ```bash
   npm install
   ```
2. This will install all required dependencies listed in the `package.json` file.

## Step 4: Run the Project

1. Start the local development server by running:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:4321` (or the URL provided in your terminal).
3. You should now see the documentation project running.

## Step 5: Make Changes or Create New Documents

1. To update existing documentation or create new documents, add or modify Markdown (`.md`) files in the project.
2. Save your changes and verify them by running the local server again:
   ```bash
   npm run dev
   ```
3. Build the project to ensure there is no error
   ```bash
   npm run build
   ```
4. Commit your changes using Git:
   ```bash
   git add .
   git commit -m "Updated or added documentation"
   git push origin main
   ```

## Step 6: Create a Pull Request
1. Go to your forked repository on GitHub.
2. Click the Compare & pull request button.
3. Review your changes and ensure they are ready to merge.
4. Add a descriptive title and optional comments for the pull request.
5. Click Create pull request to submit your changes for review.
