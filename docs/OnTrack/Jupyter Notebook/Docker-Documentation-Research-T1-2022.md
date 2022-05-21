# Docker Documentation and Research (WIP) T1-2022

[Back to Jupyter Notebook Documentation Index](Index.md)

## Intro

The Jupyter Notebook conversion feature will happen via processes that occur inside
Docker containers. In this document we will discuss the main architecture of this structure in
relation to OnTrack.

OnTrack is deployed with two main containers that will always be running:

- The front-end container which hosts the logic behind the user interface of OnTrack (mostly
  unrelated to this feature)
- The back-end container which hosts the logic related to database interactions and other processes

To achieve the Jupyter conversion feature, we will be using a new container that contains all of the
dependencies (Python, TeX, etc.) needed for a .ipynb to PDF conversion, and performing the
conversion process within this container. This allows us to have a standalone software package that
is extendable if required, for example if new Python libraries are required by a unit. It also means
that we are able to create as many standalone containers as required for different conversion
processes, such as:

- Docx to PDF conversion using Apache POI
- Powerpoint presentation to PDF conversion using Apache POI

This will allow us to add a wide range of compatability in the future, regardless of the software
requirements.

## Overview of Conversion Process

[<img src="docker_flow.png" />](docker_flow.png)

When the OnTrack front-end sends a new file to the OnTrack back-end, the back-end will be able to
determine the file type and if it needs to be converted. If the OnTrack back-end recieves a .ipynb
file, it will 'spin up' the Jupyter to PDF conversion container to perform the conversion process.

This is done via a shell command that does several things:

1. Firstly, it ensures that the file to be converted is renamed to "input.ipynb".
2. It then instructs the container to run AND it mounts the file's directory as a Docker volume. As
   the container runs it will execute the conversion process via its `ENTRYPOINT` command. The
   converted file will be outputted to the volume. After the container has run, it will be removed.
3. Finally, it removes the temporary files to ensure there is always free space.

The `docker run` command allows us several options for this type of use-case: we are able to specify
a volume using the `-v` option, and we are able to ask that the container is removed after it has
finished its process with the `--rm` option.

**Note: we may need to have some process in place to read whether the conversion was a success or a
failure.**

## Conversion Container Requirements

For a container to work in this architecture, there are some requirements that have to be met:

- The container will run the conversion as its `ENTRYPOINT` command _without any user input
  required_.
- The container will always look in a single directory (mounted as a volume when the container is
  run) for **one** file that will be called "input" (+ whatever file extension is required).
- The container will always output the converted file to the **same** directory (mounted as a volume
  when the container is run) and call it "output.pdf".

These requirements allow for the containers themselves to remain isolated, while the logic about
which files need to be converted can be handled seperately by OnTrack's backend. This is necessary
to follow the Single-responsibility Principle: the container itself is responsible for only one
task - that is, performing the conversion process.
