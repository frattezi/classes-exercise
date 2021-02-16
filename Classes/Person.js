class Person {
    constructor(name, email) {
        this._name = name;
        this._email = email;

        this._checkInit();
    }

    _checkInit() {
        if (!this._name || !this._email) {
            throw new Error('[INIT ERROR] No name or email attributed to new Person')
        }
    }
};

module.exports = { Person };