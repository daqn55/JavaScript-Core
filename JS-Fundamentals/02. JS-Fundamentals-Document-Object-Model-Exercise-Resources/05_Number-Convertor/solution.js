function solve() {
    document.getElementById("menus").querySelector("button").addEventListener("click", clickEvent);

    let selectMenu = document.getElementById("selectMenuTo");
    let option1 = selectMenu.querySelector("option");
    option1.value = "binary";
    option1.textContent = "Binary";

    let option2 = document.createElement("option");
    option2.value = "hexadecimal";
    option2.textContent = "Hexadecimal";

    selectMenu.appendChild(option2);

    function clickEvent(e) {
        let button = e.target;
        let input = document.getElementById("input");

        let parsedNumber = parseInt(input.value, 10);

        if (option1.selected){
            parsedNumber = parsedNumber.toString(2);
        }else if(option2.selected){
            parsedNumber = parsedNumber.toString(16);
        }

        document.getElementById("result").value = parsedNumber.toUpperCase();
    }
}