function CommonDivisor(firstNumber, secondNumber) {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

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

    console.log(remainder);
}

CommonDivisor(2154, 458);