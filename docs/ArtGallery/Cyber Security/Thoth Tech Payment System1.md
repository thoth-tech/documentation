# SIT374

Payment System For Art Gallery

There are multiple risk when adding a payment system to any application. From having data breaches
and all the sensitive information that has been stored on the data base has be leaked, now all your
customers data has been compromised. Data can be breach with multiple methods from Malware attacks,
Man-in-the-middle and cross-site scripting. Therefore when adding a payment system into the Art
Gallery there are a few things to keep in mind, what is the best possible method in protecting the
customers data, will the company have enough resources and time to implement their own payment
system and keep it up to date.

To create a payment system is a difficult and long process, to create a new payment system a user
will need to understand the security aspects and the data that will be passed through he payment
system. This will then mean the user will need to use secure coding practices the ensure a high
level of security. To further the protection of customers data the team will need to add encryption
on the data, adding more process and time. To ensure that the payment system is secure it will need
pass compliance of all standards within such as PCI-DSS (Payment Card Industry Data Security
Standard) and GDPR (General Data Protection Regulation). Then the developers will need to implement
the payment system with third-party services, banks and payment gateways, therefore, a good
understanding of API's will be needed.

Therefore, I believe that the best option for the art gallery payment system would been to use an
existing payment system.

An existing payment such as PayPal.

To use Paypal for the web page there are best practices that Paypal recommends to integrate for most
secure operation.

Secure communication

PayPal uses SSL/TLS protocols, therefore they suggest for you follow a few key steps.

1. Discontinue use of the VeriSign G2 Root Certificate

   Implement newer and more secure 2048-bit Root Certificates.

2. Upgrade to SHA-256 SSL Certificates SHA-1 is being threatened due to the increases of computing
   power, therefore SHA-256 signing algorithm should be used.

3. Use TLS version 1.2 or higher

   Services should TLS 1.2 or higher for HTTPS connections, as older versions have know
   vulnerabilities.

4. Let the protocol negotiate the highest version

   Allow the protocol to negotiate with the highest version automatically and do not hard code the
   integration to a specific version.

5. Do not hard code specific ciphers

   As ciphers are always advancing and becoming more stronger it is best not to hard code specific
   ciphers as Paypal may disable certain ciphers when exploited

6. Allow Perfect Forward Secrecy

   Use PFS with the integration, allowing for past and future keys from affecting confidentiality.

7. Stay vigilant

   Ensure that you keep up to date with integration as newer and more secure methods are being
   created. Also ensure that you try avoid hard coding anything as this will ensure easier
   adjustment later.

Secure Applications

Ensure that the application does not use Web View to display Paypal, test integration so that the
user experience is acceptable.

<https://developer.paypal.com/api/rest/reference/info-security-guidelines/>

<https://developer.paypal.com/api/rest/reference/policiesandguidelines/>\\

Useful Wesbite to Review:

Below are useful guides for reviewing and implementing payment API to the Art Gallery. It would be
useful to review all links and do more research for those who will be creating the payment system.

<https://developer.squareup.com/au/en/online-payment-apis>

<https://stripe.com/docs/api>

<https://developers.google.com/pay/api/web/overview>

<https://rapidapi.com/blog/top-payment-apis-manage-your-payments/>

For those who are wanting to get a start and overview of payment API view this link.

<https://developer.squareup.com/reference/sdks/web/payments/card-payment>
