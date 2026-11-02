// // const form = document.querySelector("form");
// const userInput = document.querySelector("#number");
// let submitBtn = document.querySelector("#submitBtn");
// let randomNum = parseInt(Math.random() * 100 + 1);
// let remainingGuess = document.querySelector(".remaining-guess");
// let previousGuess = document.querySelector(".previous-guess");
// let lowOrHigh = document.querySelector(".lowOrHi");
// let startOver = document.querySelector(".result");
// const p = document.createElement('p');



// let prevGuess = [];
// let numOfGuesses = 1;
// let playGame = true;

// if(playGame){
//     submitBtn.addEventListener('click', (e) => {
//         console.log(randomNum);
//         e.preventDefault();
//         const guessedNum = parseInt(userInput.value);
//         validateGuess(guessedNum);
//         console.log(guessedNum)
//     })
// }

// function validateGuess(guess){
//     //guess the number whether it is right number or not

//     if(isNaN(guess)){
//         alert("Please enter a valid number");
        
//     }else if(guess < 1){
//         alert("Please enter a higher number");
        
//     }else if(guess > 100){
//         alert("Please enter a lower number");

//     }else {
//         prevGuess.push(guess);
//         if(numOfGuesses === 11){
//             displayGuess(guess);
//             displayMessage(`Game over. Random number was ${randomNum}`);
//             endGame();
//         }else {
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// function checkGuess(guess){
//     if(guess === randomNum){
//         displayMessage(`You guessed it right.`);
//         endGame();
//     }else if(guess < randomNum){
//         displayMessage(`Number is too low !`);

//     }else if(guess > randomNum){
//         displayMessage(`Number is too high !`);
//     }
// }
// function displayGuess(guess){
//     userInput.value = '';
//     previousGuess.innerHTML += `${guess} `;
//     previousGuess.style.backgroundColor = "yellow";
//     previousGuess.style.padding = "5px";
//     numOfGuesses++;
//     remainingGuess.innerHTML = `${11 - numOfGuesses}`;
// }

// function displayMessage(message){
//     lowOrHigh.innerHTML = `<h2>${message}</h2>`
// }

// function endGame(){
//     userInput.value = '';
//     userInput.setAttribute('disabled', '');
//     p.classList.add('button');
//     p.innerHTML = `<h1 id='newGame'>Start New Game</h1>`;
//     p.style.cursor = 'pointer';
//     startOver.appendChild(p);

//     playGame = false;;
//     newGame();
    
// }

// function newGame(){
//     const newGameBtn = document.querySelector('#newGame');
//     newGameBtn.addEventListener('click', (e) => {
//         randomNum = parseInt(Math.random() * 100 + 1);
//         prevGuess = [];

//         numOfGuesses = 1;
//         previousGuess.innerHTML = '';
//         remainingGuess.innerHTML = `${11 - numOfGuesses}`;
//         userInput.removeAttribute('disabled');
//         startOver.removeChild(p);
//         previousGuess.style.backgroundColor = "";
//         lowOrHigh.innerHTML = '';
//         playGame = true;

//     })

// }





// const randomNum = Math.floor(Math.random() * 100 + 1);
// const submitBtn = document.querySelector('.submit-btn');
// const userInput = document.querySelector('#number');
// const previousGuess = document.querySelector('.previous-guess');
// const remainingGuess = document.querySelector('.remaining-guess');
// const lowOrHigh = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.result');
// const p = document.createElement('p');


// let prevGuess = [];
// let numOfGuesses = 1;

// //? allows to play the game until the user wants to stop playing
// let playGame = true;

// function validateGuess(guess){
//     //
// }

// function checkGuess(guess){
//     //
// }

// function displayGuess(guess){
//     //
// }

// function displayMessage(message){
//     //
// }


// function endGame(){
//     //
// }

// function newGame(){
//     //
// }
