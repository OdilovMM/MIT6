// module packages;

//CORE package;


setTimeout(function() {
    console.log('ishga tushdi')
}, 5000);


let number = 0;
setInterval(function() {
    console.log('count',number);
    number++;
}, 1000);


 const fs = require('fs');
 const {networkInterface} = require('os');
 const data = fs.readFileSync('./input.txt', 'utf8');
 console.log(data);

// console.log('***************************');

fs.writeFileSync('./input.txt', `${data} \n\t\t Henry`);
const new_data = fs.readFileSync('./input.txt', "utf8");
console.log(new_data);

// import chalk from 'chalk';
// const chalk = require('chalk');

console.log(chalk.blue('hello') + 'World' + chalk.red('!'));
console.log('this is a develop branch!');


//External package;







//File package;