function solve() {
    Array.from(document.getElementsByTagName("img")).forEach((img) => {img.addEventListener("click", clickEvent)});

    function clickEvent(e) {
        let elem = e.target;

        elem.src = "./images/whiteCard.jpg";

        let spans = document.getElementById("result").children;

        if (elem.parentNode.id === "player1Div"){
            spans[0].textContent = elem.name;
            elem.removeEventListener("click", clickEvent);
        }
        else if(elem.parentNode.id === "player2Div"){
            spans[2].textContent = elem.name;
            elem.removeEventListener("click", clickEvent);
        }

        let winner;
        let looser;

        let leftCardSpan = spans[0].textContent;
        let rightCardSpan = spans[2].textContent;

        if (leftCardSpan && rightCardSpan){
            if (+leftCardSpan >= +rightCardSpan){
                winner = document.querySelector(`#player1Div img[name="${leftCardSpan}"]`);
                looser = document.querySelector(`#player2Div img[name="${rightCardSpan}"]`);
            }
            else {
                winner = document.querySelector(`#player2Div img[name="${rightCardSpan}"]`);
                looser = document.querySelector(`#player1Div img[name="${leftCardSpan}"]`);
            }

            winner.style.border = "2px solid green";
            looser.style.border = "2px solid darkred";

            document.getElementById("history").textContent += `[${leftCardSpan} vs ${rightCardSpan}] `;

            spans[0].textContent = "";
            spans[2].textContent = "";
        }
    }
}