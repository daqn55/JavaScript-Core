function TimeToWalk(steps, metersOfFootprint, kmH) {
    let meters = steps * metersOfFootprint;

    let minutesRest = Math.floor(meters / 500);

    let km = meters / 1000;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    hours = Math.floor(km / kmH);
    let hoursWithZero = ('0' + hours).slice(-2);
    minutes = Math.floor((km / kmH) * 60);
    let minutesWithZero = ('0' + (minutes + minutesRest)).slice(-2);
    seconds = Math.round((((km / kmH) * 60) - minutes) * 60);
    let secondsWithZero = ('0' + seconds).slice(-2);

    console.log(`${hoursWithZero}:${minutesWithZero}:${secondsWithZero}`);
}

TimeToWalk(4000, 0.60, 5);