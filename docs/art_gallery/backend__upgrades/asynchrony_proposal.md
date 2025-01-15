# Proposal: Leveraging Asynchrony in our C# API for Improved Performance and Responsiveness into the Future

Author: Chloe Hulme

## Objective

The objective of this proposal is to outline the concept of asynchrony in an API, highlight the
benefits of implementing asynchrony in our C# based API, and provide guidelines along with sample
code for effectively incorporating asynchrony into our API design this trimester.

### Introduction to Asynchrony in APIs

Asynchrony in APIs refers to the ability to perform operations concurrently without blocking the
main thread of execution. Traditionally, APIs perform tasks synchronously, meaning they execute one
operation at a time and wait for each operation to complete before moving to the next one. Whereas,
asynchronous APIs allow multiple operations to be executed in parallel, which significantly enhances
performance and responsiveness. Particularly across larger data sets.

### Benefits of Implementing Asynchrony in our API

Implementing asynchrony in our API offers several advantages:

- Improved responsiveness: Asynchrony will enable our application to remain responsive to user
  interactions even while performing resource-intensive operations such as network requests and
  database queries.

- Enhanced performance: By allowing multiple tasks to run concurrently, we can take advantage of
  multi-core processors, leading to improved throughput and reduced execution times.

- Scalability: Asynchronous APIs are particularly beneficial in scenarios with a large number of
  users. They enable the API to handle more simultaneous requests without causing bottlenecks. We
  can secure the future performance of our API by implementing asynchrony, so that we are prepared
  to handle larger volumes of traffic once we have deployed.

- Efficient resource utilization: Asynchronous operations can release system resources while waiting
  for tasks to complete, allowing the system to utilize these resources for other tasks.

- Better user experience: Users will experience quicker response times and smoother interactions
  with our applications if we utilize asynchronous APIs, enhancing overall user satisfaction once we
  inevitably deploy.

### Guidelines for Implementing Asynchrony

When implementing asynchrony in a C# API, reviewing the following guidelines will ensure efficient
and reliable design:

1. Identify blocking operations: Identify operations that could potentially block the main thread.
   In our case this is primarily database queries.

2. Use the `async` and `await` keywords: Utilize the `async` and `await` keywords to mark methods as
   asynchronous and to await the completion of asynchronous tasks, respectively. This allows the
   main thread to continue processing other tasks while waiting for the asynchronous task to finish.

3. Return `Task` or `Task<T>`: Modify the method signatures to return `Task` or `Task<T>` types to
   indicate that the method is asynchronous and returns a task representing the operation.

4. Avoid mixing synchronous and asynchronous code: Try to keep your codebase consistent by avoiding
   mixing synchronous and asynchronous code within the same method, as it can lead to confusion and
   potential deadlocks. We will keep our ADO.NET implementation synchronous, as our Repository
   Pattern (RP) implementation is more favourable. We will hence implement asynchrony in our RP
   implementation, replacing the synchronous database queries.

5. Handle errors gracefully: Implement error handling mechanisms, including try-catch blocks or
   async-specific error handling, to manage exceptions that might occur during asynchronous
   operations.

### Sample Code

Here's a simple example of how to implement an asynchronous API method in C#:

```csharp
public class BasicAPIService
{
    public async Task<string> GetDataAsync()
    {
        // Simulate an asynchronous operation (e.g., fetching data from a remote server)
        await Task.Delay(2000); // Simulating a 2 second delay
        return "Data fetched successfully!";
    }
}
```

## Conclusion

Incorporating asynchrony into our API will lead to substantial improvements in performance,
responsiveness, and overall user experience. We are able to future-proof our API in terms of
handling many user requests, and queries to large data setsas our database grows post-deployment. By
following the guidelines outlined in this proposal, we can leverage asynchrony to handle
resource-intensive tasks while maintaining application responsiveness. This will have lasting
benefits for our company and product into the future.
