function solve() {
   let buttons = document.getElementById("exercise").querySelectorAll("button");

    for (let b of buttons) {
        b.addEventListener("click", clickFunc);
    }

   function clickFunc(e){
       let button = e.target;

       let user = button.parentNode.querySelectorAll("div")[1];

       let lock;
       let unlock;

       if (user.id === "user1HiddenFields") {
           lock = document.getElementsByName("user1Locked")[0].checked;
           unlock = document.getElementsByName("user1Locked")[1].checked;
       }else if (user.id === "user2HiddenFields") {
           lock = document.getElementsByName("user2Locked")[0].checked;
           unlock = document.getElementsByName("user2Locked")[1].checked;
       }else if(user.id === "user3HiddenFields"){
           lock = document.getElementsByName("user3Locked")[0].checked;
           unlock = document.getElementsByName("user3Locked")[1].checked;
       }

       if (unlock){
           if(user.style.display === "" || user.style.display === "none"){
               user.style.display = "inline-block";
               button.textContent = "Hide it";
           }else {
               user.style.display = "none";
               button.textContent = "Show more";
           }
       }
   }
}