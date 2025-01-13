# A Complete Guide: Migrating the Art Gallery API to .NET8

Author: Chloe Hulme

## Why migrate?

Migrating an existing API from .NET 7 to .NET 8 is an important step in keeping software up-to-date
and taking advantage of the latest improvements and features offered by the newer version of the
framework. .NET 8 is likely to continue to introduce significant performance optimizations, security
enhancements, and new functionalities, all of which can contribute to a more efficient and robust
API.

One of the main reasons why migration is important is to ensure ongoing support and compatibility
with the evolving technology landscape. As older versions of .NET become obsolete, they receive
fewer updates and bug fixes, leaving our API potentially vulnerable to security threats and lacking
in performance optimisations. By migrating to .NET 8, we can take advantage of the latest security
patches and leverage the framework's advancements to maintain a secure and high-performing API. Our
API will continue to reap the benefits of this in the long-term future, as it will be far more
streamlined for future cohorts to migrate our API to later releases of .NET, if we keep our API
consistently up to date in the short-term.

Additionally, upgrading to .NET 8 can also lead to improved productivity and code maintainability
for future cohots. With .NET 8 introducing features that streamline API development, enhance
debugging capabilities, and provide better tools for managing dependencies, we will be able to
build, test, and maintain our API more efficiently into the future. Ultimately, resulting in faster
development cycles and reduced maintenance overhead for future cohorts. Our API can be greatly
enhanced if we continue to leverage emerging technologies, and effectively future-proofed to remain
compatible with new technologies and platforms, if we take this proactive step to migrate to .NET8.

## What's new in .NET 8

- Improvements to JSON serialisation and deserialisation. This is impacting `System.Text.Json`.
- Introduction of Time abstraction, including timers with the new TimeProvider class and ITimer
  interface.
- UTF-8 improvements
- Default port for containers has changed from 80 to 8080
- The `System.Random` and `System.Security.Cryptography.RandomNumberGenerator` types introduce two
  new methods for working with randomness.
- Introduction of performance-focussed types:
  `FrozenDictionary<TKey,TValue>, FrozenSet<T>, System.Buffers.SearchValues<T>, System.Text.CompositeFormat, System.IO.Hashing.XxHash3 and System.IO.Hashing.XxHash128`
- Improvements to data validation
- New extension libraries
- Improved memory optimisation
- Improved support with reflections
- SDK changes
- NuGet changes regarding certificate verification
- Overall performance improvements

## Breaking Changes in .NET 8

Our API is built using .NET6 therefore we can expect to encouter some changes in .NET 8 that will
break our otherwise working implementatoin. Other changes might affect the way our app runs, and
will require some adjustments.

**Binary incompatible changes:** These are changes in .NET 8 that can cause our existing app to
behave incorrectly or even crash when it runs on .NET 8. This means that we might need to make some
changes to our app's code and then recompile it using the new .NET 8 tools.

**Source incompatible changes:** These are changes in .NET 8 that can cause our existing app's
source code to encounter problems when we try to compile it using .NET 8. This means that we might
need to modify some parts of our source code to make it compatible with the new .NET 8 version.

**Behavioral changes:** These are changes in .NET 8 that can cause our app, even if it's
successfully compiled with .NET 8, to behave differently than before when it runs. If this new
behaviour is not what we want, we will need to update our app's code to handle the changes correctly
and then recompile it with .NET 8.

So, before we migrate our app to .NET 8, we need to be aware of these possible issues and check if
any of the changes announced by Microsoft apply to our app. We can then make the necessary
adjustments and ensure a smooth transition to the updated version.

### ASP.NET Core

None that affect our product.

### Containers

Default port has changed from 80 to 8080.

### Core .NET libraries

None that affect our product.

### Globalisation

None that affect our product.

### SDK

None that affect our product.

### Packages

NuGet packages may be out of date, this will impact the API until rectified.

## Steps to Migrate

1. Check Compatibility: Eensure that the application's codebase, libraries, and dependencies are
   compatible with .NET 8.
2. Update SDK and Tooling: Ensure that the latest .NET SDK and tooling is installed locally.
3. Migrate to .NET 8: Update the project's target framework to .NET 8 in the `.csproj` file
4. Check Dependencies: Update NuGet packages to their latest compatible versions for .NET 8. Use the
   NuGet Package Manager or the Package Manager Console to update the packages.
5. Fix Breaking Changes: Address any breaking changes specific to .NET 8 in the codebase.
6. Verify and Test: Thoroughly test the application after the migration to ensure that it works as
   expected with the new version.
7. Optimise for New Features: Implement new features in .NET 8 that have been identified to improve
   out API.
8. Update Third-Party Libraries: Ensure that any third-party libraries used are compatible with
   .NET 8.

## Potential enhancements to implement in our API

- Data validation (`System.ComponentModel.DataAnnotations.AllowedValuesAttribute`,
  `System.ComponentModel.DataAnnotations.LengthAttribute`) to validate dates for artists and
  artworks, as well as a length attribute to help validate passwords.
- An updated hashing algorithm to explore for password security. We are currently using bearer token
  authentication.
- Improvements to the Reflection library

## Update: 9/8/23

Preliminary steps to migrate the API have been taken. The most current Docker image release for .NET
is .NET 8.1. The containers have been rebuilt accordingly and breaking changes affecting container
operation have been rectified. Prior to thorough testing, the API appears to have been successfully
migrated to .NET 8.1 stable preview. Further, and more thorough, testing will be conducted to
confirm this.
