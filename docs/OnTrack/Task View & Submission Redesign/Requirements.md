[Back to index](Index.md)

# Requirements
- [Feature requirements](#feature-requirements)
- [Resources](#resources)

## Feature Requirements
Features:
- [Chatbot](#chatbot)
- [Require tutor interaction](#require-tutor-interaction)
- [Time-based log](#time-based-log)
- [Stages for tasks](#stages-for-tasks)
- [Commit system for uploads and comments](#commit-system)
- [File viewer within browser](#file-viewer)
- [Selective file replacer](#file-replacer)
- [Testing environment](#testing-environment)

### Chatbot
A chatbot that will take on the existing feature of collecting ILO/ULO competencies of an upload, prompted to and collected from the student, as well as mediate the new feature: [Require tutor interaction](#require-tutor-interation).

### Require tutor interaction
Whenever a new upload event takes place, the tutor is required to send a message to the student to unlock the ability to mark an assigment as complete, re-do, etc, this requirement can be communicated to the marker via the [chatbot](#chatbot).

### Time-based log
Displaying student/tutor and teacher events in a time-based log with the ability to scroll back and view previous events. This will use a git-based ruby backend to store submission files. There will be a repo created for each individual submission task.

### Stages for tasks
The implementation of stages as extra resources for students who require more resources and confidence. This will enable students to tackle the task in different ways to help support their learning.

### Commit system
The implementation of a commit system for tasks, this will allow students to upload mandatory files (files related to the core of the task) and additional files that support evidence of their learning. After uploading, students will be prompted by a chatbot to provide context about their upload items.

### File replacer
The ability for students, tutors/teachers to view submitted files within their browser as well as write and view submitted comments regarding those files. This will be supported by the uplifted file management system.

### Testing environment
To emulate and develop our backend git solution we will build a very simple HTTP server and establish a REST API. This is to emulate requests from Ontrack front-end without tightly integrating it. This will drastically lower the learning curve to contribute to this project.

## Resources
### Front-end development resources
- [Google Font Icons](https://fonts.google.com/icons)
- [Figma Material Symbols](https://www.figma.com/community/plugin/1088610476491668236/Material-Symbols)
- [Figma Angular Materials](https://www.figma.com/community/file/967106164617088179)

### Back-end development resources
- [How to serve and manipulate git repos from rails](https://stackoverflow.com/questions/67791598/how-to-serve-manipulate-git-repo-from-rails)
- [Rugged, a library for accessing libgit2 in Ruby](https://github.com/libgit2/rugged)
- [Ruby git](https://github.com/ruby-git/ruby-git)
- [Building a HTTP server in Ruby](https://blog.appsignal.com/2016/11/23/ruby-magic-building-a-30-line-http-server-in-ruby.html)