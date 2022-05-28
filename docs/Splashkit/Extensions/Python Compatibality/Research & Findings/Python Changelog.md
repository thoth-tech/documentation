# Python Syntax Changelog

**Purpose:** This document collates specific language changes from Python 3.8 up. It is intended to
aid in the investigation of why Python is functional in 3.7 and earlier, but not later versions.

**This document is not complete.**

## Python 3.0

Python 3.0 was intentionally developed to be backwards compatible. At the establishment of the
Python project team, we were informed that versions prior to 3.8 functioned as intended with the
translator. This leads to the thinking that the Python 3.8 update is specifically responsible for
the failure in compatibility.

## Python 3.8

**Assignment expression** introduces new syntax, used by :=, to assign values to variables as part
of a larger expression.

**Positional-only parameters** introduces new notation requirements, using /, to indicate that some
function parameters require positional specificity and cannot be used as arguments. The following
code uses the example that parameters _a_ and _b_ are positional-only, with _c_ and _d_ being
positional or keyword, and _e_ and _f_ being keyword-only.

**Parallel filesystem cache** introduced new setting used to configure the implicit bytecode cache
so that it can use a separate filesystem tree rather than the default subdirectories.

**Python documentation** provides a list of
[changes in Python behaviour](https://docs.python.org/3.8/whatsnew/3.8.html#porting-to-python-3-8)
that may require code changes. Additionally, changes to the Python API and C API are included,
though it is unknown if any of these things would affect existing translator functionality directly.
