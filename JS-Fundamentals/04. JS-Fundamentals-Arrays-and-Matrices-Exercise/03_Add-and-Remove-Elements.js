function printArr(arr) {
    let arrayNums = [];
    
    let count = 0;
    for(let x of arr){
        count++;
        if(x === "add"){
            arrayNums.push(count);
        }else if(x === "remove"){
            arrayNums.pop();
        }
    }

    if(arrayNums.length < 1){
        console.log("Empty");
    }else{
        console.log(arrayNums.join("\n"));
    }
}

let arr = ['add', 'add', 'remove', 'add', 'add'];

printArr(arr);