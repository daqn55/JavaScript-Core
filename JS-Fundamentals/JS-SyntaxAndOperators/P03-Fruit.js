function FruitBuyCalculate(type, weight, price) {
    let weightInKg = Number(weight) / 1000;
    let totalPrice = weightInKg * price;

    console.log(`I need ${totalPrice.toFixed(2)} leva to buy ${weightInKg.toFixed(2)} kilograms ${type}.`)
}

FruitBuyCalculate('orange', 2500, 1.80);