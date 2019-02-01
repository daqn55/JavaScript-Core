function validate() {
    document.getElementById("exercise").querySelector("button").addEventListener("click", clickEvent);
    
    function clickEvent() {
        let year = document.getElementById("year").value;
        let month = document.getElementById("month").value;
        let date = document.getElementById("date").value;

        let gender;
        let male = document.getElementById("male").checked;
        let female = document.getElementById("female").checked;
        if (male){
            gender = "male";
        }else if (female){
            gender = "female";
        }

        let region = document.getElementById("region").value;

        console.log(`${year}, ${month}, ${date}, ${gender}, ${region}`);
    }
}