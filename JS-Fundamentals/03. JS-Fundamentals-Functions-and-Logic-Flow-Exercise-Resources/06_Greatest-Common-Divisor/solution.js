function greatestCD() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let numForDivisor = num1;
    let remainder = num2;
    while (true){
        if (numForDivisor % remainder === 0){
            break;
        }
        else{
            let menRemainder = remainder;
            remainder = numForDivisor % remainder;
            numForDivisor = menRemainder;
        }
    }

    document.getElementById("result").textContent = remainder;
}