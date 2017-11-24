var randomInt = require('random-int');
// Import the Letter constructor
var letterConstructor = require('./letter-constructor.js')

// the word constructor
var Word = function() {

    // array of possible word choices
    this.wordList = ["apple", "pineapple", "pear", "bannana", "watermelon", "orange", "tangerine", "kiwi", "coconut"];

    // the word that has been chosen
    this.chosenWord = "";
    this.letterObjs = [];

    // choose a new word
    this.chooseWord = function() {
        // generate an indexnnumber between zero and the length of wordList - 1
        var randInt = randomInt(this.wordList.length - 1);

        // retrieve the word by index number from the wordList array
        var newWord = this.wordList[randInt];

        // Update the word as the chosen word
        this.chosenWord = newWord;

        // Generate an array with the letters in the word
        var letterArray = this.chosenWord.split("")

        // For each letter in the letter array
        for (i=0; i<letterArray.length; i++) {
            // convert to lowercase and create an object
            letterObj = new letterConstructor(letterArray[i].toLowerCase())

            // save to an array of letter objects
            this.letterObjs.push(letterObj)
        }
    }
}

// Export the constructor to the hangman.js file
module.exports = Word;