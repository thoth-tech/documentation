Action Plan -
Group Documentation Repositories Separately
Problem -
Currently, the documentation for OnTrack, Splashkit, and Courseflow is combined in a
single repository. This lack of separation makes it difficult for new students to find
relevant information. The overwhelming volume of mixed content can cause confusion
and hinder learning.
Solution -
We should create distinct documentation repositories for each project -
a) OnTrack Documentation Repository
b) Splashkit Documentation Repository
c) Courseflow Documentation Repository - It’s documentation is located within the
"doubtfire-astro" repository, which adds to the confusion.
Each repository should contain all the relevant files and resources for its respective
project. This clear separation will simplify navigation, reduce confusion, and make it
easier for new students to locate the information they need.
Remove Duplication
Problem -
There are redundant files across repositories and within folders which make the
documentation difficult to maintain and confusing for new users. A significant example
of this duplication exists between documentation-1 and documentation-2.
1. 90 percent of the content is identical across both repositories
2. Files like index.md appear multiple times with little to no unique content
3. Unique content such as the Password Guideline in documentation-1 is missing in
documentation-2
4. In documentation-1, the Research & Findings folder in the Front End Migration
directory contains two very similar files: Testing\_Decision.md and Testing Decision
Process.md. –
i.
Both files share 90% of their content, making them largely redundant.
ii.
The only difference is that Testing Decision Process.md includes an additional conclusion
section and provides extra details, such as well-defined steps like npm install and npm
test.

To avoid duplication, one consolidated file should be sufficient.
The only differences between documentation-1 and documentation-2 are as follows. As I have
identified these, we should consider merging the unique content into one file and deleting the
other -
1. Password Guideline:
➢ Exists in the Company Documentation Team folder in documentation-1 but is
missing in documentation-2.
2. Empty index.md Files:
➢ documentation-2 contains two empty index.md files, whereas documentation-1
has only one empty index.md file.
Solution -
We need to consolidate redundant files and merge the unique content into one
repository. This includes –
1. Combining the duplicated content in documentation-1 and documentation-2 into a
single repository
2. Ensuring unique files like the Password Guideline are included in the consolidated
repository
3. Removing unnecessary duplicates like multiple index.md files
Eliminating these redundancies will make the documentation easier to maintain and more
efficient to use.
Similarly, the documentation and documentations repos have a lot in common. Here are some
of the similarities. It is important to note that I have not listed all the duplications, as 90% of the
content is duplicated.

![Image](images/page2_img1.png)

![Image](images/page2_img2.png)

documentation
documentations

![Image](images/page3_img1.png)

![Image](images/page3_img2.png)

![Image](images/page3_img3.png)
documentation
documentations
Rename Files and Add Brief Descriptions
Problem
Many files have ambiguous or generic names, making it difficult for new students to
understand their purpose. This lack of clarity can cause confusion and slow down
learning.
1. The names of the repositories don’t clearly describe their contents, which can confuse a
new student. For example, "doubtfire-astro" and "doubtfire-io."
2. Examples of ambiguous names include Aspose.Words.c1eaed0e...
3. Generic names like image1.png do not provide context.
Similarly, most files, except "doubtfire-astro" and "doubtfire-io," do not clearly indicate which
project's documentation they contain. Even after opening these files, we only see folders like
"github" or "src," but they still don’t mention the project names that a new student might be
searching for.
Solution
We need to rename files to more intuitive names and add brief descriptions to improve
clarity. This includes
1. Changing ambiguous names like Aspose.Words.c1eaed0e... to meaningful names such as
contribution-guide.png
2. Replacing generic names like image1.png with descriptive names like project-
dashboard.png

![Image](images/page4_img1.png)

![Image](images/page4_img2.png)

![Image](images/page4_img3.png)
3. Using lowercase and hyphens for file names (e.g., courseflow-dfd-0.png instead of
CourseFlow-DFD-0.png).
4. Adding a one-line brief description for each repository and file to help new students
quickly understand their purpose
Ensure Consistent Repository Format
Problem
The structure and naming conventions across repositories are inconsistent, making
navigation difficult and leading to confusion.
Solution
We should unify the structure of all repositories to maintain consistency. This includes –
1. Using consistent naming conventions such as lowercase with hyphens for file names
(e.g., courseflow-dfd-0.png)
2. Adding a README.md file to directories like src to explain the folder structure and its
purpose
This consistency will make the documentation easier to navigate and maintain.
Correct All Minor Discrepancies
Problem
There are minor inconsistencies across the documentation that can create confusion and reduce
clarity. These issues include mismatched file names, inconsistent endpoint conventions, and
duplicated content. For example - There are numerous empty index.md files that we must
consider deleting
Solution
We need to address all documented minor inconsistencies to improve clarity and
maintainability. This includes
1. Resolving naming mismatches like setting.md vs "settings" in the SPIS list
2. We should use lowercase and hyphens for file names (e.g., courseflow-dfd-0.png instead
of CourseFlow-DFD-0.png).
3. Aligning duplicated API content, such as those found in tutorials.md and similar files
across repositories
4. Deleting empty index.md files
By correcting these minor discrepancies, the documentation will become more organized, user-
friendly, and easier to maintain, minimizing confusion for new users.
Further explanation for better clarity
In documentation-1, the Research & Findings folder in the Front End Migration directory
contains two very similar files: Testing\_Decision.md and Testing Decision Process.md.
•
Both files share 90% of their content, making them largely redundant.
•
The only difference is that Testing Decision Process.md includes an additional conclusion
section and provides extra details, such as well-defined steps like npm install and npm
test.
To avoid duplication, one consolidated file should be sufficient.
Task Submission & Redesign
In document-1
In document-2

![Image](images/page6_img1.png)

Here again, every folder, sub-file, and the content of all files, except for the two differences
mentioned above, are the same. We should consider consolidating them into one repository to
eliminate redundancy.

![Image](images/page7_img1.png)
