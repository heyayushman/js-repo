const user = {
    username: "Krishna",
    price: 99999,
    welcomeMessage: function() {
        console.log(`Hello ${this.username} welcome to our platform, pay the fee of rupees ${this.price} and access special features.`);
        console.log(this);
    }
    
}// this keyword refers to the object where the properties belong to

// user.welcomeMessage();
// user.username = "Leo";
// user.welcomeMessage();

// console.log(this);


// function hello(){
//     let username = "Harry";
//     console.log(this.username);
// }
// hello();


// const hi = () => {
//     let username = "Harry";
//     console.log(this);
// }
// hi();


// const sum = (num1, num2) => {
//     return num1 + num2;
// }
// console.log("Sum : " + sum(5, 2));

//? Implicit return
// const sum = (num1, num2) => (num1 + num2);

const sum = (num1, num2) => ({username: "Jack"});
console.log("Sum : " + sum(5, 2));