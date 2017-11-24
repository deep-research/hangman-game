var Letter = function(letter, count) {
    this.value = letter;
    this.count = count;
    this.guessedStatus = false;
    this.guessedCorrectly = function() {
        this.guessedStatus = true;
    };
    this.display = function() {
        if (this.guessedStatus) {
            return this.value
        } else {
            return "_"
        }
    }
}

module.exports = Letter;