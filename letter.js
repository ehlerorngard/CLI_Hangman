// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var Letter = function(letter, binGuessed) {
	this.letter = letter;
	this.binGuessed = binGuessed;
	this.charVisible = function(letter, binGuessed) {
		if (binGuessed === true) {
			var letra = this.letter;
			binGuessed = false;
			return letra;
		}
		else if (binGuessed === false) {
			return "_";
		}
	}
	// checks to see if the guess and the letter of the word we're 
	// presently addressing are a match
	this.checkForMatch = function(guess, letter) {
		this.guess = guess;
		this.letter = letter;
		if (this.guess === this.letter) {
			binGuessed = true;
	        return binGuessed;
		}
		else {
			binGuessed = false;
	        return binGuessed;
		}
	}
}


module.exports = Letter;
