/* JavaScript Execution Process

JavaScript code is executed in two main phases: Memory Creation Phase and Execution Phase.
During the Memory Creation Phase, variables are defined but not executed; memory is allocated for these variables.
The Execution Phase involves executing the code, performing calculations, and returning results based on defined functions and variables.
Global Execution Context

Every JavaScript program begins with a Global Execution Context, which is the default environment for executing code.
Variables declared in the global scope are accessible throughout the program, and their values can be modified or utilized within functions.
The this keyword in the global context usually refers to the global object (e.g., window in browsers).
Function Execution Context

Each function call creates a new Function Execution Context, which is distinct from the global context.
Inside a function, a new execution context includes its own variable environment, allowing for local variable storage.
When a function is executed, it creates a new execution context, where variables and parameters are stored separately from the global context.
Call Stack Mechanism

JavaScript uses a Call Stack to manage execution contexts, allowing the engine to keep track of function calls and returns.
When a function is called, its execution context is pushed onto the stack; when it completes, the context is popped off.
This LIFO (Last In, First Out) structure ensures that the most recent function call is processed first.
Asynchronous Behavior

JavaScript handles asynchronous operations using the Event Loop, which manages tasks in the call stack and the callback queue.
When an asynchronous function is called, it executes without blocking the main thread, allowing other code to run.
Once the asynchronous operation is complete, the callback is placed in the queue to be executed when the call stack is clear.
Common Interview Questions

Interviewers may ask about the difference between the global and function execution contexts, or how the call stack operates.
Understanding how closures work and how they relate to execution contexts is also crucial for interviews.
Familiarity with the concepts of hoisting and scope can help clarify how variables are accessed and modified in different contexts. */