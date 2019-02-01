function rotateArr(arr) {
    let step = arr[arr.length-1];
    let newArr = arr.slice(0, arr.length-1);
    for (let i = 0; i < step; i++) {
        let rotatedArray = [];
        rotatedArray.push(newArr[newArr.length-1]);
        for (let i = 0; i < newArr.length-1; i++) {
            rotatedArray.push(newArr[i]);
        }
        newArr = rotatedArray.slice();
    }

    console.log(newArr.join(" "));
}

let arr = ['1', '2', '3', '4', '2'];
let arr2 = ['Banana', 'Orange', 'Coconut', 'Apple', '15'];


rotateArr(arr2);