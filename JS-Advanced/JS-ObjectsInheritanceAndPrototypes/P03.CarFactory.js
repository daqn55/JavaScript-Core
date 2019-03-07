function solve(orderCar){
    let carParts = { 
        SmallEngine: { power: 90, volume: 1800 },
        NormalEngine: { power: 120, volume: 2400 },
        MonsterEngine: { power: 200, volume: 3500 },
        hatchback: { type: 'hatchback', color: '' },
        coupe: { type: 'coupe', color: '' }
    }

    let engine = '';
    if(orderCar.power > 90 && orderCar.power <= 120){
        engine = 'NormalEngine';
    }else if(orderCar.power > 120 && orderCar.power <= 200){
        engine = 'MonsterEngine';
    }
    else{
        engine = 'SmallEngine';
    }

    let newCar = {
        model: orderCar.model,
        engine: carParts[engine],
        carriage: carParts[orderCar.carriage],
        wheels: Array(4).fill(orderCar.wheelsize % 2 === 0 ? orderCar.wheelsize - 1 : orderCar.wheelsize)
    }
    newCar.carriage.color = orderCar.color;

    return newCar;
}

let firstCar = { model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 };

console.log(solve(firstCar));




