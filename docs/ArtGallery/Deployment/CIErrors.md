## Continuous Integration Errors

**Author:** Ayan Masood, [amasood@deakin.edu.au](mailto:amasood@deakin.edu.au)

**Introduction**

This report goes over various commonly encountered errors when pushing code into the repository and
how to understand the description of errors provided by the automated CI testing system already
present.

**Prettier**

This check is in place to ensure formatting across all documents/code pushed are consistent. Most
errors related to formatting through prettier the most common error is:

Error: Process completed with exit code 1.

Solving this problem requires only a few changes in the prettier.io/playground:

- First the –parser has to be switched to markdown
- --print-width set to 100
- --prose-wrap set to always
- Copy the result to your markdown file and ensure there is a space at the end of the document

**Linelint**

This checks if there are any unnecessary whitespaces in the document/code. This will only provide of
the number of errors in the document.

`Total of 1 lint errors!`

This indicates that there are two empty spaces in the document which are causing this issue. To fix
the issue ensure that no gaps are in the file provide such as an empty space in the start of the
document which is normally the case for these errors.

**Vale**

This does provide an exact location and description of the error encountered. This is highly
dependent on the predefined configuration file which can result in odd issues in files which can be
otherwise free from errors. It will generally give an error outlining the line at which it occurred
and what caused it.

This is just an example of a type of error which may be encountered and how to deal with it:

`Line 118, position 8 (rule thothtech.SentenceSpacing)`

`error: "d.Y" must contain one and only one space.`

It identified a word in the document as an issue with sentence spacing which itself should not occur
due to the full word being an example file of YAML but it identified the error as a sentence issue.
To solve this error one could add a space with cd. YAML, which would be incorrect but default
configuration limits this or remove the dot entirely to cd YAML file.

**Conclusion**

These errors have simple solutions to them which are easily fixed if they can be understood by the
user. This document provides a small overview of the solutions and common errors encountered.
