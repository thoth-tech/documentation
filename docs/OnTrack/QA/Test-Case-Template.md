## Test Case Template

| Test Case ID | Test Case | Automated (Y/N) | Pre-Condition | Test Data | Steps | EXPECTED RESULT |
| ------------ | --------- | --------------- | ------------- | --------- | ----- | --------------- |
|              |           |                 |               |           |       |                 |
|              |           |                 |               |           |       |                 |

### Example

| Test Case ID  | Test Case                     | Automated (Y/N) | Pre-Condition                  | Test Data                                                             | Steps                              | EXPECTED RESULT                                |
| ------------- | ----------------------------- | --------------- | ------------------------------ | --------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------- |
| Test_Case_001 | Test User can log in          | N               | User A must exist in system    | User A Username:test1, User A Password:Password123                    | 1. Open OnTack login Page          | Username and Password field should be present  |
|               |                               |                 |                                |                                                                       | 2.Enter Username for User A        | Username should enter successfully             |
|               |                               |                 |                                |                                                                       | 3.Enter Password for User A        | Password should enter successfully             |
|               |                               |                 |                                |                                                                       | 4. Select Login                    | User A should be successfully logged in        |
| Test_Case_002 | Administrator User can log in | N               | `admin_1` must exist in system | Administrator Username: `admin1`, Administrator Password: Password123 | 1. Open OnTack login Page          | Username and Password field should be present  |
|               |                               |                 |                                |                                                                       | 2.Enter Username for Administrator | Username should enter successfully             |
|               |                               |                 |                                |                                                                       | 3.Enter Password for Administrator | Password should enter successfully             |
|               |                               |                 |                                |                                                                       | 4. Select Login                    | Administrator should be successfully logged in |
