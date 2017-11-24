var inquirer = require("inquirer");

var count = 10;
var inquirerFunction = function(wordObj) {
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

            var guessesLeft = count - 1
            if (guessesLeft)
            console.log("Guesses left: " + guessesLeft)

            // see if they've uncovered a new letter
            // for (i=0; i<wordObj.letterObjs.length; i++) {
            //     if (wordObj.letterObjs[i].value === theLetter) {
            //         wordObj.letterObjs[i].guessedStatus = true
            //     }
            // }

            wordObj.printLetters()

            count--
            inquirerFunction(wordObj)
        })
    }
}

module.exports = inquirerFunction;