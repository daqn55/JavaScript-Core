function leapYear() {
    document.getElementById("exercise").querySelector("button").addEventListener("click", clickEvent);

    function clickEvent() {
        let year = document.getElementById("exercise").querySelector("input");

        let isLeapYear;
        if (((year.value % 4 === 0) && (year.value % 100 !== 0)) || (year.value % 400 === 0)){
            isLeapYear = "Leap Year";
        }else{
            isLeapYear = "Not Leap Year";
        }

        let result = document.getElementById("year").children;

        result[0].textContent = isLeapYear;
        result[1].textContent = year.value;

        year.value = "";
    }
}