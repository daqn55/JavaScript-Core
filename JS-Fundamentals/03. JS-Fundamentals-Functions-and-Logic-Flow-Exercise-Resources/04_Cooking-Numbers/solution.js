function solve() {
    let buttons = document.getElementById("operations").querySelectorAll("button");

    for (let b of buttons) {
        b.addEventListener("click", clickEvent);
    }

    function clickEvent(e){
        let buttonName = e.target.textContent.toLowerCase();

        let number = +document.getElementById("exercise").querySelector("input").value;
        let resultNum = document.getElementById("output").textContent;

        if (resultNum !== ""){
            number = +resultNum;
        }

        let result;
        switch (buttonName) {
            case "chop":
                result = number / 2; break;
            case "dice":
                result = Math.sqrt(number); break;
            case "spice":
                result = number + 1; break;
            case "bake":
                result = number * 3; break;
            case "fillet":
                result = number * 0.8; break;
        }

        document.getElementById("output").textContent = result;
    }
}
