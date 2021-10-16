var rs = require("readline-sync");
var chalk = require("chalk");
var quebank = require("./questions");
var quecou = 0;
var totque = quebank.length;

let red = chalk.red;
let blue = chalk.blue;
let green = chalk.green;
let yellow = chalk.yellow;
let magenta = chalk.magenta;

var mks = 0;

console.log(blue("Welcome to CORONA quiz game!"));

console.log("\n There are total "+ totque +" questions with it's options, you can just select any one like,", blue("1, 2, 3, 4"), "!\n");
console.log(green("+5 "), magenta("for right answer,"), red(" -2"), magenta(" for wrong answer!"));

var name = rs.question(magenta("Enter Your Name: "))
console.log(green(`Hello ${name}!, Welcome..!`));
var showquestions = (que) => {
  console.log("\n" +  ((quecou++) + 1) + ". " + que.question);
  que.options.forEach(showoptions);
  answer = collectanswer();
  
  if(que.options[answer - 1] == que.answer){
    mks += 5;
    console.log(green("You gives Correct answer!"));
  } else {
    mks -= 2;
    console.log(red("You Entered Wrong answer !"));
    console.log(yellow("Correct answer is: " + que.answer));
  }
};

var collectanswer = () => {
  var ans = rs.question(magenta("Enter your answer: "));  
  if(ans >= 1 && ans <= 4){
    return ans;
  } else {
    console.log(red("You entered Invalid choice !"));
    return collectanswer();
  }  
};

var showoptions = (option, index) => {  
  console.log("-> " + (index + 1) + ". " + option);
};

quebank.forEach(showquestions);
console.log(magenta("\n Your score is " + mks));