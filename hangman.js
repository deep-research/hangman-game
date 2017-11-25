// import the inquirer function
var letterPrompt = require("./letterPrompt.js");

// import the word constructor
var wordConstructor = require("./word-constructor.js")

// One game cycle
var playGame = function() {
    // New word object
    var wordObj = new wordConstructor()

    // Choose a new word
    wordObj.chooseWord()

    // Make a guess
    console.log("")
    letterPrompt(wordObj)
}

// Start the game
playGame()