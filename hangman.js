// import the inquirer function
var inquirerFunction = require("./inquirerFunction.js");

// import the word constructor
var wordConstructor = require("./word-constructor.js")

// One game cycle
var playGame = function() {
    // New word object
    var wordObj = new wordConstructor()

    // Choose a new word
    wordObj.chooseWord()

    // Make a guess
    inquirerFunction(wordObj)
}

// Start the game
playGame()