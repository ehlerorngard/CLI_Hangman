var inquirer = require('inquirer');
var Word = require('./word.js');

var theWord = null;
var guessesLeft = 12;
var points = 0;
var wordsForGuessing = ["maple", "oak", "hickory", "beech", "aspen", "spruce", "pine", "chestnut", "fir", "redwood", "tsuga"];

function takeAguess() {
	inquirer.prompt([{
		type: "input",
		message: "Guess a letter...",
		name: "theGuess"
	}]).then(function(input) {
		var Guess = input.theGuess.toLowerCase();
		var rez = theWord.processAguess(Guess);

		// Here a number 0 through 3 is returned in response
		// and funcitons as an effective switch case,
		// by which according subsequent action is determined: 
		if (rez === 0) {
			points++;
			console.log("You have " + points + " total points.");
			takeAguess();
		}
		else if (rez === 1) {
			guessesLeft--;
			console.log('You have ' + guessesLeft + ' guesses left.');
			if (guessesLeft > 0) {
				takeAguess();
			}
			else if (guessesLeft === 0) {
				console.log("GAME OVER");
			}
		}
		else if (rez === 2) {
			console.log("Uhh.. you already guessed that..");
			takeAguess();
		}
		else if (rez === 3) {
			console.log("You got the word!!");
			points++;
			console.log("You have " + points + " total points.");
			createWord();
		}
		
	});
};

// This function splices a word at random from the array of 
// remaining possible words to be the next word in which
// the player will guess letters:  
function createWord(){
	if (wordsForGuessing.length === 0) {
		console.log("CONGRATULATIONS! You guessed all the words!");
	}
	else if (wordsForGuessing.length > 0) {	
		var randex = Math.floor(Math.random() * wordsForGuessing.length);
		var currentWord = wordsForGuessing[randex];
		wordsForGuessing.splice(randex, 1);
		theWord = new Word(currentWord);
		var wordlength = currentWord.split("").length;
		var blanks = "";
		for (i = 0; i < wordlength; i++) {
			blanks += "_ ";
		}
		console.log(blanks);
		takeAguess();
	}
}

// calls the function to start everything
createWord();



