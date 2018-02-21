// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var Letter = function(letter, binGuessed) {
	this.letter = letter;
	this.binGuessed = binGuessed;
	this.charVisible = function(letter, binGuessed) {
		if (binGuessed === true) {
			var letra = this.letter;
			console.log(letra);
			return letra;
		}
		else if (binGuessed === false) {
			console.log("_");
			return "_";
		}
	}
	this.checkForMatch = function(guess, letter) {
		this.guess = guess;
		this.letter = letter;
		if (this.guess === this.letter) {
			binGuessed = true;
			console.log(guess + " equals " + letter);
	        return binGuessed;
		}
		else {
			binGuessed = false;
	        return binGuessed;
		}
	}
}

var piggy = new Letter("c", false);
piggy.charVisible("a", true);

module.exports = Letter;

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

