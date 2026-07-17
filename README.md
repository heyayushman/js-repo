# js-repo
A code repo for JavaScript

## JavaScript is a dynamically typed language :
### This means that you do not need to explicitly declare data types when creating variables, and the interpreter assigns types automatically at runtime based on the value.

# const - It is used when the value can not be changed
# let - it is also used to declare variable in JS, it has lexical scope
# var - it is used to declare variable in JS, it has global scope

## To print variables to the console:
1. console.log() : it will show only one variable
2. console.table([varibales name]) : it shows all the values of variables in a tabular form

![alt text](image.png)

## ==> use of "use strict" in JS, allows user to use newer version of JS, The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

* With strict mode, you can not, for example, use undeclared variables.

### Example:
#### "use strict";
```
x = 3.14;       // This will cause an error because x is not declared
```
#### "use strict";
myFunction();

``` 
function myFunction() {
   y = 3.14;   // This will also cause an error because y is not declared
}
```


## Call Stack
![alt text](image.png)

Step 1: Global Execution 
Step 2: Memory Execution : The variable will be undefined first, the functions definition will also be stored, in this phase the memory has been created
Step 3: Execution Phase : The undefined variable will be assigned values to each variable,

Whenever the functions are executed, a new variable environment will be created, and execution thread

![alt text](image-1.png)
![alt text](image-2.png)

## After completing the task the execution context gets deleted
![alt text](image-3.png)