class List{
    constructor(){
        this.arr = [];
        this.size = 0;
    }
    
    add(elemenent){
        this.arr.push(elemenent);
        this.size++;
        return this.arr = this.arr.sort((a, b) => a - b).slice();
    }

    remove(index){
        if(index <= this.arr.length-1 && index >= 0){
            this.arr.splice(index, 1);
            this.size--;
            return this.arr;
        }
    }

    get(index){
        if(index <= this.arr.length-1 && index >= 0){
            return this.arr[index];
        }
    }
}

let arr = new List();
arr.add(5);
console.log(arr.add(2));
console.log(arr.add(7));
console.log(arr.remove(1));
console.log(arr.get(0));
console.log(arr.size);



