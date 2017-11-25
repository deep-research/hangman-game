// import the inquirer function
var letterPrompt = require("./gamePrompt");

// import the word constructor
var wordConstructor = require("./word-constructor")

// One game cycle
var playGame = function() {
    // New word object
    var wordObj = new wordConstructor()

    // Choose a new word
    wordObj.chooseWord()

    console.log("")

    // Make a guess
    letterPrompt(wordObj)
}

// Start the game
playGame()