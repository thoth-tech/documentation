# Authentication Evaluation

## Review of Current and Proposed Authentication Solutions

[Overview](#overview)

[The State of the Current Authentication Mechanisms](#the-state-of-the-current-authentication-mechanisms)

- [The Current Authentication Setup](#the-current-authentication-setup)
- [Risks and Issues](#risks-and-issues)

[Proposed Authentication Enhancements](#proposed-authentication-enhancements)

- [The Proposed Authentication Mechanism](#the-proposed-authentication-mechanism)
- [Advancements of the Previous Authentication Mechanisms and how it Addresses Issues of the Old Method](#advancements-of-the-previous-authentication-mechanisms-and-how-it-addresses-issues-of-the-old-method)
- [Potential Issues and Concerns that must be Considered](#potential-issues-and-concerns-that-must-be-considered)

## Overview

The purpose of this documentation is to formally review the current authentication mechanisms which
are in place within the OnTrack architecture and compare this to the proposed authentication
solution in development by the Deployment project team (Enhance Authentication). Within this
evaluation, the current authentication setup and mechanisms will be described, and then analysed in
terms of the risks and issues encompassed within such a setup. The new authentication solution which
is proposed to be developed and implemented will then be described, analysing how this new system
aims to advance the authentication capabilities of its predecessor and how it will work to mitigate
the risks and issues of the current system which it will replace. Additionally, the issues and
concerns which may develop as a result of the implementation of the proposed authentication system
will be examined, including the regulatory and compliance considerations which must be addressed
during the development of the new system.

## The State of the Current Authentication Mechanisms

### The Current Authentication Setup

Currently, the OnTrack system relies upon the authentication provided by its client, Deakin
University. The authentication mechanism utilised by Deakin University is a Single Sign On (SSO)
system which utilises Multi-Factor Authentication (MFA) technology through _Duo Security_. As part
of the SSO process, the user is prompted to enter their username and password to log in to the
Deakin SSO system and, as such, to allow access to OnTrack. Once the username and password have been
verified, the MFA system requires the user to confirm that they are the rightful owner of the
account through responding to a “login request” sent to their allocated personal device. Once this
test is passed, access is granted to the OnTrack system. In the case where the user is already
logged in to Deakin SSO, has been accessing other Deakin services and then chooses to visit the
OnTrack site, they are automatically logged in through the SSO functionality. Hence, the current
authentication system is reliant upon third-party authentication, whose MFA capabilities have been
outsourced (to Duo Security).

### Risks and Issues

An analysis of the current authentication system presented the following issues and risks:

As OnTrack relies upon Deakin SSO services, it is assumed that both the login and logout
functionalities would be handled by this service. However, even after a user has logged out Deakin
SSO and (supposedly) all concurrent accounts accessed through the single login, a user’s OnTrack
account remains logged in and accessible for a period of days (perhaps weeks). This security flaw
means that the token used to access the OnTrack account first through the Deakin SSO technology
continues to be stored within the user’s browser for an extended time period, allowing the OnTrack
account to be repeatedly accessed even when the user is not currently signed in to Deakin SSO. For
cases where the user is on a shared computer, this is a high risk for unfiltered access into the
user’s account by other actors. Currently, the only method to properly sign out of the OnTrack
system is for a user to select their avatar icon and, from the displayed drop-down menu, to choose
“sign out” from there. This is often overlooked, especially as it would be assumed that the logout
process would be handled by Deakin SSO services. Even when the user does follow the OnTrack process
to sign out of the account, the user is redirected to a broken link where the page cannot be
displayed – the token is cleared from the browser. Although this does solve the issue at hand, it is
not an ideal user experience

A second risk is that this current method of authentication relies on third-party and outsourced
authentication technologies. Deakin SSO and MFA is facilitated by Duo Security, although these
technologies may be highly efficient, secure and reliable, such a reliance on third-party software
means that the backend workings of this software is not able to be accessed and understood by the
OnTrack team. Additionally, use of third-party software requires additional sharing, transmission,
and storage of user information on systems which are not able to be managed by the OnTrack team. In
the case of a security breach, the OnTrack team are also forced to rely upon the providers of these
technologies to:

- Report that the breach happened
- Report which details and systems have been compromised
- Fix the issues which lead to the breach
- Secure the system and continue normal business operations

Having to rely upon other vendors for these processes removes the control and information
transparency OnTrack has regarding the scale and nature of security breaches. This leaves the
company “in the dark” about what has occurred and is frustrating, especially when there are capable
members within the company who would be able to respond to such events, perhaps more efficiently
than these vendors.

Hence, from these risks and issues associated with the current OnTrack authentication mechanisms, it
is clear why new technologies and methods of authentication have been proposed to be developed and
implemented.

## Proposed Authentication Enhancements

This section will detail the proposed authentication elements to be added to the OnTrack
architecture in order to improve the state of the authentication mechanisms and to alleviate some of
the risks and errors in the described current setup.

### The Proposed Authentication Mechanism

The proposed solution to be implemented by the Enhance Authentication team has several elements, as
follows:

- An extension of the current OnTrack API, adding functionality to facilitate user management
- Password management features, for users and admin manipulation. Users can either send a request to
  the admin to authorise the password or do so themselves. It is important that, as part of this
  feature, the admin is able to manipulate the password (i.e. send the request for a password
  change). The password is never transferred in plaintext at any time during this process.
- A Devise LDAP server option which handles the authentication processes for OnTrack, allowing the
  authentication to be performed fully “in-house” rather than outsourced to other authentication
  mechanisms

### Advancements of the Previous Authentication Mechanisms and how it Addresses Issues of the Old Method

From the proposed elements to be added to the authentication mechanisms, the following advancements
and addressing of issues relevant to the current system are achieved:

| Element                                  | Advancement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Password Management                 | Allows for users to change passwords themselves to something more secure and/or easier to remember (though it is important that proper password policies, practices and recommendations are followed), rather than being forced to use the same password set for their Deakin account. By changing the password for OnTrack, this follows recommended password procedures which suggests that passwords should not be reused across various accounts                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| User Password Management                 | Allows users to request a password change from the administrator in the event that they have forgotten their password and cannot gain access to their account. This is a useful feature for account management and access, ensuring that users are able to regain access to their account swiftly and easily                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Additional API User Management Functions | Improves upon the current authentication setup through allowing more user qualities to be managed independently by the admins and, for some features, by the users themselves. Overall, this adds additional flexibility and ease of change for certain parameters or information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| LDAP Devise Server                       | Allows the OnTrack system to have its own in-house authentication mechanisms with complete control over how it is set up, integrated, and deployed. As the current authentication mechanism relies on third-party “Single Sign On” (SSO) authentication protocols provided by Deakin University, OnTrack is limited to utilising the mechanisms provided by this third-party system. Developing an in-house authentication solution using LDAP and Devise results in the OnTrack architecture being fully independent, and allows for additional sign-in options to be added in future (for example, using a Google Account to sign in)                                                                                                                                                                                                                                                                                                                                          |
| LDAP Devise Server                       | Allows for the authentication systems to be fully managed by the OnTrack team, allowing for complete control over the code and features included as part of the authentication processes. This is an improvement as reliance on third-party software or processes in any circumstance increase the difficulty in understanding how the systems operate and what has occurred in the instance of an error or breach. Having an independent authentication solution streamlines the control and medication of the services provided by it, allowing for access and control to be granted solely to the OnTrack team on the backend of the project. In this way, the LDAP and Devise features used can be customised to suit the specific (and changing) needs of the OnTrack system, using only features that are necessary and relevant to the OnTrack system and user authentication needs, rather than accepting all services provided by third-party authentication mechanisms |
| LDAP Devise Server                       | As stated, the OnTrack team will be granted full control over the authentication systems and elements of the OnTrack software. This will solve the issue of the redirection to the broken Deakin SSO link as explored in previous sections, as the team will be able to control the flow towards other pages after the successful signing out of a user                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Potential Issues and Concerns that must be Considered

Within the development and deployment phases related to implementing these proposed authentication
mechanisms, the following must be closely considered and addressed:

- It must be ensured that, while system admins have the ability to grant access to change the
  passwords, that they cannot directly access the passwords themselves. There must be a clear
  separation of information, and passwords must have secure encryption applied to them
- Password change requests must be validated to ensure that they are coming from the user, and not
  someone pretending to be the user in order to gain control over the account. A security mechanism
  such as requiring the requestee’s date of birth, or an answer to a security question set by the
  user, is suggested. Additionally, sending an automatic email or text to inform the user of the
  request for a change of password is also recommended
- The developed authentication system, including how user information is stored, transmitted, and
  later deleted (which includes considerations of retention laws) must adhere to the appropriate
  laws and guidelines set out by the Australian Federal Government (including the _Privacy Act
  1988_), as well as other specifications mandated within each of the Australian states and
  territories
- Additionally, as OnTrack provides its services to international users (both in terms of
  international students studying online at Deakin and through providing its services to
  international clients), OnTrack’s authentication and information storage processes must also
  adhere to the laws enacted within the relevant international jurisdictions. For example, the data
  protection laws enacted within the GDPR must be adhered to by companies who provide services to
  citizens protected under the GDPR, regardless of where the company is situated (see
  https://gdpr-info.eu/)
- Finally, as all code used within the OnTrack architecture is open-source and publicly available
  through the Thoth Tech company site, how this effects the security of the proposed authentication
  system once developed and added to the site must be considered. Specifically, it must be examined
  whether public access to the internal workings of the authentication system increases the threat
  of a data breach as anyone can view the code, find vulnerabilities, and then create exploits to
  leverage such vulnerabilities. Hence, it is recommended that thorough vulnerability analysis is
  conducted on the code and systems to be included within the proposed authentication solutions
