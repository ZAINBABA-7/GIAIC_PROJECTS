#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()*10+1);

const answer = await inquirer.prompt([{
    message: "Enter a Number Between 1-10:",
    type: "number",
    name: "UserGuessNumber",
}]);
if(randomNumber === answer.UserGuessNumber){
    console.log(`${randomNumber} Conguratulation! you guess a Right Number:`);
}else{
    console.log(`${randomNumber} Sorry! you guess a Wrong Number:`);
}