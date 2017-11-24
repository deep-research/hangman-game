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

            var letterFound = false;

            // see if they've uncovered a new letter
            for (i=0; i<wordObj.letterObjs.length; i++) {

                // if the new letter matches a letter hasn't been guessed
                if (wordObj.letterObjs[i].value === theLetter &&
                    wordObj.letterObjs[i].guessedStatus === false) {
                    
                    // change the guessed status to true
                    wordObj.letterObjs[i].guessedStatus = true;

                    // update the letter found status
                    letterFound = true;
                }
            }

            wordObj.printLetters()

            if (letterFound) {
                if (wordObj.gameStatus()) {
                    console.log("You got it right! Next word!\n")

                    // Reset the game
                    wordObj.reset()
                    count = 10;
                } else {
                    console.log("CORRECT!!!\n")
                }
            } else {                
                count--
                if (count === 0) {
                    console.log("You loose")
                } else if (count === 1) {
                    console.log("INCORRECT!!!\n")
                    console.log(count + " guess remaining!!!\n")
                } else {
                    console.log("INCORRECT!!!\n")
                    console.log(count + " guesses remaining!!!\n")
                }
            }

            inquirerFunction(wordObj)
        })
    }
}

module.exports = inquirerFunction;