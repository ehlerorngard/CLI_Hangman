var inquirer = require('inquirer');
var Word = require('word.js');




var theWord = null;
guessesLeft = 0;
totalGuesses = 0;
wins = 0;

var wordsForGuessing = ["maple", "oak", "hickory", "beech", "aspen", "spruce", "pine", "chestnut", "fir", "redwood", "tsuga"];

function takeAguess() {
	inquirer.prompt([{
		type: "input",
		message: "Guess a letter...",
		name: "theGuess"
	}]).then(function(input) {
		theWord.checkForMatch(input.theGuess);
		var boule = theWord.checkForMatch(input.theGuess);
		if (boule) {console.log('bouleYAAAHH!!')}
		else if (boule === false) {console.log('neeeeiii')}
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

  updateGuesses: function(letter) {
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
  },

  // This function sets the initial guesses the user gets.
  processUpdateTotalGuesses: function() {
    // The user will get more guesses the longer the word is.
    this.totalGuesses = this.lettersOfTheWord.length + 5;
    this.guessesLeft = this.totalGuesses;

    // Render the guesses left to the page.
    document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
  },

  // This function governs what happens if the user makes a successful guess.
  updateMatchedLetters: function(letter) {
    // Loop through the letters of the "solution".
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      // If the guessed letter is in the solution, and we haven't guessed it already..
      if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
        // Push the newly guessed letter into the matchedLetters array.
        this.matchedLetters.push(letter);
      }
    }
  },

