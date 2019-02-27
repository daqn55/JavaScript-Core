class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId(){
        return this._clientId;
    }

    set clientId(clientId){ 
        if(!(clientId.length === 6)){
            throw TypeError("Client ID must be a 6-digit number");
        }else if(!Number(clientId)){
            throw TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = clientId;
    }

    get email(){
        return this._email;
    }

    set email(email){
        let reg = /[a-zA-Z]+@[a-zA-Z.]+/g;
        let match = reg.test(email);

        if(!match){
            throw TypeError("Invalid e-mail");
        }

        this._email = email;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(firstName){
        let regNums = /[0-9]/g;
        let reg = /[a-zA-Z]{3,20}/g;
        let match = reg.test(firstName);
        let matchNums = regNums.test(firstName);

        let regLatin = /[а-яА-Я]{3,20}/g
        let matchLatin = regLatin.test(firstName);

        if(matchNums || matchLatin){
            throw TypeError("First name must contain only Latin characters");
        }

        if(!match){
            throw TypeError("First name must be between 3 and 20 characters long")
        }

        this._firstName = firstName;
    }

    get lastName(){
        return this._lastname;
    }

    set lastName(lastName){
        let regNums = /[0-9]/g;
        let reg = /[a-zA-Z]{3,20}/g;
        let match = reg.test(lastName);
        let matchNums = regNums.test(lastName);

        if(!match){
            throw TypeError("Last name must be between 3 and 20 characters long")
        }

        if(matchNums){
            throw TypeError("Last name must contain only Latin characters");
        }

        this._lastName = lastName;
    }
}

let acc = new CheckingAccount('131445', 'iva@some.com', 'Петро', 'Petrov')

console.log(acc);
