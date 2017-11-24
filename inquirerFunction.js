var inquirer = require("inquirer");

var count = 8;
var inquirerFunction = function() {
    if (count > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "letterInput",
                message: "Guess a letter!",
                validate: function(value) {
                    if (value.length === 1 && /^[a-zA-Z]+$/.test(value)) {
                        return true;
                    }
                    return "Enter a valid letter"
                }     
            }
        ]).then(answers => {
            // Retrieve the player's guess
            var theLetter = answers.letterInput
            console.log(theLetter)

            var guessesLeft = count -1
            if (guessesLeft)
            console.log("Guesses left: " + guessesLeft)

            // see if they've uncovered a new letter
            // for (i=0; i<this.letterObjs.length; i++) {
            //     if (this.letterObjs[i].value === theLetter) {
            //         this.letterObjs[i].guessedStatus = true
            //     }
            // } 

            count--
            inquirerFunction()
        })
    }
}

module.exports = inquirerFunction;