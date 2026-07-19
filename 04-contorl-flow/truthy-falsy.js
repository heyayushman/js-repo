const userEmail = "hello@gmail.com";
if(userEmail){
    // console.log("User has an email ID");
}else {
    // console.log("User does not have an email");
}

//? falsy values

// false, 0, -0, "", BigInt 0n, null, undefined, NaN

//? truthy values
// "0", " ", [], {}, "false", function(){},

const myArr = []
if(myArr.length === 0){
    // console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? function(){
//     console.log("Nullish Coalescing Operator");
// }

// console.log(val1);
// val1();


//* Ternary Operator

// condition ? true : false;

// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");