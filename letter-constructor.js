// The Letter constructor
var Letter = function(letter) {
    // The letter value
    this.value = letter;

    // If the letter is guessed, the status becomes true
    this.guessedStatus = false;
}

// This function updates the guessed status
Letter.prototype.guessedCorrectly = function() {
    this.guessedStatus = true;
}

Letter.prototype.display = function() {
    // The letter appears after it has been guessed
    this.display = function() {

        // Display the letter if the letter has been guessed
        if (this.guessedStatus) {
            return this.value

        // Display an underscore in the letter is still hidden
        } else {
            return "_"
        }
    }
}

// Export the constructor to the word-constructor.js file
module.exports = Letter;