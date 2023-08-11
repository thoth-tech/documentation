# Spike Outcomes

==================

**Spike:** 1

**Title:** Understanding the SCORM 2004 API structure

**Author:** Daniel Maddern, <maddernd@deakin.edu.au>

## Goals & Deliverables

After several issues with the NUMBAS integration and having to move to SCORM 2004, this Spike is
intended to revise the updated functionality of SCORM 2004 and how it works, how the functions can
be used in the current project.

## Technologies Tools and Resources used

List of information needed by someone trying to reproduce this work

- Internet Browser; Google Chroame, FireFox, Safari
- Programming Languages:
- Angular/TypeScript/JavaScript
- Programming Libraries:
- PipWerks SCORM
- Text Editor: VsCode
- Terminal

## Tasks undertaken

Key Tasks

- Review the key functions available in SCORM 2004
  (<https://scorm.com/scorm-explained/technical-scorm/run-time/run-time-reference/>)

- See how each function could be applied to NUMBAS

- Test the functionality out in the PoC

## What we found out

There are some big changes between SCORM 1.1 and 2004, the key methods used in 2004 are:

- Initialize( “” ) : bool – Begins a communication session with the LMS.

- Terminate( “” ) : bool – Ends a communication session with the LMS.

- GetValue( element : CMIElement ) : string – Retrieves a value from the LMS.

- SetValue( element : CMIElement, value : string) : string – Saves a value to the LMS.

- Commit( “” ) : bool – Indicates to the LMS that all data should be persisted (not required).

- GetLastError() : CMIErrorCode – Returns the error code that resulted from the last API call.

- GetErrorString( errorCode : CMIErrorCode ) : string – Returns a short string describing the
  specified error code.

- GetDiagnostic( errorCode : CMIErrorCode ) : string – Returns detailed information about the last
  error that occurred.

They Key Data Model elements for our use are:

- cmi.entry (ab_initio, resume, “”, RO) Asserts whether the learner has previously accessed the SCO

- cmi.exit (timeout, suspend, logout, normal, “”, WO) Indicates how or why the learner left the SCO

- cmi.learner_id (long_identifier_type (SPM: 4000), RO) Identifies the learner on behalf of whom the
  SCO was launched

- cmi.mode (“browse”, “normal”, “review”, RO) Identifies one of three possible modes in which the
  SCO may be presented to the learner

- cmi.score.scaled (real (10,7) range (-1..1), RW) Number that reflects the performance of the
  learner

- cmi.score.raw (real (10,7), RW) Number that reflects the performance of the learner relative to
  the range bounded by the values of min and max

- cmi.score.min (real (10,7), RW) Minimum value in the range for the raw score

- cmi.score.max (real (10,7), RW) Maximum value in the range for the raw score

- cmi.suspend_data (characterstring (SPM: 64000), RW) Provides space to store and retrieve data
  between learner sessions

- cmi.total_time (timeinterval (second,10,2), RO) Sum of all of the learner’s session times
  accumulated in the current learner attempt

- cmi.success_status (“passed”, “failed”, “unknown”, RW) Indicates whether the learner has mastered
  the SCO

- cmi.session_time (time interval (second,10,2), WO) Amount of time that the learner has spent in
  the current learner session for this SCO

By making use of the flags in the data model we can implement a resume test functionality, this will
be done by saving the suspend data json string in the DB.

A new end point will need to be created to store the suspend data json string, as well as the
Attempt number, status and isnew flag.

## Recommendations

It is reccomended to build out the new endpoint needed in the PoC and then to implement a resume
test functionality there

prior to starting the build in Ontrack. The new Endpoint would be in addition to the current Numbas
API that streams the test.

It would need a get and put functionlaity and would be making use of cmi.mode, cmi.suspend_data
during both Commit and Terminate functions.

We also need to move the intitaliztion of the Window object outside of the launch test in the front
end Angular code.
