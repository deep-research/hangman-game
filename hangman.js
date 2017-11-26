// import the inquirer function
var letterPrompt = require("./game-prompt");

// import the word constructor
var wordConstructor = require("./word-constructor")

// One game cycle
var playGame = function() {
    
    // New word object
    var wordObj = new wordConstructor()

    // Choose a new word
    wordObj.chooseWord()

    // Make a guess
    letterPrompt(wordObj)
}

// Start the game
playGame()