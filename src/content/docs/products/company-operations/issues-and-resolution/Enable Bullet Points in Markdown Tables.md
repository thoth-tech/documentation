---
title: Enable Bullet Points in Markdown Tables
---

## Issue

Unable to use html with markdown to add bullet points on tables because markdown lint does not
support this.

## Problem Description

As shown in the table below, on trying to add html tags on markdown tables, it is highlighted with
the yellow underlines showing that it is not supported. And it gives the error
"_MD033/no-inline-html: Inline HTML [Element: li] mardwonlint (MD033)_."

![Markdown Table Error](/images/mkdowntblerror.png)

## Resolution

To resolve this issue, add a _markdownlint.json_ file in your working folder that contains the
following code.

    {
    "MD033": {
    "allowed_elements": ["ul", "li"]
     },
    }

As a result of this change, you might experience some errors on your markdown document about your
line exceeding expected value. To resolve this, update the above code with the one below.

    {
    "MD033": {
    "allowed_elements": ["ul", "li"]
    },
    "MD013": {
    "tables": false
     }
    }

**Your document should now be accepted by markdown lint!**
