var chalk = require('chalk');
var Letter = require('letter.js');



var matchedLetters = [];
var lettersGuessedWrong = [];

var theWordAsArray = [];

["o", "a", "k"];

var Word = function(word) {
	this.theWordAsArray = word.split("");
	this.matchedLetters = [];
	this.lettersGuessedWrong = [];
	this.buildWord = function(guess) {
		if ((matchedLetters.indexOf(guess) !== -1) || (lettersGuessedWrong.indexOf(guess) !== -1)) {
			return 2;
		}
		else {
			var madeCorrectGuess = false;
			var isaMatch = false;
			var visibleWord = "";
			this.guess = guess;
			for (i = 0; i < this.theWordAsArray; i++) {
				isaMatch = false;
				var theLetter = this.theWordAsArray[i];
				var ;
				var leTTer = new Letter(theLetter, );
				var guessed = processGuess(this.guess, theLetter);
				if (guessed === true) {
					isaMatch = true;
					madeCorrectGuess = true;
				}
				var displayedCharacter = leTTer.charVisible(theLetter, isaMatch) += "&nbsp;";
				visibleWord += displayedCharacter;
			}
			if (madeCorrectGuess === true) {
				console.log(chalk.cyan("nice guess!  it's a match!"));
				console.log(visibleWord);
				var wrongLetters = lettersGuessedWrong.join(" ");
				console.log("letters guessed wrong: \n" + wrongLetters + "\n");
				return 0;
			}
			else if (madeCorrectGuess === false) {
				console.log(chalk.red("Sorry...  your guess is no match for this word..."));
				console.log(visibleWord);
				lettersGuessedWrong.push(guess);
				var wrongLetters = lettersGuessedWrong.join(" ");
				console.log(chalk.yellow("letters guessed wrong: \n" + wrongLetters + "\n"));
				return 1;
			}
		}
	}
	this.processGuess = function(guess, letter) {
		var guessedCorrectly = false;
		this.guess = guess;
		this.letter = letter;
		var matched = leTTer.checkForMatch(this.guess, this.letter);
		if (matched === true) {
			matchedLetters.push(this.guess);
			guessedCorrectly = true;
			return guessedCorrectly;
		}
		else if (matched === false) {
			return guessedCorrectly;
		}
	}
}

// Word.js: Contains a constructor, Word that depends 
// on the Letter constructor. This is used to create 
// an object representing the current word the user is 
// attempting to guess. That means the constructor 
// should define:
// 

// An array of new Letter objects representing the 
// letters of the underlying word

// A function that returns a string representing 
// the word. This should call the function on each 
// letter object (the first function defined in Letter.js) 
// that displays the character or an underscore 
// and concatenate those together.

// A function that takes a character as an argument 
// and calls the guess function on each 
// letter object (the second function defined in Letter.js)



module.exports = Word;