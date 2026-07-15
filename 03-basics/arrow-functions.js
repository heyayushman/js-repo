const user = {
    username: "Kristine",
    price: 999,
    welcomeMessage: function(){
        console.log(`Hello ${this.username} welcome to our platform, pay the fee of rupees ${this.price}`);
    }
}

user.welcomeMessage();