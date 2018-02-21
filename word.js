var chalk = require('chalk');
var Letter = require('./letter.js');

var matchedLetters = [];
var lettersGuessedWrong = [];
var theWordAsArray = [];
var visibleWord = "";
var leTTer = null;

var Word = function(word) {
	theWordAsArray = word.split("");
	matchedLetters = [];
	lettersGuessedWrong = [];
	var verifyGuess = function(guess, letter, error) {
		if (error) throw error;
		var guessedCorrectly = false;
		this.guess = guess;
		this.letter = letter;
		var matched = leTTer.checkForMatch(this.guess, this.letter);
		if (matched === true) {
			guessedCorrectly = true;
			return guessedCorrectly;
		}
		else if (matched === false) {
			return guessedCorrectly;
		}
	};
	this.processAguess = function(guess) {
		// checks if the letter has already been guessed
		if ((matchedLetters.indexOf(guess) !== -1) || (lettersGuessedWrong.indexOf(guess) !== -1)) {
			return 2;
		}
		// otherwise if it's a legitimate/new guess...
		else {
			var madeCorrectGuess = false;
			var isaMatch = false;
			var digits = 0;
			visibleWord = "";
			this.guess = guess;
			// cycle through each letter of the current word,
			// both to check for a match AND to build the visible string
			for (i = 0; i < theWordAsArray.length; i++) {
				isaMatch = false;
				var theLetter = theWordAsArray[i];
				leTTer = new Letter(theLetter, false);
				var guessed = verifyGuess(this.guess, theLetter, null);
				if (guessed === true) {
					isaMatch = true;
					madeCorrectGuess = true;
					digits++;
				}
				else if ((guessed === false) && (matchedLetters.indexOf(theWordAsArray[i])) !== -1) {
					isaMatch = true;
					digits++;
				}
				else if (guessed === false) { 
					isaMatch = false;
				}
			// build the visible string of the word, using Letter and the boolean denoting a match
				var displayedCharacter = leTTer.charVisible(theLetter, isaMatch);
				displayedCharacter += " ";
				visibleWord += displayedCharacter;
			}
			// if a letter was guessed correctly AND it was the final letter to guess in the word...
			if ((madeCorrectGuess === true) && (digits === theWordAsArray.length)) {
				console.log(chalk.magenta("nice guess!  it's a match!"));
				console.log(visibleWord);
				var wrongLetters = lettersGuessedWrong.join(" ");
				console.log(chalk.gray("letters guessed wrong: "));
				console.log(chalk.yellow(wrongLetters));
				return 3;
			}
			// otherwise if a letter was guessed right but more remain in the word
			else if (madeCorrectGuess === true) {
				console.log(chalk.cyan("nice guess!  it's a match!"));
				console.log(visibleWord);
				matchedLetters.push(this.guess);
				var wrongLetters = lettersGuessedWrong.join(" ");
				console.log(chalk.gray("letters guessed wrong: "));
				console.log(chalk.yellow(wrongLetters));
				return 0;
			}
			else if (madeCorrectGuess === false) {
				console.log(chalk.red("Sorry...  your guess is no match for this word..."));
				console.log(visibleWord);
				lettersGuessedWrong.push(guess);
				var wrongLetters = lettersGuessedWrong.join(" ");
				console.log(chalk.gray("letters guessed wrong: "));
				console.log(chalk.yellow(wrongLetters));
				return 1;
			}
		}
	};

};

module.exports = Word;