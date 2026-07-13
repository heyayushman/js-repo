
//* normal function
// function sum(a, b){
//     return a + b;
// }

// console.log(sum(4, 5))

//* arrow function
let square = (a) => {
    return a * a;
}
// let a = 4;
// console.log(square(12))

let arr = ["H", "I", "T", "E", "S", "H"];

// for(let x in arr){
//     console.log(arr[x]);
// }

// let result = ""
// for(let x in arr){
//     result += arr[x] + " ";
// }
// console.log(result.trim());


// console.log(arr.join(" "));

// function logInUserMessage(userName){
//     if(userName === undefined){
//         console.log("Please enter a user name.");
//         return;
//     }else {
//             return `${userName} has logged in just now`;

//     }
// }
// console.log(logInUserMessage("Tejas"))

function logInUserMessage(userName = "John Doe"){
    if(!userName){
        console.log("Please enter a user name.");
        return;
    }else {
            return `${userName} has logged in just now`;

    }
}
// console.log(logInUserMessage())


function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(10, 200, 300))


const user = {
    username: "Kristine",
    price: "999"
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}.`);
}

// handleObject(user)

handleObject({
    username: "Sushi",
    price: 399
})


const myArray = [200, 400, 100, 500];

function getArray(getValue){
    return getValue[1];
}

console.log(getArray(myArray))
// console.log(getArray([200, 500, 400, 100])