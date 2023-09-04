## Jupyter Notebook Support Epic

### Background:

- Students who use OnTrack currently are limited in the way they can upload their Jupyter notebook
  files to OnTrack. Students must download their notebook as a HTML through Jupyter notebook and use
  an online PDF converter to convert the HTML file to PDF, so their work can be submitted to
  OnTrack.

### Business Value:

- To minimise students needing to use outside sources to be able to upload their work, students must
  be able to download their work from a Jupyter notebook, which is saved as a file with ‘.ipynb’
  file, and upload to OnTrack, where it will be converted to a PDF for submission. This will make it
  much more efficient for students to upload their work, which will save time for tutors having to
  explain the process of having to outsource to a PDF conversion website. This will increase trust
  in our product and improve user experience.

### In scope:

- Review of previous work
- PDF conversion functionality
- Feature documentation
- User guide documentation

### Out of scope

- New features

### What needs to happen:

- Review of existing work to find what is usable and then plan out what work is still to be done.
  - Allow for ipynb files to be accepted for Ontrack
  - Convert ipynb files to PDF via LaTeX
  - Test files are converted from ipynb to PDF

### Assumptions / Dependencies

- Code added doesn’t affect any other parts of OnTrack

### Analytics Considerations

- How often is this feature being used?
- Track failed conversions

### Reg & Compliance Considerations

- N/A

### Operations/Support

- Team members may need training/upskilling in technologies such as Ruby, Ruby on Rails, Docker and
  GitHub.
- User guide documentation will need to be release simultaneously with the new feature, so users
  know how to use this new feature.

### What are the challenges?

- Team members will need to understand existing code contributions and understand what is usable to
  integrate their Jupyter notebook support project work. Team members may also need to learn new
  technologies used in the integration of Jupyter notebook support

### Acceptance criteria

- Validate planning documentation with managing directors
- Documentation is accurate to current version of products
- All functionally of Jupyter notebook support must be tested
- Data is collected on usage to inform future decisions
