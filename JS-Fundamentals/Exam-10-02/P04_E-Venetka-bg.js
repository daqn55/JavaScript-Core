function vinetka(obj) {
    let towns = {};
    for (const o of obj) {     
        towns[o.town] = 0;
    }

    let biggestProfit = 0;
    let townWithBigProfit = "";
    for (const t in towns) {
        let townObj = obj.filter(x => x.town === t);

        if(townObj.length > 1){
            towns[t] = townObj.reduce((a, {price}) => a + price, 0);
            
        }else{
            towns[t] = obj.filter(x => x.town === t)[0].price;
        }
        
        if(biggestProfit < towns[t]){
            biggestProfit = towns[t];
            townWithBigProfit = t;
            
        }
    }
    
    let result = townWithBigProfit + " is most profitable - " + biggestProfit + " BGN\n"

    let cars = {};
    for (const o of obj.filter(x => x.town === townWithBigProfit)) {
        if(cars[o.model] === 1){
            cars[o.model]++;
        } else{
            cars[o.model] = 1;
        }
    }
    
    let checkMostDriven = 0;
    for (const o in cars) {
        checkMostDriven += cars[o];
    }

    let mostModel = "";
    if(checkMostDriven / Object.keys(cars).length === 1){
        let test = obj.filter(x => x.town === townWithBigProfit).reduce((a, p) => a && a.price > p.price ? a : p, null);
        mostModel = test.model;
    }else{
        let count = 0;
        for (const x in cars) {
            if(count < cars[x]){
                mostModel = x;
            }
        }
    }
    
    result += `Most driven model: ${mostModel}\n`

    let plates = obj.filter(x => x.model === mostModel);

    var sortable = [];
    for (var t of plates) {
        if(!sortable.includes(t.town)){
            sortable.push(t.town);
        }
    }

    let sortedTowns = sortable.sort((a, b) => Comparator(a, b));

    let townPlates = {};
    for (const t of sortedTowns) {
        townPlates[t] = [];
        plates.filter(x => x.town === t).map(x => townPlates[t].push(x.regNumber));
    }

    for (const x in townPlates) {
        result += x + ": " + townPlates[x].sort().join(", ") + "\n";
    }
    console.log(result);

    function Comparator(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }
}

vinetka([{ model: 'Lada', regNumber: 'sasas', town: 'Varna', price: 9},
{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3},]);