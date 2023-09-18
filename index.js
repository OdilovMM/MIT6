//                                MODULE PACKAGES;

//                                 Module package CORE;

setTimeout(function () {
  console.log("ishga tushdi");
}, 5000);

let number = 0;
setInterval(function () {
  console.log("count", number);
  number++;
}, 1000);

const fs = require("fs");
const { networkInterface } = require("os");
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);

fs.writeFileSync("./input.txt", `${data} \n\t\t Henry`);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);

console.log(chalk.blue("hello") + "World" + chalk.red("!"));
console.log("this is a develop branch!");
console.log("this is a develop branch! and console.log is second");

///////////////////////////////////////////////////////////////////////////////////ANCHOR -

//                                 Module package EXTERNAL;

const moment = require("moment");
const time = moment().format("YYYY-MM-DD");

setInterval(() => {
  const time = moment().format();
  console.log(`hozirgi vaqt: ${time}`);
}, 5000);

const inquirer = require("inquirer");
inquirer
  .prompt([{ type: "input", name: "number", message: "enter a number?" }])
  .then((answer) => {
    console.log("I entered number's value is: ", answer.number);
  })
  .catch((err) => console.log(err));

const validator = require("validator");
const test = validator.isEmail("foo@bar.com"); //=> true
// const test = validator.isInt("100.5");
console.log(test);

const { v4: uuid4 } = require("uuid");
const random = uuid4();
console.log("random:", random);

const chalk = require("chalk");
const log = console.log;
// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

/////////////////////////////////////////////////////////////////////////////////////////////////!SECTION

//                                 Module package FILE; => biz ozimiz yasagan fayllar

const calculate = require("./hisob.js");
const Account = require("./account.js");
const myAccount = new Account("John", 20000, 982441235565);
Account.tellMeAbout();
Account.tellMeTime();
myAccount.giveMEDEtails();
myAccount.deposit(15420);

//buy car 2.4mln $

myAccount.withdraw(35000);

const natija = calculate.kopaytirish(80, 20);
console.log(natija);

const natija2 = calculate.qoshish(50, 20);
console.log(natija2);

const natija3 = calculate.ayrish(50, 10);
console.log(natija3);
