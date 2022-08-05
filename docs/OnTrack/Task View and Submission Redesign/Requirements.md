[Back to index](Index.md)

# Requirements
- [Feature requirements](#feature-requirements)
- [Resources](#resources)

## Feature Requirements
Features:
- [Time-based log](#time-based-log)
- [Stages for tasks](#stages-for-tasks)
- [Commit system for uploads and comments](#commit-system)
- [File viewer within browser](#file-viewer)
- [Selective file replacer](#file-replacer)
- [Testing environment](#testing-environment)

### Time-based log
Displaying student/tutor and teacher events in a time-based log with the ability to scroll back and view previous events. This will use a git-based ruby backend to store submission files. There will be a repo created for each individual submission task.

### Stages for tasks
The implementation of stages for tasks with aim of tackling the task in different ways allowing for different ways of learning the concept.

### Commit system
The implementation of a commit system for each stage of tasks allowing students to upload both files related to the stage/task but as well as other any other files to support student learning. When uploading the files students must write a small commit message providing context for tutor/teachers when viewing the work.

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