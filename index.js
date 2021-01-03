var readlineSync=require("readline-sync");
var chalk=require("chalk");
var c1 = chalk.hex('#DEADED');
var c2 = chalk.keyword('orange');
var c3= chalk.hex('#e6e0d4')
var c4=chalk.green
var prime=true
var welcomeMessage="Welcome to the prime number check.Lets find out the number you are thinking is prime or not."
console.log(c1(welcomeMessage));
console.log("----------------------------------------------");
var num=readlineSync.question(c2("what number you want to check whether its prime or not?"));
console.log("----------------------------------------------");

function isPrime(input){
 if(input/1===1){   //!Number.isInteger(input)||input<2
   prime=false
 }
 else{
   for(var i=2;i<input;i++){
     if(input%i===0){
       prime=false
     }
   }
 }
 return prime
}

var output=isPrime(num)

if(output===true)
 { console.log(c3("Its a Prime Number"))
}else{
   console.log(c4("Its not a Prime Number"))}
