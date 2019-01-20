function CalorieObject(data) {
    let object = {};

    let productName = "";
    for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0){
            productName = data[i];
        }
        else{
            object[productName] = Number(data[i]);
        }
    }

    console.log(object);
}

CalorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);