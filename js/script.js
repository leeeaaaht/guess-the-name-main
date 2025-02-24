const guess = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

let word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function() {
  const response = await fetch('https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt');
    const theWords = await response.text();
    console.log(theWords);
    const wordArray = word.split("\n");
    console.log(wordArray);
    const randomIndex = Math.floor(Math.random()*wordArray.length);
    word = wordArray[randomIndex].trim();
    getWord();

}
getWord();
placeholder(word);

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

const playerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if(input.length === 0) {
        message.innerText = 'Enter a letter.';
    } else if(input.length > 1) {
        message.innerText = 'You need at least one letter.';
    } else if (input.match(acceptedLetter)) {
     message.innerText = 'Enter a letter from A to Z.';
    } else{
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if(guessedLetters.includes(guess)) {
        message.innerText = 'You chose that letter already,try again!'
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        remainingGuesses(guess);
        playersGuesses();
        newWordInProgress(guessedLetters);
    }
};

const playersGuesses = function(){
    guess.innerHTML = "";
    for(const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guess.append(li);
    }
    
};

const newWordInProgress = function(guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  console.log(wordArray);
  const showWord = [];
  for(letter of wordArray) {
    if(guessedLetters.includes(letter)) {
        showWord.push(letter.toUpperCase());
    } else {
        showWord.push("●");
    }
  }
  console.log(showWord);
wordProgress.innerText = showWord.join("");
didYouWin();
};

UpdatedGuessing = function(guess) {
    const upperWord = word.toUpperCase();
    if(upperWord.includes(guess)) {
        message.innerText = `The word doesn't have ${guess}`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `Yay! The word has that letter ${guess}.`
    }
    if(remainingGuesses === 0) {
        message.innerText = `Game over! The word was <span class="highlight"> ${word}</span>.`
    } else if(remainingGuesses === 1) {
        message.innerText = `You have ${remainingGuesses} guess.`
    } else{
        message.innerText = `You have ${remainingGuesses} guesses.`
    }
}

const didYouWin = function() {
if (word.toUpperCase()===wordProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = '<p class="highlight">You guessed correct the word! Congrats!</p>.';
}
};


