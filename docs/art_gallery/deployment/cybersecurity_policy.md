## GCP Security Policy

**Author:** Ayan Masood, amasood@deakin.edu.au

**Introduction**

This document will go over the security policy for management of user access on Google Cloud
Platform (GCP). It focuses on minimizing cybersecurity risks in regards to application development
and deployment. The key aim of this report is to help keep the collaboration space secure and reduce
the risk of human error relating to accidental changes to the application.

**Setting Up User Credentials**

Service accounts will need to be created for every person working on the application on GCP. These
accounts have the ability for the admin to assign roles to them which limits access and certain
capabilities to the admin’s choosing. For example, only making certain parts of the project viewable
only, allowing the user to edit the application itself, etc.

**Account Key**

Each service account will require an account key. This key allows access to the account thus,
keeping it secure is extremely important. The account key and its details are inside a JSON file
which the account holder has to present in order to gain access to their predefined roles and make
changes. These keys will have to be rotated after a particular period; this step involves deleting
the previous key and generating a new one for every account to ensure it is not being misused or
another person has gained access to the previous credentials.

**Conclusion**

Service accounts and keys provide a secure and controlled approach for access of GCP resources
without sharing/storing of personal credentials. This approach is best suited for the management of
access and control of limitation on users working on the development component of the application
