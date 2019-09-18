var wordChoices = ["website", "gamer", "artist", "student", "football", "vehicle", "fuel", "index", "format", "front", "create", "refactor", "world", "capture", "editor", "bloated", "choice", "stylist", "photo", "changes", "function", "morning", "coffee", "array", "loop", "face", "paste", "window", "education", "beauty", "model", "desktop", "retouch", "greatest", "bottle", "dinner", "entry"];
var secretWord = " ";
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var started = false;

function startGame(){
    
    document.onkeypress = function() { 
        
        if(!started){
            started = true;
            document.getElementById('guesses-left').innerHTML = guessesLeft;
            playGame();
        }
    };
};

function playGame(){
    document.getElementById("game-message").style.visibility = "hidden";
    secretWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    letterMasking();
    guesses();
};

function letterMasking(){
    var maskedLetters = "";
    for(var i=0; i < secretWord.length; i++){
        maskedLetters += "_";
    }
    document.getElementById('secret-word').innerHTML = maskedLetters;
    console.log(maskedLetters);
    console.log(secretWord);

};

function guesses() {
    started = true;
    if(started){
        document.onkeyup = function (keyPress) {
            //Determines which key was pressed.
            var userGuess = keyPress.key;
            lettersGuessed.push(userGuess);
            document.getElementById('already-guessed').innerHTML = lettersGuessed;
        }
    }
    
};

startGame();

