//! Memory in JavaScript

//* There are two types of memory in JavaScript: stack and heap. 

//! Stack Memory:
//* The stack is used for static memory allocation, while the heap is used for dynamic memory allocation.

//* Stack memory is used for storing primitive data types (like numbers, strings, booleans, null, undefined) and function calls. 

//* It is a last-in-first-out (LIFO) data structure, meaning that the last item added to the stack is the first one to be removed. 

//* The stack has a limited size, and if it exceeds that size, a stack overflow error occurs.

//* The variables stored in the stack as a copy of the value, and they are automatically deallocated when they go out of scope.

//! Heap Memory:
//* Heap memory is used for storing objects and functions. It is like a linked list, where each object is stored in a separate memory location, and the memory can be allocated and deallocated dynamically.

//* It is a larger pool of memory that can grow and shrink dynamically as needed.

//* The heap is not organized in a specific order, and it allows for more flexible memory allocation.

//* The variables stored in the heap are stored as a reference to the value, the changes made to the duplicate value will affect the original value, and they need to be manually deallocated when they are no longer needed.

//? Example:

let a = 10;
let b = a; // b is a copy of a, stored in stack memory

b = 20; // changing b does not affect a

// console.log(a);
// console.log(b);

let user1 = {
    name: "Alice",
    age: 25
}

let user2 = user1; // user2 is a reference to user1, stored in heap memory

// console.log(user1);
// console.log(user2);

user2.age = 30; // changing user2 also changes user1, because they reference the same object in heap memory

// console.log(user1);
// console.log(user2);

user2.name = "Bob"; // changing user2 also changes user1, because they reference the same object in heap memory

console.log(user1);
console.log(user2);