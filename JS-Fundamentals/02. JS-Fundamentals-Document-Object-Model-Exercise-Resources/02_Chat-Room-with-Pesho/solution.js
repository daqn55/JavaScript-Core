function solve() {
    let myButton = document.querySelector("#exercise button[name='myBtn']");
    let peshoButton = document.querySelector("#exercise button[name='peshoBtn']");

    myButton.addEventListener("click", myClickButton);
    peshoButton.addEventListener("click", myClickButton);

    function myClickButton(e){
        let btn = e.target;

        let textAling;
        let writer;
        let textInBox;

        if (btn.name === "myBtn") {
            textAling = "left";
            textInBox = document.getElementById("myChatBox").value;
            writer = "Me";
            document.getElementById("myChatBox").value = "";
        }
        else{
            textAling = "right";
            textInBox = document.getElementById("peshoChatBox").value;
            writer = "Pesho";
            document.getElementById("peshoChatBox").value = "";
        }

        let div = document.createElement("div");
        let span = document.createElement("span");
        let paragraph = document.createElement("p");

        span.textContent = writer;
        paragraph.textContent = textInBox;

        div.style.textAlign = textAling;
        div.appendChild(span);
        div.appendChild(paragraph);

        document.getElementById("chatChronology").appendChild(div);

        console.log(e.target);
    }

    console.log(myButton);

}