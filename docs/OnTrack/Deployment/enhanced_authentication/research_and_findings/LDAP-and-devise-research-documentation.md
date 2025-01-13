# Research Documentation: LDAP Server & Devise

[Introduction](#introduction)

[Research Aims](#research-aims)

[Research Findings](#research-findings)

- [LDAP Servers](#ldap-servers)
- [Devise](#devise)
- [Devise LDAP Authentication](#devise-ldap-authentication)
- [Angular (TypeScript) UI & Devise Integration](#angular-typescript-ui--devise-integration)
- [Devise LDAP Server Setup & Integration](#devise-ldap-server-setup--integration)

[Research Outcomes](#research-outcomes)

[Reference List](#reference-list)

[Links to Relevant Resources](#links-to-relevant-resources)

---

## Introduction

The current distribution of OnTrack supports numerous authentication methods, but all such methods
use external resources to provide the authentication services. As such, it has been proposed that a
**Lightweight Directory Access Protocol (LDAP) server** be created and added to the current Docker
container mix used for OnTrack. This would allow hosting and testing of the LDAP server’s
authentication capabilities. How to implement an LDAP server to suit these needs, however, is
uncertain.

Within this, it has been suggested that **Devise**, an authentication solution that can be
integrated with LDAP server, could be used as part of achieving this goal of creating an in-house
authentication methodology. There are also Devise modules that are already configured to work
seamlessly with an LDAP server setup. However, it is uncertain whether Devise is needed to achieve
the full goals of the Enhance Authentication team (as outlined on the team Trello Card) and whether
Devise can be used without its Ruby on Rails-based UI (as OnTrack makes use of Angular on the
frontend to communicate with the backend).

Hence, it is clear that there needs to be some research conducted into the LDAP servers and Devise
to determine the best course of action when integrating these features into the pre-established
OnTrack architecture.

---

## Research Aims

The aims of this research and its concurrent documentation are as follows:

1. Gain a better understanding of what an LDAP server is;
2. Understand how an LDAP server could be used to reach our in-house authentication goals;
3. Gain a better understanding of what Devise is and what services it provides;
4. Gain insight into how a Devise LDAP server would be set up and integrated into the current
   OnTrack architecture, including adding it to the Docker container mix;
5. Determine whether Devise’s use of a Ruby on Rails UI will impede the ability to utilise it, given
   that OnTrack’s frontend uses Angular and communicates with the backend via the Application
   Programming Interface (API); and
6. If (from _Research Aim 5_) it is determined that Devise **_can_** be used with the current
   OnTrack frontend and backend setup, investigate how it will be set up and integrated.

---

## Research Findings

### LDAP Servers

A Lightweight Directory Access Protocol server facilitates client-server queries of directories over
the TCP/IP Internet protocol [1]. Similar to a database, the directories stored by the LDAP database
contain attribute-based information which can be queried by clients and responded to by the server
to achieve information-checking goals [1]. In the case of the OnTrack system, the LDAP server would
store relevant user details which would be queried by clients in order to approve or deny the
specific user access to the OnTrack systems – providing an authentication system.

The LDAP protocol allows for the following operations to be conducted within the database/directory
accessed by the LDAP server [2]:

- Add: Adds new files and/or entries;
- Delete: Removes files and/or entries;
- Search: Query the files and entries;
- Compare: Determine the similarities and differences between files; and
- Modify: alter an existing file/entry.

All of these operations are essential to adding the appropriate user details which are used during
the OnTrack authentication process. Additionally, the lightweight nature of LDAP and directories
results in the ability to handle high volumes of traffic and quick response times to client-server
queries [1] [2]. These two elements of LDAP servers make it ideal for the OnTrack authentication
process, especially due to the high number of users of the service.

Hence, an LDAP server could be utilised to achieve our in-house authentication goals through:

- Utilising the current user information database or creating a new database purely for
  authentication queries.
- Coding the LDAP server to respond to client requests for access to the systems by accessing the
  user information database and cross-referencing the details provided by the client and those
  stored in the database, giving appropriate responses based on whether the data matches (success –
  the user has been authenticated and access can be provided) or whether the data is mismatched
  (failure – the user is unable to be authenticated and access is denied).
- The creation and use of the LDAP server results in the OnTrack authentication process becoming
  fully independent – meeting the primary authentication goal of in-house authentication.

### Devise

Devise is a module-based authentication solution created in the Ruby on Rails programming language
[3]. Taken directly from the [Devise GitHub Repo](https://github.com/heartcombo/devise), the 10
modules within Devise are outlined by the creators as follows:

> - Database Authenticatable: hashes and stores a password in the database to validate the
>   authenticity of a user while signing in. The authentication can be done both through POST
>   requests or HTTP Basic Authentication.
> - Omniauthable: adds OmniAuth (https://github.com/omniauth/omniauth) support.
> - Confirmable: sends emails with confirmation instructions and verifies whether an account is
>   already confirmed during sign in.
> - Recoverable: resets the user password and sends reset instructions.
> - Registerable: handles signing up users through a registration process, also allowing them to
>   edit and destroy their account.
> - Rememberable: manages generating and clearing a token for remembering the user from a saved
>   cookie.
> - Trackable: tracks sign in count, timestamps and IP address.
> - Timeoutable: expires sessions that have not been active in a specified period of time.
> - Validatable: provides validations of email and password. It's optional and can be customized, so
>   you're able to define your own validations.
> - Lockable: locks an account after a specified number of failed sign-in attempts. Can unlock via
>   email or after a specified time period.

> (Source: [Devise GitHub Repo](https://github.com/heartcombo/devise))

Hence, the Devise authentication solution provides a wholistic authentication service, one which
would be highly suitable to meet the OnTrack authentication goals.

### Devise LDAP Authentication

Devise can be used concurrently with LDAP servers to provide complete authentication solutions. In
fact, GitHub user Curtis Schiewek has already created an integrated Devise LDAP authentication
solution called
[Devise LDAP Authenticatable](https://github.com/cschiewek/devise_ldap_authenticatable). Devise LDAP
Authenticatable is a plugin which allows for the services of Devise to be used with a pre-existing
LDAP server (which we aim to create) and in line with the Devise framework [4]. However, due to this
plugin making use of the Ruby on Rails programming within Devise, it must first be determined if
Devise (and, hence, the Devise LDAP Authenticatable) can be used as part of the OnTrack
architecture.

Devise utilises Ruby on Rails (shortened to “Rails”) as the language framework for the web
applications user interface (UI) that use its authentication services [4]. As such, the credentials
entered into the Rails UI would be those which are authenticated by the Devise back-end
authentication service; the communication is Rails-to-Rails [4]. However, the OnTrack architecture
currently utilises the AngularJS programming language as the framework for the web application
front-end UI, making use of a Rails-based API to communicate with the backend. Additionally, there
is a current migration underway within the OnTrack architecture which will result in the change from
utilising AngularJS to having the UI programmed using Angular (TypesScript).

As such, a solution to the UI/backend communication based on AngularJS would be redundant due to
this language migration occuring, especially as the Devise LDAP server would likely not be ready to
implement until after the conclusion of this migration. Hence, the research conducted needs to
determine the following: whether it is possible to utilise the Rails-based authentication services
of Devise within an Angular (TypeScript) UI and Rails API architecture.

### Angular (TypeScript) UI & Devise Integration

From extensive research regarding _if_ and, if it can, _how_ Devise can be used in an application
architecture which has an Angular (TypeScript) UI, it was found that **there are solutions available
to facilitate this**.

There are numerous token-based authentication solutions available through GitHub which enable Devise
to communicate with a variety of programming languages which may be used within the architecture of
applications. Of relevance to our proposed implementation are the
[Devise Token Auth](https://github.com/lynndylanhurley/devise_token_auth) and
[Angular Token](https://github.com/neroniaky/angular-token) GitHub repositories. Devise Token Auth
implements a token-based method of authentication for use with Devise, its functionalities being
able to be harnessed through referencing the solution within the appropriate Gemfile [5]. This type
of token-based authentication can be implemented as part of our solution to meet the authentication
goals. More importantly, Angular Token works to facilitate communication between Angular
(TypeScript) solutions and the Rail-based services of Devise [6]. It seamlessly works in conjunction
with the Devise Token Auth service, with the Devise Token Auth repository even providing a demo of
these two solutions successfully integrated [5] [6].

Hence, to facilitate the communication between OnTrack’s Angular (TypeScript) UI and the Rails-based
services of Devise, it is suggested that these two token-based authentication solutions be
integrated within the application architecture as demonstrated in the ‘Setup’ sections of their
respective repositories.

### Devise LDAP Server Setup & Integration

The following briefly outline the steps that will be involved in setting up and implementing the
Devise LDAP server authentication solution as part of the OnTrack architecture:

- Run the [OpenLDAP Docker image](https://github.com/osixia/docker-openldap) and follow the
  instructions for setting up a new LDAP server. OpenLDAP has been selected due to it being
  open-source, reliable, and also its being used as part of the Devise LDAP Authenticatable solution
  which we will also be using. Additionally, using a Docker image of an OpenLDAP server which allows
  for the creation of new LDAP servers suited to the needs of the company will allow for development
  to begin with a solid base and make adding the authentication server solution to the Docker
  container mix easier;
- Setup and perform an initial configuration of [Devise](https://github.com/heartcombo/devise)
  through adding it to the appropriate Gemfile and following the instructions detailed in the
  [Devise README.md](https://github.com/heartcombo/devise/blob/main/README.md) file;
- Setup and perform an initial configuration of
  [Devise LDAP Authenticatable](https://github.com/cschiewek/devise_ldap_authenticatable) through
  following the processes outlined in the
  [Devise LDAP Authenticatable README.md](https://github.com/cschiewek/devise_ldap_authenticatable/blob/default/README.md)
  file;
- Initially configure and integrate both the
  [Devise Token Auth](https://github.com/lynndylanhurley/devise_token_auth) and
  [Angular Token](https://github.com/neroniaky/angular-token) token-based solutions by following the
  installation and configuration information detailed in their respective README.md files: found
  [here](https://github.com/lynndylanhurley/devise_token_auth/blob/master/README.md) and
  [here](https://github.com/neroniaky/angular-token/blob/master/README.md);
- Finish the configuration of these elements by populating them with real data and integrating the
  elements into the OnTrack architecture, ensuring that they all communicate correctly and respond
  as expected.

As the OpenLDAP server created is drawn from a Docker Image, it is thought that this will simplify
the process of adding the finished server to the Docker container mix used for the OnTrack
deployment.

Again, this is a very high-level view of the expected setup and integration flow of how the Devise
LDAP server will be developed. As upskilling surrounding these technologies and their respective
code/languages is conducted, this methodology may be made redundant or be found to have missing
items. However, this will be the current basis of how development will occur for now.

---

## Research Outcomes

Through an examination of the Research Findings documented, understandings of what LDAP servers are
and how they work; what Devise is and what services it offers; and how LDAP and Devise can be
harnessed to provide an authentication solution have been vastly improved.

Most importantly, from this conducted research, it has been found that **Devise can be used as part
of the OnTrack in-house authentication solution**. As previously detailed, two token-based services
work to facilitate communication between OnTrack’s Angular UI and Devise’s Rails-based and, as such,
integrating these services will allow for the use of Devise within our authentication solution.

A high-level overview of how the Devise LDAP server solution will be developed has also been given.
However, as mentioned, future upskilling into the practical elements of these technologies may
result in the actual implementation methodologies being found to be much different. However, as
determining whether Devise can be used _at all_ was deemed to be the most important aspect of this
research (as it impacts all other aspects of developing the in-house authentication solution), such
a broad overview will be sufficient for now.

---

## Reference List

[1] L.E.P. Malère (2007, Mar. 18). What's LDAP? [Webpage]. Available:
https://tldp.org/HOWTO/LDAP-HOWTO/whatisldap.html

[2] Okta (n.d.). What Is LDAP & How Does It Work? [Webpage]. Available:
https://www.okta.com/identity-101/what-is-ldap/

[3] heartcombo (n.d.) Devise [GitHub repository]. Available: https://github.com/heartcombo/devise

[4] C. Schiewek (2020, Jul. 24). Devise LDAP Authenticatable [GitHub repository]. Available:
https://github.com/cschiewek/devise_ldap_authenticatable

[5] L. D. Hurley (n.d.). Devise Token Auth [GitHub repository]. Available:
https://github.com/lynndylanhurley/devise_token_auth

[6] J. P. Riethmacher (n.d). Angular Token [GitHub repository]. Available:
https://github.com/neroniaky/angular-token

---

## Links to Relevant Resources

- [Trello card containing aims for the Enhance Authentication team](https://trello.com/c/WeElomXn/6-enhance-authentication)
- [GitHub repo for Devise](https://github.com/heartcombo/devise)
- [GitHub repo for a Devise LDAP authentication module](https://github.com/cschiewek/devise_ldap_authenticatable)
- [GitHub repo for Devise Token authentication solution](https://github.com/lynndylanhurley/devise_token_auth)
- [GitHub repo for Angular UI token integration with Devise (to be used in conjunction with Devise Token Auth)](https://github.com/neroniaky/angular-token)
- [GitHub version of Docker image which can be used to create an OpenLDAP server](https://github.com/osixia/docker-openldap)
