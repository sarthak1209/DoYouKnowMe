var readlineSync = require("readline-sync");
var chalk        = require("chalk");

var score = 0;

var highScores = [
  {
    name: "Alice",
    score: 5
  }
]
  

var userName = readlineSync.question(chalk.yellow("May I know your name? "));

console.log("Welcome "+ userName + " to DO YOU KNOW ME game!!!!!!!!!!!!");


function play(question, answer){
    var userAnswer = readlineSync.question(question);


    if(userAnswer.toLowerCase() === answer.toLowerCase() ){
      score++;
      console.log(chalk.green("You are right"));
     
    }else{
      console.log(chalk.red("You are wrong"));
    } 
    console.log(chalk.cyan("Your current score is: "+ score));

  console.log(chalk.magenta("================"));
}


var questions = [
{
   question:"Where do I live? ",
   answer:"Iglas"
},
{
   question:"Do i like tea or coffee more? ",
   answer:"Tea"
},
{
   question:"What's my favourite color? ",
   answer:"Blue"
},
{
   question:"What's my favourite programming language? ",
   answer:"C++"
},
{
   question:"What's my favourite dish? ",
   answer:"Pizza"
},
]



for(var i=0; i<questions.length; i++){
  var qNo= Number(i)+Number(1);
  console.log(chalk.bgYellow("Question No "+qNo + " is-"))
  play(questions[i].question, questions[i].answer);
}

console.log(chalk.green("Your have scored "+ score +" points"));

if(score < highScores[0].score){
  console.log(chalk.yellow(highScores[0].name +" has scored highest with 5 points") );
  console.log(chalk.cyan("Play again!! You can beat high scorer....."))
}else {
  console.log(chalk.green("Congatulations you have beaten high score!!!"));
  console.log(chalk.bgCyan("Send us the screen shot. We will update."));
}
