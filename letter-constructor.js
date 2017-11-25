// The Letter constructor
var Letter = function(letter) {
    
    // The letter value
    this.value = letter;

    // If the letter is guessed, the status becomes true
    this.guessedStatus = false;

    // This function updates the guessed status
    this.guessedCorrectly = function() {
        this.guessedStatus = true;
    };

    // The letter appears after it has been guessed
    this.display = function() {
        if (this.guessedStatus) {
            return this.value
        } else {
            return "_"
        }
    }
}

// Export the constructor to the word-constructor.js file
module.exports = Letter;