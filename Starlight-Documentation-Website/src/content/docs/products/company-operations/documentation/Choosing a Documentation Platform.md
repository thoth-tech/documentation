---
title: Choosing a Documentation Platform
---

Research by Kyle Adams and Quinn Curtis regarding the best possible option for the knowledge base
project at Thoth Tech. 4 Platforms were considered: Docusaurus, Starlight, Jekyl, and BookStack.

## Docusaurus

[Home Page](https://docusaurus.io/)

### Docusaurus Pros

- Structure is determined through directory adn can be easily altered.
- Quick to get up and running
- Easily works with docker
- Compatible with Markdown, MDX, and react.
- React supports imbeded videos
- Simple navigation between blogs, docs, and pages.

### Docusaurus Cons

- Not super flexible when it comes to creating themes or having more complex sub-pages.
- If you do want that extra functionality, enable react support, but even then it is pretty strict.
- Hosting through github pages is complex
- Requires set-up through a package manager and runtime environment to set up.

## Starlight

[Home Page](https://starlight.astro.build/)

### Starlight Pros

- Compatible with a lot of existing JS frameworks via Astro
- Can create custom content for sub-pages through cards and MDX files that would match the designs
  very well.
- UI can be made using only MD and MDX files, with simple configuration files for fonts and colours
  etc.
- Includes a search feature by default.

### Starlight Cons

- It is a very new software. There is still little documentation and support out.
- As a new piece of software it also is subject to changes. so we may have to change features in the
  future.
- Requires set-up through a package manager and runtime environment to set up.
- No blog Feature.

## BookStack

[Home Page](https://www.bookstackapp.com/)

### BookStack Pros

- Content can be sorted into "books," making it really easy to sort our projects into their own
  pages and lay them out like in the designs
- BookStack is FOSS, which fits our price-point quite nicely.
- Default [diagrams](https://www.drawio.com/) integration

### BookStack Cons

- UI is not the best option. It is a bit outdated.
- Git integration is a bit touch and go.

## Jekyll

[Home Page](https://jekyllrb.com/)

### Jekyll Pros

- Ease to produce a repository by generating through a template, and simple to host through GitHub
  pages.
- Allows for a video type document that embeds a video link and centres around the video content,
  useful for producing guides that involve multiple videos.

### Jekyll Cons

- Structure is determined by categorization, which is done in-document and through additional files
  that can cause project bloat.
- Markdown only support.
- All documentation is arranged by date due to being blog-based, meaning that categorization is only
  effective through additional index infrastructure.

## Comparison

This is how the platforms stack up against the features that we are looking for. We need a platform
that is customisable in accordance with our designs and structure. We also need markdown support.
Git integration would make the work flow of adding new content simple, and a blog feature would
allow for quick news and updates.

| Platform   | Customisation / Themes | .md support | Git integration | Blog feature |
| ---------- | ---------------------- | ----------- | --------------- | ------------ |
| Docusaurus | ❌                     | ✅          | ✅              | ✅           |
| Starlight  | ✅                     | ✅          | ✅              | ❌           |
| Jekyll     | ✅                     | ✅          | ✅              | ✅           |
| BookStack  | ❌                     | ✅          | ❌              | ❌           |

## Recommendation

While looking at these criteria alone, Jekyll might look like the best option, the team still feels
that it is too restrictive, and its layout lends itself better to a blog than for documentation.

Based on the positive outcomes possible and mainly negligible issues that can be subverted given the
correct policy/use, this document recommends that the company operations knowledge base project
moves forward with Starlight as the platform for Thoth Tech's knowledge base.

While other platforms have positive characteristics that may also prove valuable to the project,
issues such as lacking/difficult integration with Git/GitHub, inaccessible customisation and themes,
and adverse project structure (the significance of documents over blogs), would create additional
constraints that Starlight is less effected by. Additionally, the existing support for Starlight
within the company will simplify the integration process, whereas other platforms would need to be
integrated from scratch. Therefore, this document concludes that Starlight is the best solution out
of the reviewed platforms for this project.
