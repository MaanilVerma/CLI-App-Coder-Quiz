//read Input
var readlineSync = require('readline-sync');
console.log('Welcome to Coder Den');
console.log(" ");
var userName = readlineSync.question('What is your name?');
console.log(" ");
console.log("Welcome, " + userName + "Let's Play!!");
console.log(" ");

var score =0;
var score2=0;
//function
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log('Congrats! You are right..');
    console.log(" ");
    score = score+1;
  }
  else
  {
    console.log('Sorry! You loose:-(');
    console.log(" ");
    score= score-1;
  }
}

function play2(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log('Congrats! You are right..');
    console.log(" ");
    score2 = score2+1;
  }
  else
  {
    console.log('Sorry! You loose:-(');
    console.log(" ");
    score2= score2-1;
  }
}


console.log('Ready to Play?');
console.log('Bring out the Coder Inside You');
console.log('Current Score:' +score);

//array of objects 
var questions =[
  {
    question:`
    Which is the Booming Programming Language?            
    a) PHP
    b) JavaScript
    c) React
    d) Golang\n`,
    answer:"b"
  },
  {
    question:`
    What’s a coder favourite theme song?            
    a) Channa Mereya
    b) Disco Dancer 
    c) Tum Hi Ho
    d) Lut Gaye\n`,
    answer:"b"
  },
  {
    question:`
    What is the Best Time to Code?
    a) 6 a.m - 12 p.m
    b) 12 p.m - 6 p.m
    c) 6 p.m - 12 a.m
    d) I code when I get Time\n`,
    answer:"c"
  },
  {
    question:`
    What happens when coder's alarm goes off?
    a)I drink Coffee
    b)I drink Tea
    c)I eat Pizza
    d)I go to sleep again\n`,
    answer:"d"
  },
  {
    question:`
    What is my Favourite Code Editor
    a)VS Code
    b)Notepad++
    c)Google Docs\n`,
    answer:"a"
  }

];

var questions2 =[
  {
    question:`
    How many programmers does it take to screw in a light bulb?          
    a) 1
    b) None,Its a  Hardware Problem
    c) 3
    d) 5\n`,
    answer:"b"
  },
  {
    question:`
    An optimist says: “the glass is half full.
    A pessimist says: “the glass is half empty.
    A programmer says what?          
    a)half full
    b)half empty
    c)the glass is twice as large as necessary
    d)Damn, break the glass\n`,
    answer:"c"
  },
  {
    question:`
    Coder would like to make the world a better place, what he does not get?
    a)world
    b)equipments(s/w and h/w tools)
    c)people
    d) source code...\n`,
    answer:"d"
  },
  

];

//loop around object
for(var i =0; i<questions.length;i++)
{
  var curr = questions[i];
  play(curr.question, curr.answer);
}


console.log('Well done Mate!')

console.log('Game Over!! Ready for Score?');
if(score>=4)
{
console.log('Wow !! You scored : '+ score);
console.log('Fire up the coder inside you!')
console.log('Final round is waiting for you soon');
var ans= readlineSync.question('say yes/no');
if(ans==="yes")
{
  for(var i =0; i<questions2.length;i++)
  {
  var curr2 = questions2[i];
  play2(curr2.question, curr2.answer);
  }
  console.log("Felt funny and lightened mood");
  console.log("You scored:"+ score2);
  console.log("Good Bye!! Keep Coding***");
}
else
{
   console.log('Oops , we will wait for you!');
}


}
else
{
  console.log('No worry, Score is:'+ score);
  console.log('Lit up and Ignite more Programmer');
}