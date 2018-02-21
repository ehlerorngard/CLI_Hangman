var inquirer = require('inquirer');
var Word = require('word.js');




var theWord = null;
var guessesLeft = 16;
totalGuesses = 0;
var points = 0;

var wordsForGuessing = ["maple", "oak", "hickory", "beech", "aspen", "spruce", "pine", "chestnut", "fir", "redwood", "tsuga"];

function takeAguess() {
	inquirer.prompt([{
		type: "input",
		message: "Guess a letter...",
		name: "theGuess"
	}]).then(function(input) {
		// theWord.checkForMatch(input.theGuess);
		var rez = theWord.buildWord(input.theGuess);
		if (rez === 0) {console.log('bouleYAAAHH!!')}
			points++;
			console.log("You have " + points + " total points.");
		else if (rez === 1) {
			guessesLeft--;
			console.log('You have ' + guessesLeft + ' guesses left.');
		}
		else if (rez === 2) {
			console.log("Uhh.. you already guess that..");
		}
		
	});
};

function createWord(){
	var randex = Math.floor(Math.random() * wordsForGuessing.length);
	var currentWord = wordsForGuessing[randex];
	wordsForGuessing.splice(randex, randex+1);
	theWord = new Word(currentWord);
};



updateGuesses = function(letter) {
    // If the letter is not in the guessedLetters array, and the letter is not in the lettersOfTheWord array..
    if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {

      // Add the letter to the guessedLetters array.
      this.guessedLetters.push(letter);

      // Decrease guesses by one.
      this.guessesLeft--;

      // Update guesses remaining and guesses letters on the page.
      document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
      document.querySelector("#guessed-letters").innerHTML =
      this.guessedLetters.join(", ");
    }
  };



