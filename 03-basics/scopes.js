
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
// console.log(c);


function outer(){
    const userName = "Kristine";
    
    function inner(){
        const rollNo = 113;
        // console.log(userName);
    }
    // console.log(rollNo);

     inner();
}
// console.log(rollNo);
outer();

if(true){
    const username = "Leo";
    if(username === "Leo"){
        const browser = " Brave";
        // console.log(username + browser)
    }

    // console.log(browser); block scope
}

// console.log(username); block scope


// *******************************Hoisting*********************************


//Normal function - this function is hoisted, can be called even before it's declaration
console.log(addOne(5));
function addOne(num){
    return num + 1;
}


//function expression - function is declared using a variable. It cannot be called before/ without declaration

// console.log(addTwo(5)); // Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(5)); // can be accessed after initialization