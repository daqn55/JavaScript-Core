function validate() {
    document.getElementById("exercise").querySelector("button").addEventListener("click", clickEvent);

    function clickEvent() {
        let number = document.getElementById("exercise").querySelector("input").value;

        let result;
        let resultNumber = 0;
        if (number.length !== 10){
            result = "This number is NOT Valid!";
        }else {
            let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

            for (let i = 0; i < number.length-1; i++) {
                resultNumber += number[i] * weights[i];
            }

            let reminderNumber = resultNumber % 11;

            if (reminderNumber === 10){
                reminderNumber = 0;
            }

            if (reminderNumber === Number(number[number.length-1])){
                result = "This number is Valid!";
            }else {
                result = "This number is NOT Valid!";
            }
        }

        document.getElementById("response").textContent = result;
    }
}