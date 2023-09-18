const moment = require('moment');

class Account {
 #amount;
 #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;      
    }

    balance() {
        console.log(`Sizning hisobingizdag qoldiq:`, this.#amount);
        return this.#amount;
    }

    withdraw(amount) {
        if(this.#amount > amount) {
            this.#amount -= amount;
            console.log(`hisobdan ${amount}$ yechildi va qoldiq ${this.#amount}$`);
        } else {
            console.log(`sizning balancingizdagi pul yetarli emas: ${this.#amount}$`);
        }
    }

    deposit(deposit) {
        this.#amount += deposit;
        console.log(`sizning balansingizda ${this.#amount}$ bor`) 
    };

    giveMEDEtails() {
        console.log(`Salom hurmatli ${this.name} sizning balansingiz ${this.#amount} $ ga teng`);
        console.log(`Hisob raqamingiz: ${this.#account_id}`);
    }

    static tellMeAbout() {
        console.log('accountlarni yasash uchun hizmat qiladi! ');
    }

    static tellMeTime() {
        console.log(`THe current time ${moment().format('YYYY-MM-DD')}`);
    }
};

module.exports = Account;