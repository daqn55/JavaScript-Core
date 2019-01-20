function Rates(day, service, time) {
    let timeInNumber = Number(time);

    let price = 0;
    if (service === 'Fitness') {
        price = makeAPrice(day, timeInNumber, 5, 7.5, 8, 8);
    }
    else if (service === 'Sauna') {
        price = makeAPrice(day, timeInNumber, 4, 6.5, 7, 7);
    }
    else if (service === 'Instructor') {
        price = makeAPrice(day, timeInNumber, 10, 12.5, 15, 15);
    }

    function makeAPrice(day, time, firstPrice, secondPrice, thirdPrice, fourPrice){
        let price = 0;

        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
                if (time >= 8 && time <= 15) {
                    price = firstPrice;
                }
                else if(time > 15 && time <= 22){
                    price = secondPrice;
                }
                break;
            case 'Saturday':
            case 'Sunday':
                if (time >= 8 && time <= 15) {
                    price = thirdPrice;
                }
                else if(time > 15 && time <= 22){
                    price = fourPrice;
                }
                break;
        }

        return price;
    }

    console.log(price);
}



Rates('Sunday', 'Fitness', 22.00);

Rates('Monday', 'Sauna', 15.30);
