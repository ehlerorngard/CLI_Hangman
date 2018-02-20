var Letter = require('letter.js');



letterGuessed: null,
matchedLetters: [],
guessedLetters: [],
;

var theWordAsArray = [];


var Word = function(word){
	this.theWordAsArray = word.split("");

	this.buildWord = function(){
		for (i = 0; i < this.theWordAsArray; i++) {
			var theLetter = theWordAsArray[i];
			var letter = new Letter(theLetter);
		}
	}
	this.checkForMatch = function(letra) {

	}
	this.printWord = function(word){
		var wordToPrint = this.word.join(" ");
		console.log(wordToPrint);
	}
};




rebuildWordView = function() {
    // We start with an empty string.
    var wordView = "";

    // Loop through the letters of the word we are trying to guess..
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      // If the current letter has been guessed, display that letter.
      if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
        wordView += this.lettersOfTheWord[i];
      }
      // If it hasn't been guessed, display a "_" instead.
      else {
        wordView += "&nbsp;_&nbsp;";
      }
    }

    // Update the page with the new string we built.
    document.querySelector("#current-word").innerHTML = wordView;
  }