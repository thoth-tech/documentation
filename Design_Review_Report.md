# Meeting Report

## Author: Wei Min & Cynthia

On August 7, Cynthia and Wei conducted a meeting to review and discuss the designs previously made
by the team members of CourseFlow. Before this meeting, both of them had been working on creating
new designs for CourseFlow on Figma. The existing designs provided were in Figma. This file contains
3 views including TimeTable View, CourseFlow Discovery Page and Analytics Page. Cynthia is
responsible for reviewing Timetable and Discovery Page whereas Wei is responsible to create the pop
up design on Timetable Page and review Analytics Page.

## Review: Analytics Page

**Overview:** The purpose of the analytics page is to give students an overview on how they have
progressed in their course. This will give students an idea on how many units they have completed,
how many more units they need to complete and what is their estimated WAM score based on the units
they have completed.

**Pros:**

- This view will provide a summary of what the students have completed. This will be shown on the
  pie chart where the number of completed units and the number of on-going units will be on it.
- Based on the completed units, an estimated WAM will be calculated. Students will then be able to
  grab this information and make sure they are on track for their desired goals.

**Cons:**

- This view included an unnecessary bar chart to show a certain information. However, bar chart
  style is not suitable to present the information we have.
- Checkbox for skills and prerequisites are not applicable to every student as each individual will
  have different skills and prerequisites to achieve. General skills and prerequisites may be
  unnecessary for certain students.

**Suggestions:** Based on the information we are presenting, pie charts will be the most suitable
presentation style. Therefore, the pie chart will remain as part of the analytic page to present the
progress. Additionally, a progress bar will be added to show how many credit points the student has
achieved. The components that are unnecessary will be removed such as the checkboxes and bar chart.
They will be replaced with useful information such as information of their course, how their WAM are
calculated and the requirement to pass their course and unit.

## Review: Pop-Up Design

**Overview:** The given example for pop-up design is very simple and generic. Based on the
requirements, this pop-up design will be implemented on the Discovery Page where students will be
able to click on the specific unit to get more information about it. Suggestions: Based on
information that the application is giving to the student, it is not necessary to include buttons.
The pop-up view will display information about the unit and a link will be provided to students if
they get more detailed information about the unit. This link will be the handbook link provided by
Deakin.

## Review: Timetable Page

**Overview:** The timetable page shows the course map along with the student’s progress so far into
their course. The course map is generated from a search and filter function according to faculty,
course, campus and so on. It is considered the “main” page when the student accesses CourseFlow.

**Pros:**

- The structure of the page allows students to see an overview of their progress. The icons with
  their colours represent different statuses (complete, in progress, etc.) so at a glance students
  can see how many units they have completed, and how many remaining.
- Connecting lines between the unit circles enable students to easily see prerequisite and
  corequisite units.
- Site focuses greatly on visual presentation and less text.

**Cons:**

- While the circles make it easy to visualize related units, students need to hover over each circle
  individually to see the unit name and code.
- Side search bar might not be “visually appealing” or is better placed in a different page/tab.
- The lines for prerequisite/corequisite units might clutter the course map. (e.g. If there were
  multiple related units or related units are far apart (Year 1 to Year 3), the lines might stretch
  too far, overlap with each other or go over/under the circles.)

**Suggestions:**

- Using a card/rectangular structure to represent the units instead of circle icons. This way, more
  information can be included such as unit name, unit code, status, core/elective and so on.
- To address the issues with the lines, either (i) keep the circles with lines as an alternate view,
  with different coloured lines or lines only appearing for related units when they are hovered
  over, or (ii) remove the use of the circles and lines, put prerequisite/corequisite information in
  the popup when a unit card is clicked.
- Restructure the side bar. Either use multiple tabs (search, unit information, etc), or put search
  on a separate page (prior to the course map). Review: Discovery Page Overview: The Discovery page
  allows students to discover units offered grouped according to the field of study. They can see
  units that are similar, with each linked circle representing a related unit. Clicking on the
  circles will bring up further information about that unit.

**Pros:**

- Units are grouped according to their field of study. It allows students to discover units offered
  that are in their field of interest, including those outside their course.
- Certain units have overlap between study areas can be shown between the groups.
- The connected circles allow students to visualize units that are related and
  prerequisite/corequisite units.

**Cons:**

- Certain units that have overlap between study areas, but not directly related may form an
  “isolated island” in the view. Steps should be taken to ensure they are not easy to overlook.
- Placement and grouping of some units may be difficult if they overlap with multiple fields of
  study (if such units exist).

**Suggestions:**

- Consider various ways to present the discovery view, whichever is the most user-friendly. Examples
  include groups of stars (in a galaxy theme), a map format with each field represented as a
  country, a puzzle with each field as a puzzle piece, etc..
