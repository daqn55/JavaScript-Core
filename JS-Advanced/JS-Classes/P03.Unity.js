class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    getRats(){
        return this.unitedRats;
    }

    unite(newRat){
        if(typeof newRat === 'object'){
            return this.unitedRats.push(newRat);
        }
        return "Invalid Rat";
    }

    toString(){
        let result = this.name;
        for (const x of this.unitedRats) {
            result += `\n##${x.name}`
        }

        return result;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
