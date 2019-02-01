function solve() {
	let buttons = document.getElementById("exercise").querySelectorAll("button");

    for (let x of buttons) {
        x.addEventListener("click", buttonClick);
    }

	function buttonClick(e){
	    let button = e.target;

        let currentTextBox = button.parentNode.querySelector("textarea");

        if (button.textContent.includes("Encode")) {
            let secondTextBox = document.getElementById("exercise").querySelectorAll("button")[1].parentNode.querySelector("textarea");

            let decodedText = "";
            for (let x of currentTextBox.value) {
                decodedText += (String.fromCharCode(x.charCodeAt(0) + 1));
            }

            secondTextBox.value = decodedText;
            currentTextBox.value = "";
        }
        else if (button.textContent.includes("Decode") && currentTextBox.value !== ""){
            let encodedText = "";

            for (let x of currentTextBox.value) {
                encodedText += (String.fromCharCode(x.charCodeAt(0) - 1));
            }

            currentTextBox.value = encodedText;
        }
    }
}