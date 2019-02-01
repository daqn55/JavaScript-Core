function solve() {
    document.getElementById("exercise").querySelector("button").addEventListener("click", clickEvent);
    
    function clickEvent() {
        let fromCard = document.getElementById("from").value;
        let toCard = document.getElementById("to").value;

        let lastCards = {"J":11, "Q":12, "K":13, "A":14};
        let lastCardsValues = {11: "J", 12: "Q", 13: "K", 14: "A"};

        if (lastCards[fromCard.toUpperCase()] !== undefined){
            fromCard = lastCards[fromCard.toUpperCase()];
        }

        if (lastCards[toCard.toUpperCase()] !== undefined){
            toCard = lastCards[toCard.toUpperCase()];
        }

        let typeOfCard = document.getElementById("exercise").querySelector("select").value.split(" ")[1];

        for (let i = fromCard; i <= toCard; i++) {
            let cardNumber = i;
            if (i > 10){
                cardNumber = lastCardsValues[i];
            }

            let cardDiv = document.createElement("div");
            cardDiv.className = "card";
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");

            p1.appendChild(document.createTextNode(typeOfCard));
            p2.appendChild(document.createTextNode(cardNumber));
            p3.appendChild(document.createTextNode(typeOfCard));

            cardDiv.appendChild(p1);
            cardDiv.appendChild(p2);
            cardDiv.appendChild(p3);

            document.getElementById("cards").appendChild(cardDiv);
        }
    }
}