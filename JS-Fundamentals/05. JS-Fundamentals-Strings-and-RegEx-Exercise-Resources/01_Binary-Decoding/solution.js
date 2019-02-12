function solve() {
  let str = document.getElementById("str").value;
  let result = document.getElementById("result");

  let sumOfNum = str.split("").map(x => +x).reduce((a, b) => a + b);

  let numOfCharToRemove = sumOfNum.toString().split("").map(x => +x).reduce((a, b) => a + b);
  while (true) {
    if(numOfCharToRemove.toString().length > 1){
      numOfCharToRemove = numOfCharToRemove.toString().split("").map(x => +x).reduce((a, b) => a + b);
    }
    else{
      break;
    }
  }

  let newStr = str
                  .slice(numOfCharToRemove, (str.length - numOfCharToRemove)).match(/.{1,8}/g)
                  .map(x => parseInt(x, 2))
                  .map(x => String.fromCharCode(x))
                  .join("");

  let finalResult = newStr.match(/[a-zA-Z\s]/g).join("");

  result.textContent = finalResult; 
}