// The Letter constructor
var Letter = function(letter) {
    // The letter value
    this.value = letter;

    // Store the character to display
    this.display = "_";

    // If the letter is guessed, the status becomes true
    this.guessedStatus = false;
}

// Export the constructor to the word-constructor.js file
module.exports = Letter;