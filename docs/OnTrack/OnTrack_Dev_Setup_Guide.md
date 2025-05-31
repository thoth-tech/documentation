# OnTrack Development Environment Setup Guide

Use this guide to correctly clone, configure, and set up the development environment for OnTrack using your GitHub fork and the correct remotes. Copy the commands and change `<your-username>` to your actual GitHub username.

## Tutorial Video

You can watch the full step-by-step setup tutorial here:

[Click to open the video in SharePoint](https://deakin365.sharepoint.com/:v:/s/ThothTech2/EYtXd8ztAdpKgI5Ki8jF7lMBC4ixVvhTzqqlDX3kmvBn4A?e=wK4v8n)

## Understanding the Repository Structure

Before starting, it's important to understand the different repository organizations:

- **doubtfirelms** - The "upstream" organization that maintains the live versions of OnTrack used by several universities
- **thoth-tech** - Used internally at Deakin for the capstone unit (this is where you'll contribute)
- **Your fork** - Your personal copy where you'll push your changes

## Branch Strategy

**Critical:** All repositories (`doubtfire-deploy`, `doubtfire-web`, and `doubtfire-api`) must be on the **same branch** to ensure compatibility:

- If working on **9.x** → all repos should be on `9.x`

**For the next few semesters, we have agreed to use branch 9.x for all development work.**

This is essential because different branches use different Docker builds with specific Node.js and Ruby versions that are only compatible within the same branch family.

> **Avoid the `development` branch entirely** - it is outdated and unsupported. Switch to the appropriate version branch (e.g., `9.x`) immediately.

## Step 1: Create or Navigate to the Dev Directory

- Create the directory if it doesn't exist:

  ```bash
  mkdir ~/dev
  ```

- Navigate to it:

  ```bash
  cd ~/dev
  ```

## Step 2: Clone the `doubtfire-deploy` Repository with Submodules

Replace `<your-username>` with your GitHub username:

```bash
git clone --recurse-submodules https://github.com/<your-username>/doubtfire-deploy.git
cd doubtfire-deploy
```

## Step 3: Set Up Remotes for `doubtfire-deploy`

```bash
git remote set-url origin https://github.com/<your-username>/doubtfire-deploy.git
git remote add upstream https://github.com/thoth-tech/doubtfire-deploy.git
git fetch upstream
git checkout 9.x
```

## Remote Configuration Explained

- **origin** → Points to your personal fork (where you push your changes)
- **upstream** → Points to thoth-tech repository (where you pull updates from)
- **doubtfirelms** → Can only be added later if needed for advanced merging (points to the live upstream repository)

## Step 4: Configure `doubtfire-web`

```bash
cd doubtfire-web
git remote set-url origin https://github.com/<your-username>/doubtfire-web.git
git remote add upstream https://github.com/thoth-tech/doubtfire-web.git
git fetch upstream
git checkout 9.x
```

## Step 5: Configure `doubtfire-api`

```bash
cd ..
cd doubtfire-api
git remote set-url origin https://github.com/<your-username>/doubtfire-api.git
git remote add upstream https://github.com/thoth-tech/doubtfire-api.git
git fetch upstream
git checkout 9.x
```

## Critical Notes and Best Practices

### Remote Configuration

- **origin** should point to your fork — this is where you push your code
- **upstream** should point to the thoth-tech repo — pull updates from here
- **doubtfirelms** can be added later for advanced merging scenarios

### Branch Management

- **Never use the `development` branch** — it is outdated and unsupported
- **Always use matching branches** across all three repositories (deploy, web, api)
- **Stick to version branches** like `9.x`, `8.0.x`, or `10.0.x`

### Before Opening Pull Requests

- **Verify your last commit** before opening a pull request:

  ```bash
  git log
  ```

- **Compare your commit** with the one shown on `github.com/thoth-tech/doubtfire-xxx` for that repository
- **Avoid extra commits** from doubtfirelms repo that make PRs hard to review

### Repository Understanding

- **doubtfirelms** = Live upstream used by universities
- **thoth-tech** = Internal Deakin capstone development
- **Your fork** = Your personal development space

> **Pro Tip:** If you've accidentally fetched branches from doubtfirelms, your PRs may contain extra commits. Always verify your latest commit matches the thoth-tech repository before submitting.
