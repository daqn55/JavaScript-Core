function getNext() {
    let num = document.getElementById("num").value;

    let result = [];

    let currentNum = num;
    while (true){
        result.push(currentNum);
        if (currentNum % 2 === 0){
            currentNum /= 2;
        } else{
            currentNum = (3 * currentNum) + 1;
        }

        if (+currentNum <= 1){
            result.push(currentNum);
            break;
        }
    }

    document.getElementById("result").textContent = result.join(" ") + " ";
}