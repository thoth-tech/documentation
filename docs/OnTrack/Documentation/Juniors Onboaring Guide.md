# Onboarding Guide for Junior Developers at OnTrack

Welcome to OnTrack! As a new member of our team, you're stepping into a great learning opportunity where you'll gain real-world coding experience while working on our learning progress tracking platform, which integrates students and tutors.

## Introduction

OnTrack is a web platform currently transitioning from AngularJS to Angular V17. Our primary task involves migrating the frontend from CoffeeScript to TypeScript using the Angular framework. This experience will not only help you grow as a developer but also allow you to collaborate with passionate full-stack developers and other key stakeholders.

### Getting Started

We understand that everyone comes from different IT backgrounds. Don’t worry if you’re not familiar with CoffeeScript or Angular—having fundamental JavaScript and Node.js knowledge (such as what you might have learned in SIT774 Web Development) will be a great start.

The first step is to grab a card from the project planner and begin your journey. The main goal is to contribute to the codebase by migrating components and submitting your work via GitHub.

## Summary of Our Workflow

1. **Weekly stand-up meetings**: Mandatory for reporting progress.
2. **Help sessions**: Regular opportunities for guidance and problem-solving.
3. **Git & GitHub**: Use version control and pull requests for code contributions.
4. **Collaboration**: Work closely with team members and contribute to the project.
5. **OnTrack workflow**: Follow our process to successfully migrate components.

## Workflow Overview

At OnTrack, we value **technical contributions** via **GitHub**, so you'll need to follow a structured workflow to make successful code changes and contributions:

1. **Git & Branching**:
   - Start by creating a new branch to avoid breaking the main branch.
   - Run the command:  
     ```bash
     git checkout -b your-feature-name
     ```
   - This creates a new branch where you can safely make your changes.

2. **Code Migration**:
   - Begin the migration from CoffeeScript to Angular TypeScript components.
   - Don’t worry if you’re new to these languages. Angular is a hot-reload framework, so any changes you make will automatically refresh in the browser for you to observe.

3. **Testing & Reviewing**:
   - Make sure your migrated page looks exactly the same as before to avoid breaking the UI.
   - Save your changes and stage your files using:
     ```bash
     git add .
     ```
   - Commit your changes with a descriptive message:
     ```bash
     git commit -m "Migrated grade-task-modal component to Angular"
     ```
   - Push your changes to the remote repository:
     ```bash
     git push
     ```
   - Create a pull request (PR) for peer and mentor review. Make sure to merge your work into the appropriate branch, usually `8.0.x`.
   
4. **Peer Reviews**:
   - Your code will be reviewed by peers and mentors. If feedback is provided, make the necessary changes and resubmit until your migration is successful.

### Key Commands to Remember:

1. `git checkout -b feature-name`: Create a new branch.
2. `git add .`: Stage all your changes.
3. `git commit -m "Commit message"`: Commit your changes with a message.
4. `git push`: Push your code to the repository for review.

---

## Mandatory Weekly Stand-Up Meetings

It is required to attend weekly stand-up meetings with your mentor. These meetings are crucial for tracking progress and receiving guidance. Make sure your camera is on, as these meetings simulate real-world work environments.

## Help Sessions

We run **weekly help sessions** to address technical issues and provide support. These are great opportunities to ask questions and get help from senior developers. Here’s the breakdown:

- **Weeks 2-3**: Environment setup.
- **Weeks 4-6**: Technical troubleshooting.
- **Weeks 6-8**: Successful contributors assist those who need help.
- **Weeks 8-11**: Consistency checks and follow-ups to ensure issues are resolved.

## Component Reviews

As part of your contribution, you will perform **component reviews**. This involves understanding the purpose of the component you're migrating and documenting its functionality. For example, if you’re assigned the `grade-task-modal.coffee` component, you’ll:
- Search for it in the project,
- Understand its role and functionality,
- Document your migration plan, including any challenges like compatibility issues.

Refer to existing PRs and commits for guidance on how others have successfully migrated similar components.

## Collaboration & Leadership

Don’t hesitate to reach out for help. We have both junior and senior leaders to facilitate collaboration. Be polite, communicate clearly, and don’t be afraid to ask questions.

Our leadership team holds help sessions weekly, so take advantage of these to improve your skills and contribute to the project.

---

## Summary of Our Workflow

1. **Weekly stand-up meetings**: Mandatory for reporting progress.
2. **Help sessions**: Regular opportunities for guidance and problem-solving.
3. **Git & GitHub**: Use version control and pull requests for code contributions.
4. **Collaboration**: Work closely with team members and contribute to the project.
5. **OnTrack workflow**: Follow our process to successfully migrate components.

Now that you’re familiar with the process, it’s time to get started and contribute to OnTrack. We look forward to seeing your progress and supporting you along the way!

---

I hope this guide helps you onboard smoothly and prepares you for your future career. Let’s make the most of this capstone project!
