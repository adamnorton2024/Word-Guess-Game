var wordChoices = ["website", "gamer", "artist", "student", "football", "vehicle", "fuel", "index", "format", "front", "create", "refactor", "world", "capture", "editor", "bloated", "choice", "stylist", "photo", "changes", "function", "morning", "coffee", "array", "loop", "face", "paste", "window", "education", "beauty", "model", "desktop", "retouch", "greatest", "bottle", "dinner", "entry"];
var secretWord = " ";
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var started = false;
var maskedLetters = "";
var userGuess = "";


function startGame(){

    document.addEventListener("keyup", function (){

        if (!started) {
            started = true;
            document.getElementById('guesses-left').innerHTML = guessesLeft;
            playGame();
        }
    });
};


function playGame(){
    document.getElementById("game-message").style.visibility = "hidden";
    secretWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    letterMasking();
    guesses();
};


function letterMasking(){
   /* maskedLetters = "";*/
    for(var i=0; i < secretWord.length; i++){
        maskedLetters += "_";
    }
    document.getElementById('secret-word').innerHTML = maskedLetters;
    updateSecretWord();
};


function guesses() {
 
    document.onkeyup = function (keyPress) {

        // Determines which key was pressed.
        userGuess = keyPress.key;
        lettersGuessed.push(userGuess);
        

        if (guessesLeft > 0){
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
            document.getElementById('already-guessed').innerHTML = lettersGuessed;
            updateSecretWord();
                if(guessesLeft === 0){
                    console.log("you lose!");
                    document.getElementById("guesses-left").innerHTML = guessesLeft;
                    document.getElementById("game-message").innerHTML = "YOU LOSE!";
                    document.getElementById("game-message").style.visibility = "visible";
                    lostGame();
                }
            
        }
    };
};


function updateSecretWord(){
    var indices = [];
    for (var i=0; i < secretWord.length; i++ ){
        if(secretWord[i] === userGuess){
            indices.push(i);
        }
    }

    for(var i = 0; i < indices.length; i++){
        maskedLetters[indices[i]] = userGuess; 
    }
    console.log('masked letters updated should be below here.');
    console.log(maskedLetters);
    console.log(secretWord);
    console.log(indices);
};

function lostGame(){
    losses++;
    document.getElementById("losses").innerHTML = losses;

}

startGame();
