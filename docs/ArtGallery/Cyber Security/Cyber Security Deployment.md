# SIT378

ART GALLERY Dominic Ryzner

Cyber Security Strategies for Deployment

SSL Certificate

When deploying a website/app is important that we enable SSL with our product this will ensure that
all users connecting to the website will have their information encrypted along with any username or
passwords that they create with us. Ensuring that a basic level of security to deter an novice
malicious attackers. This will also allow us to work and fully implement and ideas or additions to
the application. (This step depends on the Host that is used to deploy the website, most hosts have
SSL automatically enabled)

Multi-level Login Security

Depending on they method of Deployment its crucial for the team to ensure the use of a strong
password along with periodically changing the password for root access. This can be managed via a
password manager such as 1Password and NordPass which have a application that creates strong
passwords and automatically changing password with a set time.

Another Important method that should be implemented to benefit the users is the forcing of strong
passwords, incorporating a (A-z)(0-9) and Special symbols and characters. Along with the addition of
multi factor authentication

Back-up Schedule

A critical implementation that should be made in terms of maintaining the application is the have
constant and safe backups. This should be done via an automated backup software. In a scenario where
a server fails or become corrupt there is a backup of the application and all the data that is
stored(if any). This also goes for any of the data the is gathered by the application, all data
should be securely and correctly stored, so that no information about art work and sales would be
lost.

Routine Updates

Once the website is deployed it is important to run constant software updates that may patch
vulnerabilities or bugs within the application. This is important in context with the framework that
the web application is being run with, ensuring that it is up to date will keep the website secure.

Web Application Firewall

A Web Application Firewall(WAF) is a great addition that can be added to a application when being
deployed. Filtering and Monitoring traffic between the web app and the internet, setting parameters
for what connection is to be allowed and others blocked. Helping to protect against Cross-site
scripting and SQL injection.

Testing

While the application is being run on Docker for creation purposed it would be great idea to create
a Live testing site to ensure that when the product is deployed there are no unexpected results that
arise.

Removing of Applications

After deploying the web app and having run over a period of time, it could be beneficial to remove
applications within the app that are being under utilized, this will allow for a faster working
application better UI along with less surface area for an attack.

<https://www.linkedin.com/advice/0/how-do-you-secure-your-web-applications-before>

<https://seodesignchicago.com/web-design-blog/the-5-steps-of-website-deployment/>

<https://www.hostinger.com/tutorials/web-hosting-security>

<https://themeisle.com/blog/how-to-secure-a-website/#login>
