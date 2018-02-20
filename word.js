var Letter = require('letter.js');



letterGuessed: null,
var matchedLetters = [];
var lettersGuessedWrong = [];

var theWordAsArray = [];

["o", "a", "k"];

var Word = function(word){
	this.theWordAsArray = word.split("");

	this.buildWord = function(guess) {
		var hasBinGuessed = false;
		var visibleWord = "";
		this.guess = guess;
		for (i = 0; i < this.theWordAsArray; i++) {
			var theLetter = this.theWordAsArray[i];
			var leTTer = new Letter(theLetter);
			var guessed = processGuess(this.guess, theLetter);
			if (guessed === true) {
				hasBinGuessed = true;
			}
			if 
			var displayedCharacter = leTTer.charVisible(theLetter, ) += "&nbsp;";
			visibleWord = visibleWord += displayedCharacter;

		}
		console.log(visibleWord);
		var wrongLetters = lettersGuessedWrong.join(" ");
		console.log("letters guessed wrong: \n" + wrongLetters + "\n");
		if (hasBinGuessed === true) {

		}
		else if (hasBinGuessed === false) {
			return;
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


		if (lettersGuessedWrong.indexOf(this.guess) !== -1) {
	
			}
			else {

		}
		letter.checkForMatch(guess, letter, match, same);

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