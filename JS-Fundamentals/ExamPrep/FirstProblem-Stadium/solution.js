function solve() {
    Array.from(document.querySelectorAll("button")).forEach(b => b.addEventListener("click", eventCall));

    let count = 0;
    Array.from(document.querySelectorAll("button")).forEach(x => {
        if(count === 3){
            count = 0;
        }

        x.id = count;
        count++;
    });

    document.getElementById("summary").querySelector("button").removeEventListener("click", eventCall);
    document.getElementById("summary").querySelector("button").addEventListener("click", eventSummary);

    let sectors = ["A", "B", "C"];
    let result = document.getElementById("output");

    let priceTeam = {"A": 10, "B": 7, "C": 5};
    let priceVip = {"A": 25, "B": 15, "C": 10};

    let summary = {"SumOfTickeds": 0, "Fans": 0};
    function eventCall(e) {
        let button = e.target;

        let seat = button.textContent;
        let zone = button.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        let sector = sectors[+button.id];

        if(button.className === "takenSeat"){
            result.value += ` Seat ${seat} in zone ${zone} sector ${sector} is unavailable.\n`
        }
        else{
            button.className = "takenSeat";
            result.value += ` Seat ${seat} in zone ${zone} sector ${sector} was taken.\n`

            if (zone === "VIP") {
                summary.SumOfTickeds += priceVip[sector];
            }
            else{
                summary.SumOfTickeds += priceTeam[sector];
            }

            summary.Fans++;
        }

        console.log(result.value);
        
    }

    function eventSummary(e) {
        let finalSummary = document.getElementById("summary").querySelector("span").textContent = `${summary.SumOfTickeds} leva, ${summary.Fans} fans.`;
    }
}