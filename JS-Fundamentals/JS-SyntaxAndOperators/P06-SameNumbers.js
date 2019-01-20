function SameNumbers(number) {
    let numberInString = number.toString();

    let isSame = 'true';
    let firstNumber = numberInString[0];
    let sumOfNumbers = Number(firstNumber);
    for (let i = 1; i < numberInString.length; i++) {
        sumOfNumbers += Number(numberInString[i]);
        if (firstNumber !== numberInString[i]){
            isSame = 'false';
        }
    }

    console.log(isSame);
    console.log(sumOfNumbers);
}

SameNumbers(1234);