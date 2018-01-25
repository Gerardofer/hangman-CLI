const inquirer = require ('inquirer');
const userInput = process.argv[2];
const Word = require('./word.js');
let word = new Word;
let counter = 0;

word.printWordUnder();

console.log("GUESS WHAT ANIMAL")
var question = function (){
  if (counter < 10){
    inquirer.prompt([
      {
        type: "input",
        name: "guess",
        message: "Please enter a letter: "
      }
    ]).then(answers => {
      word.replaceLetter(answers.guess);
      if (word.word.length === word.rightArray.length){
        console.log("Your've guessed the right animal!", word.word);
        counter = 9;
      }
      else if (word.rightArray.length + word.wrongArray.length == 10) {
        console.log("Sorry, you've used all your chances");
      }
      counter++;
      question();
    });
  }
  else {
    askAgain();
  }
};

question();

function askAgain() {
  inquirer.prompt([
        {
          type: "list",
          name: "choice",
          message: "What would you like to do now?",
          choices: ["Play Again", "End Game"]
        }
    ]).then( answers => {
        if (answers.choice === "Play Again"){
          startGame();
        }
        else {
          console.log("Thank you for playing!!")
        }
    })
};

function startGame () {
  word = new Word;
  counter = 0;
  word.newWordArray = [];
  word.rightArray = [];
  word.wrongArray = [];
  word.printWordUnder();
  question();
};