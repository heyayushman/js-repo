const user = {
    username: "Kristine",
    price: 999,
    welcomeMessage: function() {
        console.log(`Hello ${this.username} welcome to our platform, pay the fee of rupees ${this.price} and access special features.`);
        console.log(this);
    }
    
}// this keyword refers to the object where the properties belong to

// user.welcomeMessage();
// user.username = "Leo";
// user.welcomeMessage();

// console.log(this);


function hello(){
    let username = "Harry";
    console.log(this.username);
}
hello();