const { Person } = require('./Person');

class Drink {
    constructor(base, fruits, price){
        this.base = base;
        this.fruits = fruits;
        this.price = price;
    }
};

class Employee extends Person {
    constructor(name, email, cpf, age, cellNo, salary) {
        super(name, email);
        this._cpf = cpf;
        this._age = age;
        this._cellNo = cellNo;
        this._salary = salary;
        this.workingHours = 0;
    }

    isEndDay() {
       return this.workingHours >= 8;
    }

    registerWorkingHour(workedHours) {
        this.workingHours = workedHours;
    }
};

class Barman extends Employee {
    constructor(
        name,
        email,
        cpf,
        age,
        cellNo,
        salary
    ){
        super(name, email, cpf, age, cellNo, salary)

    }

    _chargeForDrink(client, price) {
        return client.payCheck(price);
    }

    _makeDrink(base, fruits, price, client) {
        if (client.isUnderAge()){
            throw new Error('VAZA MENOR');
        };

        this._chargeForDrink(client, price);

        const newDrink = new Drink(base, fruits, price);

        client.setDrink(newDrink);
        console.log(`Novo drink pronto! Fiz utilizando: ${newDrink.base}, ${newDrink.fruits}`)
    }

    makeCaipirinha(client) {
        try {
            this._makeDrink('cachaça', ['lemon'], 10, client);
            console.log(`Aqui esta sua caipirinha, obrigado ${client._name}`);
        } catch (error) {
            console.lo(error.message);
        }
    }

    makeCaipvodka(client) {
        try {
            this._makeDrink('vodka', ['lemon', 'strawberry'], 20, client)
            console.log(`Aqui esta sua caipivodka, obrigado ${client._name}`)
        } catch (error) {
            console.log(error.message);
        }
    }
};


module.exports = { Barman };