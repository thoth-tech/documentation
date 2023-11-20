
# Debugging Your Application in Visual Studio Code (VSCode)

## Introduction
As a student, you may encounter bugs or unexpected behavior in your code. Debugging is an essential skill to identify and fix issues in your applications. This guide will walk you through the process of using the debugging features in Visual Studio Code (VSCode).

## Prerequisites
Before you start debugging, make sure you have:
- Installed Visual Studio Code (VSCode)
- Created a project or opened an existing one in VSCode
- Written and saved your code
- Beginner to advanced programming knowledge

## How to Start the Debugger

![](images\runDebug.png)

1. Open your project in VSCode.

2. Make sure you have a JavaScript, Python, or other compatible file open. For debugging other languages, install debugger extensions from the VS Code marketplace.

3. Locate the left-hand sidebar in VSCode.

4. Look for the "Run and Debug" icon (usually represented by a bug icon). Click on it.

5. In the "Run and Debug" sidebar that appears on the left, click on the green play button ("Start Debugging") for your chosen runtime (e.g., Node.js, Python, etc.). VSCode will automatically create a launch configuration if one doesn't already exist.

6. If prompted, select the appropriate environment and configuration.

7. Your code will start running in debugging mode. VSCode will stop at the first breakpoint (if you have any).

## Creating Breakpoints
![](images\breakpoint.png)

Breakpoints are markers in your code where the debugger will pause execution, allowing you to inspect variables and step through your code.

1. In your code file, navigate to the line where you want to set a breakpoint.

2. Click in the gutter to the left of the line number. A red dot will appear, indicating the breakpoint.

3. You can add multiple breakpoints to different lines in your code.

## Creating Watches on Variables
Watches are expressions that you can monitor while debugging. They help you keep an eye on specific variables or values.

1. While debugging (paused at a breakpoint), locate the "Watches" section in the Debug sidebar on the left.

2. Click the "+ Add Expression" button.

3. Enter the variable or expression you want to watch (e.g., `ways`,  `n`).

4. As you step through your code, the value of the watched variable will be displayed in the "Watches" section, allowing you to track its changes.

## Debubg actions

![debug toolbar](images\toolbar.png)

| Action | Shortcut | Explanation |
| ------ | -------- | ------------| 
| Continue / Pause | `F5` | Continue: resumes normal execution upto the next breakpoint. | 
| Step over | `F10` | Executes the next method as single command without inspecting or following its component steps. |
| Stept into | `F11` | Enter the next method to follow its execution line by line |
| Step out | `Shift+F11` | When inside a method execute the remaining code and return to the earlier code execution.
| Restart | `Shift+F5` | Terminate the current program and start debugging again using the same configuration. 
| Stop | `Shift+F5` | Terminate the current program execution. 



## Debugging Your Application

![](images\watches.png)

1. Start your debugging session as mentioned earlier.

2. When the debugger reaches a breakpoint, you can:
   - Step over code: Executes the current line and moves to the next.
   - Step into code: If the current line calls a function, it will step into that function.
   - Step out of code: Steps out of the current function and back to the calling code.
   - Continue execution: Resumes code execution until the next breakpoint or the end of the program.

3. While debugging, inspect variables in the "Variables" section to understand their values at different points in your code.

4. Use the "Call Stack" section to understand the call hierarchy and navigate through function calls.

5. Use the watches you've created to monitor specific variables or expressions.

6. When you've identified and fixed the issue, you can either stop debugging or let the program continue to its end.

## Conclusion
Debugging in Visual Studio Code is a powerful tool to identify and resolve issues in your code. By setting breakpoints, watching variables, and using the debugger's various features, you can gain valuable insights into your code's behavior and ensure it runs smoothly.
