// control flow - 

let age = 15;
let voterID = false;

// if(age >= 18 || voterID){
   
//     if(voterID){
//         console.log("Eligible for vote");
//     }else {
//         console.log("Apply for voterID");
//     }
// }else {
//     console.log("Under age...! Come after 18 years of age..!");
// }



// const score = 200;
// let power;
// if(score > 100){
//     power = "fly";
//     console.log(`User power: ${power}`);
// }

const userLoggedIn = true;
const debitCard = null;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && (loggedInFromGoogle || loggedInFromEmail)){
    console.log("Welcome, You are allowed to buy courses")
}else{
    console.log("You don't have a debit card..!")
}