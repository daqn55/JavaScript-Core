function strictMode(arr) {
    let matches = arr.map(x => x.match(/<([^>]+)>/g));
    
    let result = [];
    let countOfArr = 0;

    for (const m of matches) {
        if(m !== null){
            if(m.length % 2 === 0){
                let isValid;
                let count = m.length-1;
                for (let i = 0; i < m.length / 2; i++) {
                    if(m[i] === "< >" || m[i] === "<*>" || m[i] === "<>"){
                        isValid = false;
                        break;
                    }
                    let tag1 = m[i].split("").slice(1, m[i].length-1).join("").split(" ")[0];
                    
                    let tag2 = m[count].split("").slice(1, m[count].length-1).join("");
                    
                    if(("/" + tag1) === tag2 && tag2.split(" ").length === 1){
                        isValid = true;
                    }else{
                        isValid = false;
                        break;
                    }
                    count--;
                }

                if(isValid){
                    result.push(arr[countOfArr].replace(/<([^>]+)>/g, ""));
                }
                countOfArr++;
            }
        }
    }

    
    console.log(result.join(" "));
}

//strictMode(['<h1><span>Hello World!</span></h1>', '<p>I am Peter.']);

strictMode(['<div><p>This</p> is</div>','<div><a>perfectly</a></div>','<divs><p>valid</p></divs>','<div><p>This</div></p>','<div><p>is not</p><div>'])

strictMode(["<a class='djadja'>adadada</a>"])