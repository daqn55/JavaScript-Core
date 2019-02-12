function tableFilter(arr, commandStr) {

    let command = commandStr.split(" ");

    let headers;
    let dataToShow = "";

    let header = arr[0];
    let data;
    if(arr.length > 1){
        data = arr.slice(1);
        data = data.filter(x => x.length === header.length).slice();
    }

    let headerName = command[1];
    let index = arr[0].indexOf(headerName);
    
    switch (command[0]) {
        case "hide":
            headers = " | " + header.filter(x => x !== headerName).join(" | ");
            if(data){
                dataToShow = data.map(x => x.filter(a => x.indexOf(a) !== index)).map(x => " | " + x.join(" | ")).join("\n");
            }
            break;
        case "sort":
            headers = header.join(" | ");
            if(data){
                dataToShow = data.sort((a,b) => a[index].localeCompare(b[index])).map(x => x.join(" | ")).join("\n");
            }
            break;
        case "filter":
            let filterName = command[2];
            headers = header.join(" | ");

            if(data){
                dataToShow = data.filter(x => x[index] === filterName).map(x => x.join(" | ")).join("\n");
            }
            break;
    }

    console.log(headers);
    console.log(dataToShow);
}
tableFilter([['name', 'age', 'grade'], ['Peter', '25', '6.00'], ['George', '25', '4.00'], ['Marry', '25', '5.49'], ['Marry', '25', '5.49']], 'sort grade');

//tableFilter([['name', 'age', 'grade'], []], 'sort name');