# \*\*Spike Outcomes

==================

**Spike:** 1

**Title:** Video Integration using Panopto

**Author:** Cao Quoc Vi, qvcao@deakin.edu.au

## Goals / Deliverables

To investigate the feasibility, challenges, and requirements for integrating Panopto's Integration APIs into our existing project.
- SwaggerUI: https://demo.hosted.panopto.com/Panopto/api/docs/index.html 
- Request Demo: https://www.panopto.com/features/integration/integration-apis/ 

Panopto offers an array of integration features which provides video content management, live webcasting, video analytics, and many other capabilities. The APIs they provide allow seamless integration of these features into our project.
## Technologies, Tools, and Resources used

List of information needed by someone trying to reproduce this work\

- Internet Browser; Google Chrome, Firefox, Safari, Microsoft Edge.
- Programming Languages: Ruby
- Supporting Applications: Docker, VMWare.
- Text-based format: Json
- Code Editor: VsCode
- Terminals: zsh, bash.
- Repository storage: GitHub.

## Tasks undertaken

1.	Documentation Deep Dive:
-	Reviewed the entire Panopto API documentation.
-	Identified key areas relevant to our project's needs and objectives.

2.	API Authentication:
-	Set up a sandbox environment to simulate and test the OAuth 2.0 authentication process.
-	Tested multiple OAuth flows to determine the most suitable for our integration needs.

3.	Endpoint Testing:
-	Used tools like [Postman](https://www.postman.com/) to manually test key API endpoints.
-	Validated response data structure, error messages, and typical response times.

## What we found out (per APIs)

1.	Authentication:
-	Identify the specific OAuth flow most suited for our project (e.g., client credentials, authorization code).
-	Determine any specific requirements or configurations needed in the project to support this authentication.
-	Understand the OAuth 2.0 protocol that Panopto uses for authentication.

2.	Data Synchronization:
-	Understand how Panopto’s User Provisioning, Group Provisioning, and Course Provisioning works.
-	Determine the synchronization frequency (real-time vs scheduled).
-	Identify the best method to integrate with our project's existing user management system (if any).

3.	Video Content Management:
-	Investigate the process of uploading videos, editing them, and managing folders.
-	Understand the best practices to organize the videos in Panopto (e.g., per user, per course).

4.	Embedding and Playback:
-	Understand the embedding capabilities, including responsive design considerations.
-	Determine if Panopto's player is compatible with our project's frontend technologies (Angular 15 compatible).
-	Investigate analytics that can be retrieved from video playback, e.g., viewer engagement.
5.	Live Webcasting:
-	If live streaming is a required feature, understand the capabilities provided by Panopto.
-	Determine any additional infrastructure or tools needed on our end.

6.	Error Handling and Monitoring:
-	Understand what kind of errors might be thrown by the API.
-	Decide on an error-handling strategy for integration.
-	Investigate any logging or monitoring capabilities provided by Panopto's API.

7.	Performance and Scalability:
-	Check any rate limits imposed by Panopto's API.
-	Determine if these limits align with our project's expected load and scalability needs.



## Open issues/risks

- Integration Dependencies: There are potential dependencies on other third-party tools or systems for full integration, which were not thoroughly explored during the spike. Additional integration challenges or costs might arise when connecting Panopto with other platforms (High risk of causing errors).
- Authentication Challenges: While testing, we encountered occasional [issues with the OAuth 2.0 flow](https://learn.microsoft.com/en-us/connectors/custom-connectors/troubleshoot-oauth2), specifically in token refresh scenarios. Frequent token expirations or authentication challenges might hinder user experience or increase development time. 


## Conclusion

At the end of the spike, we should have a clearer picture of the work involved in integrating Panopto's Integration APIs with our project. We'll be able to make informed decisions about whether to proceed with the integration, any architectural changes required, and how best to implement those changes.