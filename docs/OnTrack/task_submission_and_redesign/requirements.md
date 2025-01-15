[Back to index](Index.md)

# Requirements

- [Feature requirements](#feature-requirements)
- [Resources](#resources)

## Feature Requirements

Features:

- [Chat bot](#chat-bot)
- [Require tutor interaction](#require-tutor-interaction)
- [Time-based log](#time-based-log)
- [Stages for tasks](#stages-for-tasks)
- [Commit system for uploads and comments](#commit-system)
- [File viewer in browser](#file-viewer)
- [Selective file replacer](#file-replacer)
- [Diff viewer](#diff-viewer)
- [Testing environment](#testing-environment)

### Chat bot

A chat bot that takes on existing features and mediates new features:
[Require tutor interaction](#require-tutor-interation).

### Require tutor interaction

When a new upload event occurs, the tutor is required to send a substantive message to their
student. This can be communicated to the tutor via the [chat bot](#chat-bot).

### Time-based log

Displaying student/tutor and teacher events in a time-based log with the ability to scroll back and
view previous events. This uses a git-based ruby backend to store submission files. There is a
repository created for each individual submission task.

### Stages for tasks

The implementation of stages as extra resources for students who require more resources and
confidence. This enables students to tackle the task in different ways to help support their
learning.

### Commit system

The implementation of a commit system for tasks, enabling a set of mandatory core files to be
uploaded in the form of a commit.

### File replacer

The ability for students, tutors/teachers to view submitted files in their browser as well as write
and view submitted comments regarding those files. The file replacer is supported by the uplifted
file management system.

### Diff viewer

The ability for tutors to be able to compare code files submitted by students via a difference
viewer.

### Testing environment

An emulation of the back-end is required as a proof-of-concept. The emulation also serves as an
education piece for future collaborators.

## Resources

### Front-end development resources

- [Google Font Icons](https://fonts.google.com/icons)
- [Figma Material Symbols](https://www.figma.com/community/plugin/1088610476491668236/Material-Symbols)
- [Figma Angular Materials](https://www.figma.com/community/file/967106164617088179)

### Back-end development resources

- [How to serve and manipulate git repositories from rails](https://stackoverflow.com/questions/67791598/how-to-serve-manipulate-git-repo-from-rails)
- [Rugged, a library for accessing libgit2 in Ruby](https://github.com/libgit2/rugged)
- [Ruby git](https://github.com/ruby-git/ruby-git)
- [Building a HTTP server in Ruby](https://blog.appsignal.com/2016/11/23/ruby-magic-building-a-30-line-http-server-in-ruby.html)
