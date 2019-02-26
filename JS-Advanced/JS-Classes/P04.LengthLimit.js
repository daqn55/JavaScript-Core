class Stringer{
    constructor(str, initialLength){
        this.str = str;
        this.initialLength = initialLength;
        this.innerString = str;
        this.innerLength = initialLength;
    }

    increase(length){
        this.innerLength = +this.innerLength + length;
    }

    decrease(length){
        if((+this.innerLength - length) < 0){
            this.innerLength = 0;
        }else{
            this.innerLength = +this.innerLength - length;
        }
    }

    toString(){
        if(this.str.length <= this.innerLength){
            return this.str;
        }else{
            this.innerString = this.str.split('').slice(0, this.innerLength).join('');
            return this.innerString + '...';
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
