const guess = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const symbol = function(word){
const letterRepresent = [];
for (const letters of word) {
    console.log(letters);
    letterRepresent.push("●");
}
wordProgress.innerText = letterRepresent.join("");
};
symbol(word);

button.addEventListener("click", function (e){
    e.preventDefault();
    message.innerText = "";
    const guessLetter = letterInput.value;
    console.log(guessLetter);
    const goodGuess = playerInput(guess);

    if(goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

const playerInput = function(input){
    const acceptedLetter = /[a-zA-Z]/;
    if(input.length === 0){
        message.innerText = 'Enter a letter.';
    } else if(input.length > 1){
        message.innerText = 'You need at least one letter.';
    } else if (!input.match(acceptedLetter)){
     message.innerText = 'Enter a letter from A to Z.';
    } else{
        return input;
    }
};

const makeGuess = function(guess){
    guess = guess.toUpperCase();
    if(guessedLetters.includes(guess)){
        message.innerText = 'You chose that letter already,try again!'
    } else{
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};