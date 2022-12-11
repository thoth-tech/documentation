[Back to Index](Index.md)

# Project On-boarding

## Purpose of Document

The purpose of this document is to position you, the potential contributor, such that you can
contribute to the project. It is assumed that you have already begun, if not finished, the
on-boarding process for the Thoth Tech company.

## Trello

- Register a [Trello](https://trello.com/signup) account.
- Confirm your Trello account by email (may go to Trash, so be sure to check there).
- Join the
  [Trello board](https://trello.com/invite/b/elHhcRZO/289cb5bab080aeac1cf7dd9184a4fabe/task-view-taskforce)

## Figma

- Register a [Figma](https://www.figma.com/) account.
- Confirm your Figma account by email (may go to Trash, so be sure to check there).
- Join the [Figma project](https://www.figma.com/team_invite/redeem/SLuOCrE5wV5JuGc5tdlbBH).

## Configuring git (global)

If you haven't already, you must configure git.

1. Set your git username by `git config --global user.name "FIRST_NAME LAST_NAME"`, where
   `FIRST_NAME` is your first name and `LAST_NAME` is your last name.
1. Set your git email by `git config --global user.email "YOUR_EMAIL"`, where `YOUR_EMAIL` is your
   email. It is advised that you use your `@users.noreply.github.com` email address, which is, by
   default, `<username>@users.noreply.github.com`, where `<username>` is your GitHub username.

## Cloning the Documentation

This enables you to contribute to the project documentation.

```shell
git clone -b doc/view-task-and-submission-redesign --single-branch https://github.com/thoth-tech/documentation.git
```

## Get OnTrack/Doubtfire Running on Local Machine

You need a terminal that supports shell scripts (on Windows, you need WSL2, Msys2, or Cygwin).

1. Clone the fork of doubtfire-lms.

   ```shell
   git clone --recurse-submodules https://github.com/rickydodd/doubtfire-deploy
   ```

1. Open a terminal that supports shell scripts.

   Run the following command to set the fork on `rickydodd` as the remote.

   ```shell
   ./change_remotes.sh
   ```

1. You can now follow the remaining instructions, from instruction four,
   [here](https://github.com/rickydodd/doubtfire-deploy/blob/main/CONTRIBUTING.md#working-with-docker-compose).

## What Next?

- Become familiar with [the project epic](Epic.md)
- Become familiar with [the user stories and features](User-Stories-and-Features.md)
  - Are there any users that are not served in the user stories or by the features?
- Become familiar with [the requirements](Requirements.md)
  - Are all stakeholders sufficiently provided for, with this set of requirements?
- Examine [the first proposed design](design_images/iteration-3-design-1.png) and ensure all
  requirements are met, and that the inclusion of the features are user-friendly.
- Examine [the second proposed design](design_images/iteration-3-design-2.png) and ensure all
  requirements are met, and that the inclusion of the features are user-friendly.
  - Examine
    [the second design's prototype](https://www.figma.com/proto/XmKxWQ43MwrD6Red1DvYq6/Wire-Frame-Designs?node-id=478%3A4466&scaling=min-zoom&page-id=476%3A4327&starting-point-node-id=478%3A4466).
- Select a front-end design to modify, improve, extend, or implement.
- Examine the back-end emulator.
  - Has it successfully passed proof-of-concept?
  - How can git be implemented on the back-end of the OnTrack product?
- Work on implementing the front-end and back-end.
- If somebody on your team is well-versed in cyber-security, then an examination of the security of
  the implementation is required.
- If somebody on the team is well-versed in databases and database administration, then a model of
  the database is required.

## Helpful Points

- If you are using Windows as your primary operating system and you have not downloaded, installed,
  and/or set-up MinGW, then a former team found the Linux subsystem
  [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install) and
  [Docker Desktop WSL 2 backend](https://docs.docker.com/desktop/windows/wsl/) as a helpful
  development environment.
