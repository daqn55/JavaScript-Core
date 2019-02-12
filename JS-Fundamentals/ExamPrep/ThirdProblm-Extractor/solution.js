function solve() {
    document.getElementById("exercise").querySelector("button").addEventListener("click", eventClick);

    function eventClick() {
        let input = document.getElementById("input").value;

        let startingNumber = input.match(/[0-9]+/)[0];
        let inputToManipulate = input.split("").slice(startingNumber.length, +startingNumber + startingNumber.length).join("");

        let splitedInput = inputToManipulate.split(inputToManipulate[inputToManipulate.length - 1]).filter(x => x);
        let regex = new RegExp("[^" + splitedInput[0] + "]", "g");
        let result = splitedInput[1].match(regex).join("").replace(/#/g, " ");

        document.getElementById("output").textContent = result;
    }
}