#! /usr/bin/env node   

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10)
const answers = await inquirer.prompt([
  {
    message: "Please Guess Number between  1 - 10",
    type: "number",
    name: "userGuessNumber",
  },
]);
if (answers.userGuessNumber === randomNumber){
    console.log("congtratulations You Guess Right Number")
}
else{
    console.log("You Guessed Wrong Number")
}