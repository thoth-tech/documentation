#Summary: how to contribute to repo# ##Written by Chloe Hulme##

**Fork repo in GUI (only needs to be done once per repo at the start) -> then clone forked repo into
a local directory:**

git clone <<http://> etc... the link from the repo>

**Creating a new branch:**

git checkout -b <topic>/<branch description>

_Using 'checkout' will automatically switch you onto this branch_

**After making your changes:**

git add .

git commit ------>> press **'i**' key to edit then: <topic>:<message>, hit **esc**, then type
**:wq** and hit enter

git push -u origin <your new branch name>

**Creating a draft pull request:**

Go into GUI and create a draft pull request **(pull request will be between Thoth Techs file vs your
repo's file, ie. Thoth tech/Art Gallery/README.md vs My Forked Repo/Art Gallery/README.md)**, add in
a relevant comment,then mark it as ready for review.

## Some useful tools:## \*\*Run your contribution through these to ensure your pull request can be

approved!\*\*

_Markdown:_ <https://euangoddard.github.io/clipboard2markdown/>

_Prettier:_ <https://prettier.io/playground/> **Set print-width: 100, prose-wrap: always**
