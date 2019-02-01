function printArr(arr) {
    let delimiter = arr[arr.length-1];

    let newArr = arr.slice(0, arr.length-1);

    
    console.log(newArr.join(delimiter));
    
}

let arr = ['One', 'Two', 'Three', 'Four', 'Five', '-'];

printArr(arr);