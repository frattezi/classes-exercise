const { Person } = require('./Person');

class Client extends Person {
    constructor(name, email, money, age) {
        super(name, email);
        this._money = money;
        this._age = age;
        this._drink = undefined;
    }

    isUnderAge() {
       return !(this._age >= 18);
    };

    payCheck(bill) {
        if (this._money >= bill) {
            this._money -= bill;

            console.log(`Conta Paga, saldo final: ${this._money}`)
        } else {
            throw new Error('[INSUFICIENT FUNDS] TA QUEBRADO MEU FILHO');
        };
    };

    setDrink(drink) {
        this._drink = drink
    }

};

module.exports = { Client };