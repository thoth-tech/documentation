# Feasibility Study: Dockerizing TeX Live

## Author Information

- Author(s): Eliya G (s222313935)

## Key Links/Resources

- [TeX Live](https://www.tug.org/texlive/)
- [Texlive Docker Image](https://hub.docker.com/r/texlive/texlive)
- [RailsLatex](https://github.com/amagical-net/rails-latex)
- [Jupynotex](https://github.com/facundobatista/jupynotex)

---

## Document Summary

This document outlines the requirements for dockerizing TeX Live into its own container and the
approach for integrating it with the OnTrack backend.

TeX Live is a comprehensive distribution used by OnTrack to render portfolios by combining multiple
PDFs, embedding mathematical notation, and incorporating Jupyter notebooks. Currently, TeX Live is
manually installed into the main container during each image build, which requires a 4-5GB
installation.

## Objective

The aim of this project is to improve the deployment process by isolating TeX Live into its own
image and container, eliminating the need for repetitive installations, and thereby making the build
process more efficient.

## LaTeX Process

LaTeX processing in OnTrack is currently being handled by the
[RailsLatex](https://github.com/amagical-net/rails-latex) gem package. A layout is first compiled
using the `render_to_string(template: 'path/to/template_pdf', layout: true)` rails function, which
originally returns a .tex document. Setting `layout: true` indicates that the `template_pdf.erb`
layout will be embedded within the `/app/views/layouts/application.pdf.erb` base layout. By using
the `.erbtex` extension, RailsLatex automatically runs its PDF generator after the layout has been
compiled into a LaTeX document.

A new working directory is created inside of `app/tmp/rails-latex/`, where the `.tex` document is
saved into as `input.tex`.

A LaTeX config is defined in the first line of the `application.pdf.erbtex` file, currently as
follows:

```ruby
<% @latex_config={ :recipe => [ {:command => "lualatex",:runs => 2} ], :supporting => Rails.root.join('app', 'views', 'layouts', 'jupynotex.py') } %>
```

This config instructs RailsLatex to copy `jupynotex.py` into the new working directory and run the
`lualatex` compiler twice. The first run of `lualatex` generates an auto-added last page used to
track the total number of pages, while the second run removes this page and embeds the final page
count.

Based on the
[RailsLatex source](https://github.com/amagical-net/rails-latex/blob/e36fb3ce49a3c6d4d1dec2869555121fc185a7be/lib/rails-latex/latex_to_pdf.rb#L14-L15),
the full CLI command being executed is:

```shell
~$ lualatex -shell-escape -halt-on-error -interaction=batchmode input.tex
```

This is executed using ruby's `system()` command, where an `input.pdf` is generated on success.
RailsLatex checks that the system command executed without any errors, and that the PDF file exists,
before returning the PDF as a string directly through the original `render_to_string()` call,
instead of the original TeX string.

This LaTeX process is executed in only two classes in the backend.

```ruby
doubtfire-api/app/models/pdf_generation/project_compile_portfolio_module.rb: def make_pdf()
doubtfire-api/app/models/task.rb: def make_pdf()
```

## Implementation Plan

### Docker container

The TeX Live container will utilise the official `texlive/texlive:latest` image, which already
includes the necessary packages specified in the texlive-install.sh script. However, a Dockerfile
will be required to install additional packages such as:

```yaml
- imagemagick
- inkscape
- librsvg2-bin
```

The TeX Live container will be kept alive for seamless communication with the main container, with
required access to the following shared volumes:

```yaml
- student-work # Access to student task submissions
- doubtfire-api/test_files/submissions # Access to student-work symlinks
- doubtfire-api/public/assets/images # Generic assets included in LaTeX documents
- /var/run/docker.sock # Allow inner communication between containers
- doubtfire-api/tmp/texlive-latex # Temporary folder to create working directories
```

### Backend

For the backend, while it might be possible to run
`sudo docker exec -it <container name> lualatex ...` directly within the latex_config to offload
LaTeX processing to the TeX Live container, this approach lacks control over specifying the work
directory name. To address this, we will create a custom bash script that resides on the TeX Live
container, which will be executed via docker exec. This script will accept the working directory
name as an argument and run the lualatex command twice to convert the .tex file into a PDF.

Instead of relying on the current latex_config approach, the core workflow of RailsLatex will be
re-implemented into a new module that can be called from both `task.rb` and
`project_compile_portfolio_module.rb`, using `system()` to execute the necessary Docker CLI
commands. The `make_pdf()` function will return the same PDF string as it does now, ensuring that
when make_pdf is called elsewhere, the process of copying or moving files to the student-work folder
remains unchanged as long as a valid PDF is generated.

The RailsLatex package will not be removed because it includes an escape_latex method that is
essential for escaping LaTeX special characters in text, preventing them from being interpreted as
LaTeX commands. This method will continue to be used within the layouts, with RedCloth utilized if
available.

## Testing

We will run [Minitest](https://github.com/minitest/minitest) to complete an exhaustive test of all
the API models, which already include various LaTeX render tests, compiling submissions with code
files, Jupyter notebooks, images/gifs, and combining multiple PDFs using the follow command:

```shell
rake test
```
