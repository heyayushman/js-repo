
// let a = 20;
// const b = 30; // declared outside any block is called global scope, this can be accessed anywhere in the program
// var c = 40;

if(true){
    let a = 20;
const b = 30; // declared inside block is called block scope, the variables declared inside this block can only be accessed inside this scope.
var c = 40;
}

// console.log(a);
// console.log(b);
console.log(c);