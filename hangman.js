var inquirer = require("inquirer");
var randomInt = require('random-int');

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

var Word = function() {
    this.wordList = ["apple", "pineapple", "pear", "bannana", "watermelon", "orange", "tangerine"];
    this.currentWord = "";
    this.letterObjs = [];
    this.chooseWord = function() {
        var randInt = randomInt(this.wordList.length - 1);
        var newWord = this.wordList[randInt];
        this.currentWord = newWord;
        console.log(this.currentWord);
        
        var letterArray = this.currentWord.split("")
        for (i=0; i<letterArray.length; i++) {
            letterObj = new Letter(letterArray[i].toLowerCase(), i)
            this.letterObjs.push(letterObj)
        }
    };

    this.printLetters = function() {
        letterArray = []
        for (i=0; i<this.letterObjs.length; i++) {
            letterArray.push(this.letterObjs[i].display())
        }
        console.log(letterArray.join(" "))
    }

    this.wrongAnswer = function(guessesLeft) {
        if (this.guessesLeft > 0) {
            console.log("INCORRECT!!!")
            console.log(this.guessesLeft + " guesses remaining!!!")
        } else {
            console.log("You lost!");
            this.guessesLeft = guessCount;
            this.chooseWord()
        }
    };
    
    this.newLetter = function() {
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
            var theLetter = answers.letterInput
            for (i=0; i<this.letterObjs.length; i++) {
                if (this.letterObjs[i].value === theLetter) {
                    this.letterObjs[i].guessedStatus = true
                }
            } 
            //check lette r           
        });
    };
}

var wordObj = new Word()
var playGame = function() {
    wordObj.chooseWord()
    var guessesLeft = 15;
    for ( ; guessesLeft>=0; guessesLeft--) {
        wordObj.newLetter()
        wordObj.printLetters()  
    }
}
playGame()