var Letter = function(letter, binGuessed) {
	this.letter = letter;
	this.binGuessed = binGuessed;
	this.charVisible = function(letter, binGuessed) {
		if (binGuessed === true) {
			binGuessed = false;
			return this.letter;
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
