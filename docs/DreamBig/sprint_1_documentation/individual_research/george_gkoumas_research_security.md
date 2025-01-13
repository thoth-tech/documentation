# Capstone A - Individual Research Contribution

## George Gkoumas (Senior) - 214278778

In the era we live in nothing is innocent and nothing can be left without layers of security. The
intended app, as it is going to be a prototype, it needs to embed security principles from the
start, to ensure some or all the following:

1. Source Code Encryption
2. Secure Data Transit
3. File level and DB Encryption
4. Use latest Cryptography techniques
5. High lvl Authentication
6. Secure the Backend
7. Minimize the storage of sensitive Data.
8. Penetration testing

More into those layers:

1. Mobile malware can track bugs and vulnerabilities within the source code. Also with reverse
   engineering, attackers can repack the code to include their rogue app and then upload the app in
   third party app stores using the name and reputation of Deakin University as bait and guarantee
   to the app security and cleanness and find that way victims, destroying the good reputation of
   the University and spoiling its name. Encrypting the source code can defend the application from
   this form of attack as it is unreadable.
2. Secure data transit with SSL has been covered by Harrison’s research.
3. When it comes to accessing confidential data, the mobile apps are designed in a way that the
   unstructured data is stored in the local file system and/or database within the device storage.
   However, the data in the sandbox are not effectively encrypted; hence, there is a major loophole
   for potential vulnerabilities. To ensure security in the sandbox environment, you should
   implement mobile app data encryption using SQLite Database Encryption Modules or practice
   file-level encryption across multiple platforms.
4. With cryptography algorithms like MD5 and SHA1 already broken we must use the modern encryption
   method like AES with 512/256 bit encryption or SHA-256 for hashing. Also, through time to
   re-evaluate the existing crypto algorithms in use the if needed to change them to the latest
   version/bit length.
5. The app needs to have from start, password policy with Complex alphanumeric passwords and 2FA as
   per Harisson’s research and existing Deakin 2FA method and SSO. Also, it should encourage the
   users to use biometric authentication and move away from the strong password only approach.
6. We will need to make sure the backend is secure from not only our app calls but also from the API
   in use, as vulnerabilities in the API for the platform being used, can cause breach into the
   backend. Strong focus to API authentication and transport mechanisms.
7. In case of sensitive data storage at least to by saved in data containers or key chain. Data that
   are not needed after a period, should get deleted.
8. Pen tests the app for vulnerabilities before it goes public. Periodically re do Pen Tests to
   ensure it stays in triple A condition.
