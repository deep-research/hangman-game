var inquirer = require("inquirer");
var randomInt = require("random-int");
var wordConstructor = require("./word-constructor.js")

// One game cycle
var playGame = function() {
    // Access the Word constructor
    var wordObj = new wordConstructor()
    // Choose a new word
    wordObj.chooseWord()
    console.log(wordObj.chosenWord)
    console.log(wordObj.printLetters())
}

// Start the game
playGame()