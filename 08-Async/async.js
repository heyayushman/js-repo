//? JavaScript executes code one line at a time. Each line must finish before the next line can run.
//? Asynchronous is how JavaScript can allow some code to run in the background, and let their results be handled when they are ready.

//! Synchronous vs Asynchronous 

//* Synchronous code is executed line by line, blocking the execution of subsequent code until the current operation is complete. 
//? Asynchronous code, on the other hand, allows for non-blocking operations, enabling other code to run while waiting for an operation to complete.

//? Example of Synchronous Code
function synchronousExample() {
    console.log("Start of synchronous code");
    // Simulating a time-consuming operation
    for (let i = 0; i < 1e9; i++) {} // Blocking operation
    console.log("End of synchronous code");
}
synchronousExample(); // This will block the execution until the loop is complete
//? Example of Asynchronous Code
function asynchronousExample() {
    console.log("Start of asynchronous code");
    setTimeout(() => {
        console.log("End of asynchronous code after 2 seconds");
    }, 2000); // Non-blocking operation
}
asynchronousExample(); // This will not block the execution, allowing other code to run while waiting for the timeout