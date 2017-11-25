var inquirer = require("inquirer");

// Number of guesses
var countReset = 10;
var count = countReset;

// Prompt to restart the game
var playAgain = function(wordObj) {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to play again?",
            name: "playAgain"
        }
    ]).then(answers => {
        // If they want to play
        if (answers.playAgain) {
            // Reset the word object
            wordObj.reset()

            // Reset the game counter
            count = countReset;

            console.log("\nA new word has been chosen!\n")

            // Start the next game
            letterPrompt(wordObj)
        } else {
            // Exit the program
            process.exit()
        }
    })
}

// Prompt to enter a guess
var letterPrompt = function(wordObj) {
    if (count > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "letterInput",
                message: "Guess a letter!",
                validate: function(value) {
                    // The user must enter a single letter
                    if (value.length === 1 && /^[a-zA-Z]+$/.test(value)) {
                        return true;
                    }
                    return "Enter a valid letter"
                }     
            }
        ]).then(answers => {
            // Retrieve the player's guess
            var theLetter = answers.letterInput

            // letterFound determines when a new letter has been guessed
            var letterFound = false;

            // Check to see whether the player has uncovered a new letter
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

            // Display the latest version of the word
            wordObj.printLetters()

            // If they guessed correctly
            if (letterFound) {
                // If they guessed the whole word
                if (wordObj.gameStatus()) {
                    // Make sure the game will stop
                    count = 0;

                    console.log("You got it right! Nice job!\n")

                    //  Prompt to restart the game
                    playAgain(wordObj)

                } else {
                    console.log("CORRECT!!!\n")
                }
            // If they guessed incorrectly
            } else {
                // Reduce the counter by one turn
                count--

                // If it was their last try
                if (count === 0) {
                    console.log("You lost. Better luck next time!\n")

                    // Prompt to restart the game
                    playAgain(wordObj)

                // Say how many guesses are left if the game is still going
                } else if (count === 1) {
                    console.log("INCORRECT!!!\n")
                    console.log(count + " guess remaining!!!\n")
                } else {
                    console.log("INCORRECT!!!\n")
                    console.log(count + " guesses remaining!!!\n")
                }
            }

            // Keep the game going with another guess
            letterPrompt(wordObj)
        })
    }
}

module.exports = letterPrompt;