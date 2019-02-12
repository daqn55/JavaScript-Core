function solve() {
   Array.from(document.getElementById("exercise").querySelectorAll("button")).forEach(b => b.addEventListener("click", eventClick));

   let result = document.getElementById("output").getElementsByTagName("p")[0];
   function eventClick(b) {
      let button = b.target;

      let input = document.getElementById("input").value;

      switch (button.textContent) {
         case "Filter":
               let command = document.getElementById("filterSecondaryCmd").value;
               let position = document.getElementById("filterPosition").value;

               switch (command) {
                  case "uppercase":
                     let uppercase = input.split("").filter(x => x === x.toUpperCase() && isNaN(parseInt(x, 10)));
                     let letterToExtract = uppercase[position - 1];
                     result.innerHTML += letterToExtract;
                     break;
                  case "lowercase":
                     let lowercase = input.split("").filter(x => x === x.toLowerCase() && isNaN(parseInt(x, 10)));
                     let letterToExtractLow = lowercase[position - 1];
                     result.innerHTML += letterToExtractLow;
                     break;
                  case "nums":
                     let nums = input.split("").filter(x => !isNaN(parseInt(x, 10)));
                     let numToExtract = nums[position - 1];
                     result.innerHTML += numToExtract;
                     break;
               }
            break;
         case "Sort":
               let sortCmd = document.getElementById("sortSecondaryCmd").value;
               let sortPosition = document.getElementById("sortPosition").value;

               switch (sortCmd) {
                  case "A":
                     let sortFromA = input.split("").sort((a, b) => {
                        if(a < b){return -1;}
                        else if(a > b){return 1;}
                        return 0;
                     });
                     result.innerHTML += sortFromA[sortPosition - 1];                     
                     break;
                  case "Z":
                     let sortFromZ = input.split("").sort((a, b) => {
                        if(a > b){return -1;}
                        else if(a < b){return 1;}
                        return 0;
                     });
                     result.innerHTML += sortFromZ[sortPosition - 1];        
                     break;
               }
            break;
         case "Rotate":
               let arr = input.split("").slice();
               let count = document.getElementById("rotateSecondaryCmd").value;
               let newArr = arrayRotate(arr, count);
               let rotPosition = document.getElementById("rotatePosition").value;
               result.innerHTML += newArr[rotPosition - 1];
            break;
         case "Get":
               let getPosition = document.getElementById("getPosition").value;
               result.innerHTML += input.split("")[getPosition - 1];
            break;
      }
   }

   function arrayRotate(arr, count){
      for (let i = 0; i < count; i++) {
         arr.unshift(arr.pop());
      }
      return arr;
    } 
}