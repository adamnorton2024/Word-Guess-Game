var wordChoices = ["website", "gamer", "artist", "student", "football", "vehicle", "fuel", "index", "format", "front", "create", "refactor", "world", "capture", "editor", "bloated", "choice", "stylist", "photo", "changes", "function", "morning", "coffee", "array", "loop", "face", "paste", "window", "education", "beauty", "model", "desktop", "retouch", "greatest", "bottle", "dinner", "entry"];
var secretWord = " ";
var wins = 0;
var losses = 0;
var guessesLeft;
var lettersGuessed = [];

function startGame(){
    
    document.onkeypress = function(keyPress) { playGame() };

}

function playGame(){
    document.getElementById('message').innerHTML = " ";
    secretWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    letterMasking();
}

function letterMasking(){
    var maskedLetters = "";
    for(var i=0; i < secretWord.length; i++){
        maskedLetters += "_";
    }
    document.getElementById('secret-word').innerHTML = maskedLetters;
    console.log(maskedLetters);
    console.log(secretWord);

}

startGame();

