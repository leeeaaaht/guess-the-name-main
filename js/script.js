const guess = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";

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
    const guessLetter = letterInput.value;
    console.log(guessLetter);
    letterInput.value = "";
});
