function printArr(arr) {

    let step = Number(arr[arr.length-1]);
    
    console.log(arr[0]);

    for (let i = step; i < arr.length-1; i+=step) {
        console.log(arr[i]);
    }
}

let arr = ['5', '20', '31', '4', '20', '2'];

printArr(arr);